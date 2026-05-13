---
lang: "hi"
title: "गोपनीयता और AI consent"
description: "Fluera कौन सा डेटा एकत्र करता है, आप क्या consent दे रहे हैं, और सब कुछ कैसे बंद करें।"
section: settings
sectionLabel: "सेटिंग्स"
order: 1
updatedAt: 2026-04-20
---

Fluera एक local-first उपकरण है। Default रूप से, आपके डिवाइस से कुछ नहीं निकलता जब तक आप किसी ऐसे feature को स्पष्ट रूप से सक्रिय न करें जिसे इसकी ज़रूरत हो।

## Consent की चार categories

**सेटिंग्स → गोपनीयता** खोलें। आप चार toggles देखेंगे, सभी default से बंद:

- **Product analytics.** Anonymous session डेटा — feature invocation counts, session duration, AI call durations। कभी content नहीं। SHA-256 hashed user ID, 180-दिन retention।
- **AI features.** Socratic, Ghost Map, LaTeX OCR और Fog of War का उपयोग करने के लिए आवश्यक। कैनवास से चयनित text हमारे server-side proxy के माध्यम से Google Gemini को भेजा जाता है। कभी पूरा notebook नहीं।
- **Cloud sync.** Devices के बीच canvas sync करने के लिए आवश्यक। सभी notebooks upload से पहले आपके डिवाइस पर encrypted होते हैं। Cloud ciphertext store करता है।
- **Crash reporting.** App crash होने पर stack traces और device metadata। कोई user content नहीं। Sentry द्वारा `sendDefaultPii: false` के साथ processed।

हर toggle स्वतंत्र है। आप Analytics के बिना Cloud Sync सक्रिय कर सकते हैं। Crash Reporting के बिना AI उपयोग कर सकते हैं। Permissions जानबूझकर granular हैं।

## जो कभी एकत्र नहीं होता

- आपके canvas का content (SQLCipher, AES-256 के साथ at-rest encrypted)
- वे प्रश्न जो AI पूछती है, या आपके उत्तर
- वह audio जो आप Time Travel के साथ रिकॉर्ड करते हैं (locally stored; opt-in sync upload से पहले encrypt करता है)
- स्पष्ट consent के बिना किसी भी प्रकार की personally identifiable जानकारी

## कैसे verify करें

App को airplane mode में चलाएँ। Cloud sync और AI को छोड़कर सब कुछ करें। अपने firewall या network monitor को observe करें। चारों consent toggles बंद होने पर Fluera ज़ीरो network requests करता है। यह verifiable है, डिज़ाइन से।

## Consent वापस लेना

चारों toggles हमेशा **सेटिंग्स → गोपनीयता** में accessible हैं। एक toggle को बंद करने का तत्काल प्रभाव होता है। संबंधित backend डेटा 30 दिनों के अंदर deletion के लिए scheduled होता है।

Account-level deletion (पूर्ण right to be forgotten) के लिए, अपने account address से [privacy@fluera.dev](mailto:privacy@fluera.dev) पर लिखें।

## Education accounts

यदि आपकी संस्था आपके Fluera account को administer करती है, उपरोक्त behaviors अभी भी *आपके* डेटा पर लागू होते हैं। Admin compliance audits के लिए aggregated usage statistics देख सकता है (audit trail के माध्यम से) लेकिन आपके notebooks का content नहीं पढ़ सकता। Encryption आपके डिवाइस पर लागू होता है; key आपके keychain में रहती है, किसी admin system में नहीं।

## आगे

- [Cloud sync setup](/hi/docs/cloud-sync)
- [Security architecture](/hi/security/architecture) — पूरा model
