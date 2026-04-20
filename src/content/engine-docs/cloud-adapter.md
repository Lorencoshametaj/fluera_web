---
title: "CloudStorageAdapter"
description: "Opt-in cloud sync. Bring your own backend — Firebase, Supabase, S3, a REST API of your choosing."
section: adapters
sectionLabel: "Adapters"
order: 2
apiSignature: "abstract class CloudStorageAdapter"
since: "v1.0"
---

`CloudStorageAdapter` is the engine's way of saying: "if you want cloud sync, here is the contract." The engine does not dictate a vendor. Fluera (the app) uses Supabase; you can use anything.

## Contract (abbreviated)

```dart
abstract class CloudStorageAdapter {
  // Lifecycle
  Future<void> init();
  Future<void> close();

  // Authentication
  Future<AuthToken?> currentToken();
  Stream<AuthToken?> authChanges();

  // Canvas sync
  Future<void> uploadCanvas(CanvasId id, Uint8List encryptedBytes);
  Future<Uint8List?> downloadCanvas(CanvasId id);
  Future<List<CloudCanvasMetadata>> listCanvases();
  Future<void> deleteCanvas(CanvasId id);

  // Assets
  Future<String> uploadAsset(AssetId id, Uint8List encryptedBytes);
  Future<Uint8List?> downloadAsset(AssetId id);

  // Conflict metadata
  Future<VectorClock?> getCanvasClock(CanvasId id);
  Future<void> setCanvasClock(CanvasId id, VectorClock clock);
}
```

## Encryption model

The engine encrypts canvases **before** calling `uploadCanvas`. The adapter receives ciphertext and stores ciphertext. This is the end-to-end design — your backend never has the key, and you don't have to implement encryption yourself.

If your business requires you to see the canvas contents (e.g. for server-side search indexing), you would pass plaintext — but then you break the end-to-end guarantee and should disclose this to users explicitly.

## Reference implementations

### Supabase

```dart
class SupabaseCloudAdapter implements CloudStorageAdapter {
  final SupabaseClient client;

  SupabaseCloudAdapter({ required this.client });

  @override
  Future<void> uploadCanvas(CanvasId id, Uint8List encryptedBytes) async {
    await client.storage
      .from('canvases')
      .uploadBinary('${id.value}.fluera', encryptedBytes, fileOptions: FileOptions(upsert: true));
  }

  @override
  Future<Uint8List?> downloadCanvas(CanvasId id) async {
    try {
      return await client.storage.from('canvases').download('${id.value}.fluera');
    } on StorageException catch (e) {
      if (e.statusCode == '404') return null;
      rethrow;
    }
  }

  // ... other methods ...
}
```

### REST / S3

Any REST backend works. Upload/download ciphertext bytes, optionally with presigned URLs. The engine batches uploads, handles retry with exponential backoff, and debounces saves at the application level — you do not need to implement any of that.

## Conflict resolution

The engine uses CRDTs with vector clocks to merge concurrent edits. Your adapter's only job is to read and write the vector clock alongside the canvas payload. Merge logic happens client-side, inside the engine.

If your backend supports atomic compare-and-swap on the clock (e.g. Firestore transactions, Supabase RLS policies), use it — it prevents some edge cases under heavy write contention. If it doesn't, the engine's client-side CRDT still guarantees eventual consistency.

## Backpressure

`uploadCanvas` may be called frequently (the engine debounces to ~3 seconds of inactivity before triggering, but heavy drawing can still generate many uploads per minute). Your adapter should:

- Queue uploads if a previous one is still in flight
- Coalesce multiple queued uploads for the same canvas
- Use HTTP/2 or websocket-level multiplexing if possible

The reference `SupabaseCloudAdapter` implements all of this.

## Testing

`MockCloudAdapter` ships with the engine. Use it in tests to assert upload/download behaviour without needing a real backend.

## Next

- [Storage adapter](/engine/docs/storage-adapter)
- [Custom brushes](/engine/docs/custom-brushes)
