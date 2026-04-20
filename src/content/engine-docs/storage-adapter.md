---
title: "StorageAdapter"
description: "The contract for persisting canvases locally. Implement once if you need a custom backend; use the default if you don't."
section: adapters
sectionLabel: "Adapters"
order: 1
apiSignature: "abstract class StorageAdapter"
since: "v1.0"
---

`StorageAdapter` is the only required adapter. Everything persists through it: scene graph nodes, stroke data, layers, history stack, PDF caches, audio metadata.

For most apps, use `DefaultSqliteStorageAdapter`. Implement your own only if you have a specific reason (custom encryption, custom database engine, cross-platform consistency with an existing app).

## Contract (abbreviated)

```dart
abstract class StorageAdapter {
  Future<void> init();
  Future<void> close();

  // Canvas lifecycle
  Future<CanvasId> createCanvas({ required String title });
  Future<void> deleteCanvas(CanvasId id);
  Future<CanvasMetadata> getCanvasMetadata(CanvasId id);
  Future<List<CanvasMetadata>> listCanvases();

  // Scene graph
  Future<SceneGraph> loadSceneGraph(CanvasId id);
  Future<void> saveSceneGraphDelta(CanvasId id, SceneGraphDelta delta);

  // History / undo
  Future<void> appendHistoryEntry(CanvasId id, CommandEntry entry);
  Stream<CommandEntry> streamHistory(CanvasId id);
  Future<void> truncateHistoryAfter(CanvasId id, HistoryCursor cursor);

  // Assets (images, PDFs, audio)
  Future<AssetId> storeAsset(CanvasId id, Uint8List bytes, AssetKind kind);
  Future<Uint8List> loadAsset(AssetId id);
  Future<void> deleteAsset(AssetId id);

  // Search index (optional — engine falls back to full-scan if not implemented)
  Future<List<SearchResult>> search(CanvasId id, String query)
    => Future.value(const []);
}
```

## Default implementation

`DefaultSqliteStorageAdapter`:

- SQLite database per-app (single file, cross-canvas)
- WAL mode for concurrent reads during writes
- 4 KB page size, automatic vacuum
- Delta-based scene graph saves (not full rewrites)
- History as append-only journal
- Assets stored as BLOBs, separate table

For encrypted storage, use `SqlCipherStorageAdapter` and provide a key from the platform keychain:

```dart
final adapter = SqlCipherStorageAdapter(
  keyProvider: () async => await keychain.read('fluera_key'),
);
```

## When to implement your own

Reasons to write a custom `StorageAdapter`:

- **Shared state with an existing app database** — e.g. your app already uses Drift with a complex schema; you want Fluera tables alongside.
- **Custom encryption** — e.g. FIPS-validated, hardware-backed, remote key management.
- **Non-SQLite backend** — e.g. ObjectBox, Realm, Isar. Possible but rare; the default is well-optimised.
- **Cross-canvas analytics** — e.g. you want to query all canvases' stroke counts for a usage dashboard.

## Threading model

- `init` and `close` run on the platform thread.
- `saveSceneGraphDelta` is called on a background isolate (but serialisation is handled by the engine — you receive the ready-to-persist bytes).
- `loadSceneGraph` may block the UI thread; the engine shows a loading overlay while it resolves.
- All other methods should be async and fast (<100 ms for typical canvas sizes).

## Testing

The engine ships with `MockStorageAdapter` for unit tests:

```dart
test('canvas save triggers storage write', () async {
  final storage = MockStorageAdapter();
  final config = FlueraCanvasConfig.minimal().copyWith(
    storageAdapter: storage,
  );
  // ... instantiate and drive the canvas ...
  expect(storage.writeCallCount, greaterThan(0));
});
```

## Next

- [CloudStorageAdapter](/engine/docs/cloud-adapter) — the opt-in sync layer above this
- [Custom brushes](/engine/docs/custom-brushes) — extend the brush library
