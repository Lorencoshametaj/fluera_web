---
lang: "hi"
title: "Cloud sync"
description: "Devices के बीच canvas को कैसे sync करें, sync किया गया डेटा कैसे protect होता है और कहाँ store होता है।"
section: settings
sectionLabel: "सेटिंग्स"
order: 2
updatedAt: 2026-04-20
---

Cloud sync per-notebook opt-in है। आप एक कैनवास को sync कर सकते हैं जबकि दूसरे को सख्ती से local रख सकते हैं। आपके कहे बिना कुछ नहीं हटता।

## पहले डिवाइस पर sync सक्रिय करना

1. **सेटिंग्स → गोपनीयता** खोलें और **Cloud sync** सक्रिय करें।
2. उसी account के साथ sign in रहें जिसका उपयोग आप अपने अन्य डिवाइसों पर करते हैं।
3. चुनें कि कौन से notebooks sync करने हैं। एक notebook पर right-click करें (या press और hold करें) → **Sync सक्रिय करें**।

हर synced notebook पर एक छोटा cloud icon दिखाई देता है। एक लाल variant error indicate करता है; ग्रे pause।

## दूसरा डिवाइस जोड़ना

1. दूसरे डिवाइस पर Fluera install करें।
2. उसी account के साथ sign in करें।
3. Cloud sync शुरू होता है। मध्यम आकार के notebook के लिए पहले पूर्ण sync में कुछ मिनट लगने की उम्मीद करें।

## आपका synced डेटा कैसे protect होता है और कहाँ store होता है

- आपके डिवाइस पर local database SQLCipher के साथ at-rest encrypted है।
- Sync के दौरान डेटा हमेशा transit में encrypted होता है (TLS), और हमारे EU infrastructure (Supabase, eu-north-1) पर at-rest encrypted store होता है।
- Sync किया गया डेटा **end-to-end encrypted नहीं** है। data controller के रूप में Fluera तकनीकी रूप से synced content तक पहुँच सकता है। हम इसे कभी बेचते नहीं और न ही advertising के लिए उपयोग करते हैं।
- आपका डेटा EU में store और process होता है।

जब आप एक notebook को `.fluera` file के रूप में export करते हैं, तो वह file AES-256-GCM के साथ encrypted होती है।

## अपने account तक access खोना

आपका synced डेटा आपके account से जुड़ा होता है। यदि आप अपने account credentials खो देते हैं, तो उन्हें सामान्य account recovery flow के माध्यम से reset करें — आपका synced डेटा हमारे EU infrastructure पर सुरक्षित रहता है और दोबारा sign in करने पर उपलब्ध रहता है।

**Education accounts** के लिए, deployment के समय एक admin द्वारा access और recovery policies configure की जा सकती हैं। यह स्पष्ट opt-in है, संस्थागत DPA में documented और audited।

## Conflict resolution

यदि आप दो devices पर एक साथ एक ही canvas edit करते हैं जब एक offline है, Fluera merge को बिना conflicts के करने के लिए vector clocks के साथ CRDT उपयोग करता है। आप काम नहीं खोएँगे। दुर्लभ मामलों में जहाँ automatic merge अस्पष्ट है, आप affected node पर "merge needed" marker और पुष्टि के लिए side-by-side view देखेंगे।

## किसी विशिष्ट notebook के लिए sync को disable करना

एक notebook पर right-click करें (या press और hold करें) → **Sync disable करें**। Cloud copy तुरंत revoke हो जाती है। Local copy intact रहती है।

## आगे

- [FAQ और troubleshooting](/hi/docs/faq)
- [Security architecture](/hi/security/architecture)
