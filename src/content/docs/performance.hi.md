---
lang: "hi"
title: "Performance tuning"
description: "Fluera supported hardware पर 60 FPS और low-latency ink का लक्ष्य रखता है। वास्तविक performance device, canvas complexity और active features के अनुसार बदलती है।"
section: troubleshooting
sectionLabel: "ट्रबलशूटिंग"
order: 2
updatedAt: 2026-04-20
---

Fluera का engine supported hardware पर 60 FPS और low-latency ink का लक्ष्य रखता है। वास्तविक performance device, input stack, canvas complexity और active features के अनुसार बदलती है।

## Diagnosis

**सेटिंग्स → Advanced → Performance** खोलें। आप देखेंगे:

- **Current FPS** — 60 पर रहना चाहिए (या ProMotion devices पर 120)
- **Stroke latency** — reading की तुलना अपने device और input stack के लिए documented target से करें; कोई universal threshold नहीं है
- **Memory used** — absolute और device के budget के percent के रूप में
- **Tile cache hit rate** — सामान्य zoom/pan के दौरान >90% होना चाहिए

यदि यहाँ कुछ लाल है, संभावित कारण नीचे list में हैं।

## बड़े canvas

बड़े canvas को tuning की आवश्यकता हो सकती है। इन दो settings से शुरू करें:

- **Memory budget.** 6 GB से कम RAM वाले devices पर, Fluera का default memory budget conservative है। यदि आपके पास बहुत RAM है और तेज़ zoom responses चाहते हैं, तो **सेटिंग्स → कैनवास → Memory budget** में *Generous* तक बढ़ाएँ।
- **Level of detail.** Default LOD policy बहुत कम zoom levels पर strokes को simplify करती है। यदि आप zoomed out होने पर strokes को shaky दिखता notice करते हैं, तो LOD को *High detail* पर बदलें — पर ~10% अधिक GPU load की उम्मीद करें।

## Audio-synced recording (Time Travel)

Time Travel audio को stroke timestamps के साथ store करता है। 60 मिनट की class के लिए, यह लगभग 20 MB audio है। यह audio नहीं है जो चीज़ों को धीमा करता है — यह index है। प्रयास करें:

- **सेटिंग्स → Time Travel → Index granularity** को *Fine* के बजाय *Standard* पर सेट करें
- पुराने Time Travel sessions delete करें जिनकी आपको ज़रूरत नहीं है (default से locally रखे जाते हैं; clear-cache button उन्हें safely हटाता है)

## विशेष रूप से Apple Pencil

iPad पर default *Predicted touch* mode perceived stroke latency को घटाने के लिए बनाया गया है। परिणाम iPad, Pencil, system version और canvas load के अनुसार बदलते हैं। यदि आपने prediction disable कर दिया है (सेटिंग्स → कैनवास → Stroke latency → Standard में), तो Predicted पर लौटें। Prediction Apple Pencil API है, अनुमान नहीं — यह hardware की अपनी trajectory prediction का उपयोग करता है।

## जब कुछ मदद नहीं करता

**सेटिंग्स → Advanced → Diagnostics export करें** चलाएँ। आपको FPS, memory उपयोग और (anonymous) device जानकारी के samples के साथ एक छोटी JSON फ़ाइल मिलती है। इसे चीज़ें कब धीमी होती हैं इसके छोटे विवरण के साथ [support@fluera.dev](mailto:support@fluera.dev) पर भेजें।

Diagnostics support team को performance issues की जाँच करने में मदद करते हैं। जाँच का समय और परिणाम issue तथा उपलब्ध data के अनुसार बदलते हैं।

## आगे

- [FAQ](/hi/docs/faq)
- [संपूर्ण user documentation](/hi/docs)
