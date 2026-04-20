---
title: "Custom brushes"
description: "The engine ships with 13 brushes. If that's not enough, define your own — pressure curves, tilt behaviour, fragment shaders, all pluggable."
section: advanced
sectionLabel: "Advanced"
order: 1
apiSignature: "abstract class Brush"
since: "v1.0"
---

The default `BrushSet.pro()` covers almost every common use case. Custom brushes are for when you need something genuinely new — a dip-pen calligraphy brush for a Japanese-market writing app, a geometric pixel brush for a retro art tool, a neural-network-driven brush that imitates a specific artist's style.

This is an advanced topic. You probably do not need it.

## Brush anatomy

A `Brush` has four parts:

1. **InputMapper** — turns raw touch points into `StrokePoint`s (pressure, tilt, velocity)
2. **Stabilisation** — smooths input to remove jitter while preserving intent
3. **Tessellation** — converts stroke points into GPU-ready geometry
4. **Shader** — fragment shader that produces the final pixels

Any of the four can be customised independently. Most custom brushes override just the shader.

## Minimal custom brush

```dart
class RainbowBrush extends Brush {
  @override
  String get id => 'rainbow';

  @override
  BrushDescriptor get descriptor => const BrushDescriptor(
    name: 'Rainbow',
    iconPath: 'assets/brushes/rainbow.svg',
    supportsPressure: true,
    supportsTilt: false,
  );

  @override
  InputMapper get inputMapper => const DefaultPressureMapper();

  @override
  Stabilisation get stabilisation => const OneEuroStabilisation();

  @override
  Tessellator get tessellator => const VariableWidthTessellator();

  @override
  FragmentShader get shader => FragmentShader.fromAsset('shaders/rainbow.frag');
}
```

Register it by adding it to your `BrushSet` at config time:

```dart
final brushes = BrushSet.pro().withExtras([
  const RainbowBrush(),
]);

FlueraCanvasConfig(
  brushes: brushes,
  // ... other config ...
);
```

## Fragment shader API

Fragment shaders receive:

- `position` — current pixel position in stroke-local coordinates
- `stroke_color` — per-stroke base colour
- `pressure` — interpolated pressure 0.0–1.0 at this point
- `tilt_x`, `tilt_y` — tilt angle (if the stylus supports it)
- `velocity` — speed in pixels/frame at this stroke point
- `time` — frame-local time for animation

Shaders are compiled once per platform via Flutter's shader pipeline. Reference shaders in `lib/src/rendering/shaders/` show the common patterns.

## Performance constraints

The engine targets 60 FPS (120 on ProMotion) with sub-15 ms stroke latency. Custom brushes must not break that.

- Keep fragment shaders ALU-bound, not texture-fetch-bound
- Avoid conditionals in the shader hot path where possible
- Profile on the slowest target device, not your MacBook Pro
- Test with 10,000-stroke canvases — some pathological shaders are fine on one stroke and murder performance at scale

## Testing

`BrushTestHarness` lets you unit-test a brush against recorded `StrokePoint` traces:

```dart
test('rainbow brush generates expected vertex count', () {
  final trace = StrokeTrace.recorded('test_strokes/s1.bin');
  final harness = BrushTestHarness(RainbowBrush());
  final output = harness.tessellate(trace);
  expect(output.vertices.length, closeTo(1200, 50));
});
```

## When not to build a custom brush

- You want a slight colour variation → use the built-in colour picker
- You want a different line thickness → use the brush customisation panel
- You want a different pressure response → adjust the pressure curve in the brush panel

Custom brushes are for genuinely new behaviour, not for parameter tweaks.

## Next

- [All engine docs](/engine/docs)
