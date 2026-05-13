---
lang: "hi"
title: "Cloud sync"
description: "Devices के बीच canvas को कैसे sync करें, क्या encrypted है और passphrase खो जाने पर कैसे recover करें।"
section: settings
sectionLabel: "सेटिंग्स"
order: 2
updatedAt: 2026-04-20
---

Cloud sync per-notebook opt-in है। आप एक कैनवास को sync कर सकते हैं जबकि दूसरे को सख्ती से local रख सकते हैं। आपके कहे बिना कुछ नहीं हटता।

## पहले डिवाइस पर sync सक्रिय करना

1. **सेटिंग्स → गोपनीयता** खोलें और **Cloud sync** सक्रिय करें।
2. अपना **sync passphrase** बनाएँ या enter करें। यह आपके account password से *अलग* है। Passphrase encryption key derive करने के लिए उपयोग होता है — और यह केवल आपके डिवाइस पर रहता है, हमारे servers पर कभी नहीं।
3. चुनें कि कौन से notebooks sync करने हैं। एक notebook पर right-click करें (या press और hold करें) → **Sync सक्रिय करें**।

हर synced notebook पर एक छोटा cloud icon दिखाई देता है। एक लाल variant error indicate करता है; ग्रे pause।

## दूसरा डिवाइस जोड़ना

1. दूसरे डिवाइस पर Fluera install करें।
2. उसी account के साथ sign in करें।
3. जब prompt हो *वही* sync passphrase enter करें। Passphrase recoverable नहीं है — यदि आपके पास नहीं है, तो encrypted डेटा नए डिवाइस पर readable नहीं है।
4. Cloud sync शुरू होता है। मध्यम आकार के notebook के लिए पहले पूर्ण sync में कुछ मिनट लगने की उम्मीद करें।

## क्या encrypted है और कैसे

- हर notebook स्थानीय रूप से per-notebook key के साथ encrypted है।
- ये keys PBKDF2-SHA256, 256,000 iterations के माध्यम से आपके sync passphrase से derive की गई root key के साथ encrypted हैं।
- केवल encrypted bytes server तक पहुँचते हैं। हम आपके notebooks पढ़ नहीं सकते।

Metadata (notebook titles, timestamps, size) भी encrypted है — server opaque blobs और sync timestamps देखता है।

## यदि आप passphrase खो देते हैं

यदि आप passphrase भूल जाते हैं और आपके पास कोई डिवाइस नहीं है जिसमें अभी भी key cached हो, तो आपका encrypted डेटा **अप्राप्य** हो जाता है। यह डिज़ाइन से है। विकल्प — server-side recovery mechanism — end-to-end model को तोड़ देगा और एक trade-off है जिसे हम consumer accounts के लिए करने को तैयार नहीं हैं।

**Education accounts** के लिए, deployment के समय एक admin द्वारा रखी गई optional recovery key configure की जा सकती है। यह स्पष्ट opt-in है, संस्थागत DPA में documented और audited।

## Conflict resolution

यदि आप दो devices पर एक साथ एक ही canvas edit करते हैं जब एक offline है, Fluera merge को बिना conflicts के करने के लिए vector clocks के साथ CRDT उपयोग करता है। आप काम नहीं खोएँगे। दुर्लभ मामलों में जहाँ automatic merge अस्पष्ट है, आप affected node पर "merge needed" marker और पुष्टि के लिए side-by-side view देखेंगे।

## किसी विशिष्ट notebook के लिए sync को disable करना

एक notebook पर right-click करें (या press और hold करें) → **Sync disable करें**। Cloud copy तुरंत revoke हो जाती है। Local copy intact रहती है।

## आगे

- [FAQ और troubleshooting](/hi/docs/faq)
- [Security architecture](/hi/security/architecture)
