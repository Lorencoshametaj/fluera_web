---
lang: "hi"
title: "FAQ"
description: "वे प्रश्न जो हमें beta testers से सबसे अधिक मिलते हैं। यदि यहाँ कुछ outdated है, तो support को लिखें और हम ठीक करेंगे।"
section: troubleshooting
sectionLabel: "ट्रबलशूटिंग"
order: 1
updatedAt: 2026-04-20
---

## मेरा कैनवास एक सप्ताह तक उपयोग न करने के बाद खुलने में धीमा क्यों है?

पहली बार जब Fluera किसी notebook को pause के बाद load करता है, यह spatial index का पुनर्निर्माण करता है और re-evaluate करता है कि कौन से nodes review के लिए due हैं। बाद के opens तेज़ होते हैं। यदि pause एक महीने से अधिक का था, तो यह भी अपेक्षा करें कि अंतरालित दोहराव scheduler आपकी pending reviews को recalibrate करे।

यदि एक आधुनिक डिवाइस पर पहला open 10 सेकंड से अधिक लेता है, यह bug है — canvas के नाम और अनुमानित node count के साथ [support@fluera.dev](mailto:support@fluera.dev) पर लिखें।

## क्या मैं अपने Anki decks import कर सकता हूँ?

अभी नहीं। Import roadmap पर है पर Phase 1 blocker नहीं है — Fluera का retrieval model संरचनात्मक रूप से अलग है (spatial, atomic नहीं), इसलिए सीधा import अधिकांश value खो देगा। जब आएगा, यह Pro और Education accounts के लिए उपलब्ध होगा।

## क्या मैं अपने canvas को PNG / SVG / PDF में export कर सकता हूँ?

हाँ, सभी, साथ ही हमारा खुला `.fluera` format। **Export** menu देखें। Tier द्वारा कोई restrictions नहीं — exporting डेटा ownership का एक basic feature है, paywalled नहीं।

## AI ने मुझे गलत उत्तर दिया। क्या यह expected है?

कभी-कभी, हाँ। हमारी AI Google Gemini है, और Gemini — हर LLM की तरह — hallucinate कर सकता है। Socratic Mode इसके प्रति कम संवेदनशील है क्योंकि यह definitive answers देने के बजाय प्रश्न पूछता है, पर ज़ीरो नहीं है।

यदि आपको AI से स्पष्ट रूप से गलत उत्तर मिलता है, उत्तर पर **Flag** tap करें। उस feedback का उपयोग prompting सुधारने के लिए होता है; यह anonymized है और कभी आपके content से tied नहीं।

## क्या Fluera internet के बिना काम करेगा?

कैनवास — लिखना, पढ़ना, exporting — पूरी तरह offline है। AI features (Socratic, Ghost Map, Fog of War scoring) को internet चाहिए। अंतरालित दोहराव scheduling local है; केवल sync और AI को connection चाहिए।

## मैं भारत में हूँ। DPDP Act का क्या?

पूरी तरह compliant। Fluera EU में hosted है और GDPR-native है, जो parallel में DPDP Act 2023 की आवश्यकताओं को cover करता है। आप अपने rights (access, correction, erasure, portability) **सेटिंग्स → गोपनीयता** के माध्यम से या [privacy@fluera.dev](mailto:privacy@fluera.dev) पर लिखकर exercise कर सकते हैं। 30 दिनों के अंदर response; आमतौर पर 48 घंटों में।

## मेरे iPad पर Pencil lag कर रही है। क्या गलत है?

पहले, verify करें कि Fluera updated है। फिर: **सेटिंग्स → कैनवास → Stroke latency** Apple Pencil devices के लिए *Predicted (recommended)* पढ़ना चाहिए। यदि *Standard* या *Low-power* कहता है, Predicted पर लौटें।

यदि Predicted चालू होने पर भी lag बनी रहती है, बंद करें और relaunch करें। यदि अभी भी रहती है, अपने iPad model के साथ हमें लिखें — iPad Air 3 पर एक regression है जिसे हम सक्रिय रूप से track कर रहे हैं।

## मैं bug कैसे report करूँ?

[support@fluera.dev](mailto:support@fluera.dev)। वर्णन करें कि आप क्या कर रहे थे, क्या expected था, क्या हुआ, और app version include करें (सेटिंग्स → About)। Screenshots मदद करते हैं।

Security vulnerabilities के लिए, [security@fluera.dev](mailto:security@fluera.dev) उपयोग करें और हमारी PGP key (हमारे GitHub profile पर) के साथ encrypt करें।

## मैं शिक्षाशास्त्र पर feedback कैसे दूँ?

हम हर email पढ़ते हैं। [hello@fluera.dev](mailto:hello@fluera.dev) सीधे founders तक जाता है। विशेष रूप से उपयोगी: आपके लिए जो *काम नहीं* किया, जो ऐसा घर्षण लगा जो वांछनीय नहीं था, और कुछ भी जिसने आपको आश्चर्यचकित किया।

## आगे

- [Performance tuning](/hi/docs/performance) — बड़े canvases से सबसे अधिक निकालना
- [संपूर्ण user documentation](/hi/docs)
