---
lang: "hi"
title: "Brushes"
description: "तेरह brush engines, हर एक एक अलग प्रकार के निशान के लिए कैलिब्रेटेड। सही चुनने के लिए एक छोटा guide — और क्यों यह आपकी सोच से कम मायने रखता है।"
section: canvas
sectionLabel: "कैनवास"
order: 1
updatedAt: 2026-04-20
---

Fluera तेरह brush engines के साथ आता है। हर एक एक पूर्ण rendering pipeline है — pressure, tilt, velocity, per-brush fragment shaders — texture swap नहीं। बहुत लगता है; व्यवहार में, आपका अधिकांश सीखना इनमें से एक या दो में होगा।

## छोटा उत्तर

- यदि आप notes ले रहे हैं: **fountain pen** या **ballpoint pen**। दोनों तेज़, पठनीय, सहनशील।
- यदि आप PDF annotate कर रहे हैं या अवधारणा को highlight कर रहे हैं: **highlighter**।
- यदि आप साफ ज्यामितीय रेखाओं वाला diagram खींच रहे हैं: **technical pen**।
- यदि आप एक त्वरित दृश्य रूपक या illustration बना रहे हैं: **pencil** (हल्के strokes) या **charcoal** (नाटकीय strokes)।

बाकी सब विशिष्ट स्थितियों के लिए है। ज़्यादा न सोचें।

## तेरह

| Brush               | इसके लिए अच्छा                                    | Notes                                          |
|---------------------|---------------------------------------------------|------------------------------------------------|
| Fountain pen        | लंबी हस्तलेखन                                     | Tilt पर प्रतिक्रिया, स्वाभाविक ink flow       |
| Ballpoint pen       | त्वरित notes, समान line                           | Pressure-sensitive width                       |
| Pencil              | नरम, सहनशील strokes                              | Granular texture, pressure से gradation       |
| Technical pen       | CAD-style diagrams, सटीक geometry                | जानबूझकर ज़ीरो pressure sensitivity            |
| Marker              | Chiseled-tip headings, highlights                | Flat strokes, vivid color                      |
| Highlighter         | Overlay highlights (20–30% opacity)              | Overlay mode में blend                         |
| Charcoal            | अभिव्यंजक, खुरदरा texture                        | Smudge effect, edges पर bleed                  |
| Oil                 | Painterly strokes, layered color                 | Wet-edge blending, edges पर darkening          |
| Watercolor          | नरम layers, diffusion                            | Pigment simulation                             |
| Wash                | Wet-on-paper feel                                | Edges पर color bleed                           |
| Spray               | Particle effects, shadows                        | Edges पर distortion                            |
| Neon                | चमकदार annotations                               | Outer glow, fluorescent saturation             |
| Eraser              | Pixel-by-pixel removal, यह delete tool नहीं है   | History-aware — नीचे के निशान प्रकट करता है   |

## क्यों engine मायने रखता है (जल्दी से)

Fluera का engine iOS और macOS पर 15 milliseconds से नीचे की latency के साथ pressure, tilt और velocity signals को संरक्षित करता है। यह केवल product polish नहीं है। <a href="/hi/science/authors/van-der-meer">van der Meer का EEG काम</a> ने दिखाया कि हस्तलेखन उन sensorimotor नेटवर्कों को engage करता है जिन्हें typing engage नहीं करती, और इन signals की समृद्धि capture की fidelity के साथ scale करती है।

व्यावहारिक रूप में: एक कैनवास जो strokes खोता है, pressure के तहत lag करता है, या tilt डेटा को flatten करता है, वह कैनवास है जो ठीक उस signal को फेंक देता है जो हस्तलिखित notes को संज्ञानात्मक रूप से बेहतर बनाता है। हमने engine ज़ीरो से बनाया क्योंकि कोई off-the-shelf विकल्प मानक तक नहीं पहुँचता था।

## एक brush को customize करें

Toolbar पर किसी भी brush को press और hold करें। एक छोटा panel खुलता है जिसमें:

- **Size** (0.5pt – 12pt)
- **Opacity** (10% – 100%)
- **Stabilization** (none / soft / firm) — व्यक्तित्व को मारे बिना jitter को smooth करता है
- **Pressure curve** — हल्के बनाम मजबूत pressure पर response को adjust करता है

बदलाव per-canvas हैं, global नहीं, इसलिए आप एक नोटबुक में soft pencil और दूसरी में sharp ले सकते हैं।

## आगे

- [Gestures और zoom](/hi/docs/gestures-zoom)
- [Export और backup](/hi/docs/cloud-sync)
