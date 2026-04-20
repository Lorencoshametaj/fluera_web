---
title: "Quickstart"
description: "Drop FlueraCanvasScreen into a Flutter widget tree in five lines. Everything beyond that is progressive configuration."
section: getting-started
sectionLabel: "Getting started"
order: 1
---

The whole point of `fluera_engine` is that you can get a professional 2D canvas into your Flutter app in roughly the time it takes to read this page.

## Install

Add to your `pubspec.yaml`:

```yaml
dependencies:
  fluera_engine: ^1.0.0
```

Run `flutter pub get`.

## Minimal integration

```dart
import 'package:flutter/material.dart';
import 'package:fluera_engine/fluera_engine.dart';

class DrawingPage extends StatelessWidget {
  const DrawingPage({super.key});

  @override
  Widget build(BuildContext context) {
    return FlueraCanvasScreen(
      config: FlueraCanvasConfig.defaults(),
    );
  }
}
```

That's it. You have a working infinite canvas with pressure-sensitive brushes, local SQLite persistence, export to PNG/PDF/SVG, and the full gesture set. No accounts, no cloud, no telemetry — the defaults are opinionated toward local-first.

## What you get out of the box

- 13 pressure-sensitive brush engines
- 23 scene graph node types (strokes, shapes, text, LaTeX, PDF, more)
- Native GPU rendering on all six supported platforms
- SQLite persistence (SQLCipher-encrypted if you supply a key)
- Export to PNG, JPEG, WebP, SVG, PDF, and the proprietary `.fluera` format
- Unlimited undo/redo via write-ahead log

## What you don't get

None of the following are on by default — you inject them only if you need them:

- Cloud sync
- Real-time collaboration
- AI features (Socratic, Ghost Map, etc. — those are Fluera-app features, not engine features)
- Audio-synced Time Travel recording
- Custom brush extensions

Each of these has its own adapter interface, and you only pay the binary size and permissions cost for what you explicitly wire up.

## Next

- [Configuring FlueraCanvasConfig](/engine/docs/fluera-canvas-config) — the central injection point
- [Storage adapter](/engine/docs/storage-adapter) — bring your own database
- [Cloud adapter](/engine/docs/cloud-adapter) — sync to Firebase / Supabase / S3 / REST
