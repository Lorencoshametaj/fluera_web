---
lang: "hi"
title: "Performance tuning"
description: "Fluera को सैकड़ों हज़ारों strokes के canvas पर 60 FPS बनाए रखने के लिए बनाया गया है। जब ऐसा नहीं होता तो क्या check करना है।"
section: troubleshooting
sectionLabel: "ट्रबलशूटिंग"
order: 2
updatedAt: 2026-04-20
---

Fluera का engine आधुनिक hardware पर 15 ms से नीचे की stroke latency के साथ 60 FPS पर रहने के लिए डिज़ाइन है — प्रति notebook सैकड़ों हज़ारों strokes तक। जब नहीं रहता, आमतौर पर एक छोटे set की चीज़ों में से एक ज़िम्मेदार होती है।

## Diagnosis

**सेटिंग्स → Advanced → Performance** खोलें। आप देखेंगे:

- **Current FPS** — 60 पर रहना चाहिए (या ProMotion devices पर 120)
- **Stroke latency** — iOS/macOS पर <15 ms पढ़ना चाहिए, अन्य platforms पर <20 ms
- **Memory used** — absolute और device के budget के percent के रूप में
- **Tile cache hit rate** — सामान्य zoom/pan के दौरान >90% होना चाहिए

यदि यहाँ कुछ लाल है, संभावित कारण नीचे list में हैं।

## बड़े canvas (&gt; 200k strokes)

Engine इस मात्रा को संभालता है, लेकिन दो settings मायने रखती हैं:

- **Memory budget.** 6 GB से कम RAM वाले devices पर, Fluera का default memory budget conservative है। यदि आपके पास बहुत RAM है और तेज़ zoom responses चाहते हैं, तो **सेटिंग्स → कैनवास → Memory budget** में *Generous* तक बढ़ाएँ।
- **Level of detail.** Default LOD policy बहुत कम zoom levels पर strokes को simplify करती है। यदि आप zoomed out होने पर strokes को shaky दिखता notice करते हैं, तो LOD को *High detail* पर बदलें — पर ~10% अधिक GPU load की उम्मीद करें।

## Audio-synced recording (Time Travel)

Time Travel audio को stroke timestamps के साथ store करता है। 60 मिनट की class के लिए, यह लगभग 20 MB audio है। यह audio नहीं है जो चीज़ों को धीमा करता है — यह index है। प्रयास करें:

- **सेटिंग्स → Time Travel → Index granularity** को *Fine* के बजाय *Standard* पर सेट करें
- पुराने Time Travel sessions delete करें जिनकी आपको ज़रूरत नहीं है (default से locally रखे जाते हैं; clear-cache button उन्हें safely हटाता है)

## विशेष रूप से Apple Pencil

iPad पर, default *Predicted touch* mode stroke latency को 8 ms से नीचे रखता है। यदि आपने prediction disable कर दिया है (सेटिंग्स → कैनवास → Stroke latency → Standard में), तो Predicted पर लौटें। Prediction Apple Pencil API है, अनुमान नहीं — यह hardware की अपनी trajectory prediction का उपयोग करता है।

## जब कुछ मदद नहीं करता

**सेटिंग्स → Advanced → Diagnostics export करें** चलाएँ। आपको FPS, memory उपयोग और (anonymous) device जानकारी के samples के साथ एक छोटी JSON फ़ाइल मिलती है। इसे चीज़ें कब धीमी होती हैं इसके छोटे विवरण के साथ [support@fluera.dev](mailto:support@fluera.dev) पर भेजें।

हम diagnostic export मिलने के एक घंटे के अंदर ≈95% user-visible performance regressions को कोड के एक विशिष्ट टुकड़े पर log करते हैं। शेष 5% genuinely कठिन हैं और हम आपको बता देंगे।

## आगे

- [FAQ](/hi/docs/faq)
- [संपूर्ण user documentation](/hi/docs)
