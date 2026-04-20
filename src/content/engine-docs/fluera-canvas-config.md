---
title: "FlueraCanvasConfig"
description: "The single injection point for everything the engine does. Understand this class and the rest of the API is predictable."
section: api
sectionLabel: "API reference"
order: 1
apiSignature: "class FlueraCanvasConfig"
since: "v1.0"
---

`FlueraCanvasConfig` is the dependency injection container for the engine. Every adapter, every optional feature, every callback is provided through this class. The pattern is intentional: everything is opt-in, nothing is global, and the host app always decides what to wire.

## Signature (abbreviated)

```dart
class FlueraCanvasConfig {
  final StorageAdapter storageAdapter;
  final CloudStorageAdapter? cloudAdapter;
  final RealtimeAdapter? realtimeAdapter;
  final P2PConnector? p2pConnector;
  final PdfProvider? pdfProvider;
  final VoiceRecordingController? voiceRecording;
  final PermissionsDelegate permissions;
  final PresenceProvider? presence;
  final BrushSet brushes;
  final ThemeData? theme;
  final Map<String, CanvasModule> modules;
  final Locale locale;
  final FlueraCanvasCallbacks callbacks;

  const FlueraCanvasConfig({
    required this.storageAdapter,
    this.cloudAdapter,
    this.realtimeAdapter,
    this.p2pConnector,
    this.pdfProvider,
    this.voiceRecording,
    required this.permissions,
    this.presence,
    required this.brushes,
    this.theme,
    this.modules = const {},
    this.locale = const Locale('en'),
    this.callbacks = const FlueraCanvasCallbacks(),
  });

  factory FlueraCanvasConfig.defaults() => FlueraCanvasConfig(
    storageAdapter: DefaultSqliteStorageAdapter(),
    permissions: PermissionsDelegate.defaults(),
    brushes: BrushSet.pro(),
  );
}
```

## Required adapters

Two things are required:

- `storageAdapter` — handles local persistence. The default `DefaultSqliteStorageAdapter` uses SQLite under the hood and needs no configuration. Swap it for your own if you have specific requirements.
- `permissions` — handles runtime permissions for camera, microphone, file access. `PermissionsDelegate.defaults()` uses the platform-native dialogs.

Everything else is optional.

## Common patterns

### Local-only, offline-first

```dart
FlueraCanvasConfig.defaults()
```

### Local-first with optional cloud sync

```dart
FlueraCanvasConfig(
  storageAdapter: DefaultSqliteStorageAdapter(),
  cloudAdapter: MySupabaseAdapter(),
  permissions: PermissionsDelegate.defaults(),
  brushes: BrushSet.pro(),
)
```

### Fully featured (Fluera app configuration)

```dart
FlueraCanvasConfig(
  storageAdapter: SqlCipherStorageAdapter(keyProvider: keychain),
  cloudAdapter: SupabaseCloudAdapter(project: envSupabase),
  realtimeAdapter: SupabaseRealtimeAdapter(),
  p2pConnector: WebRTCConnector(signaling: SupabaseBroadcast()),
  pdfProvider: PdfKitProvider(),
  voiceRecording: PlatformAudioRecordingController(),
  permissions: PermissionsDelegate.defaults(),
  presence: PresenceBroadcaster(),
  brushes: BrushSet.pro(),
  modules: {
    'atlas-ai': AtlasAiModule(apiKey: envGemini),
    'ghost-map': GhostMapModule(),
  },
  callbacks: FlueraCanvasCallbacks(
    onCanvasSaved: analytics.logCanvasSaved,
    onStrokeCountThreshold: {
      100: analytics.logFirst100Strokes,
      1000: analytics.logFirst1000Strokes,
    },
  ),
)
```

## Constructors and factories

| Factory                         | Use for                                    |
|---------------------------------|--------------------------------------------|
| `FlueraCanvasConfig.defaults()` | Local-only, offline-first (prototypes)     |
| `FlueraCanvasConfig.minimal()`  | Absolute minimum — for tests and mocks     |
| `FlueraCanvasConfig(...)`       | Production — wire exactly what you need    |

Never configure the engine globally or via singletons. Every `FlueraCanvasScreen` receives its own `config`, making per-screen customisation trivial (e.g. a preview canvas with no storage and a main canvas with full persistence).

## Next

- [Scene graph reference](/engine/docs/scene-graph)
- [Storage adapter contract](/engine/docs/storage-adapter)
- [Cloud adapter contract](/engine/docs/cloud-adapter)
