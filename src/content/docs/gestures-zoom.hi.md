---
lang: "hi"
title: "Gestures, zoom और navigation"
description: "कैनवास हर दिशा में अनंत है। यह कि बिना खोए इसमें कैसे चलें।"
section: canvas
sectionLabel: "कैनवास"
order: 2
updatedAt: 2026-04-20
---

अनंत कैनवास एक चीज़ को स्पष्ट रूप से सच बनाता है और दूसरी को इतनी स्पष्ट रूप से नहीं। स्पष्ट रूप से: आप कभी जगह से बाहर नहीं निकलते। इतना स्पष्ट नहीं: आप जगह में खो सकते हैं। यह page oriented बने रहने के बारे में है।

## एक और दो उँगली के gestures

| Gesture                         | क्या करता है                              |
|-------------------------------|------------------------------------------|
| एक उँगली — drag               | कैनवास का pan                            |
| दो उँगलियाँ — pinch           | Zoom in और out                            |
| दो उँगलियाँ — rotate          | कैनवास को rotate करें                    |
| दो उँगलियाँ — double tap      | Zoom और rotation को 100% पर reset करें  |
| तीन उँगलियाँ — ऊपर swipe      | Overview mode (continent view)           |
| तीन उँगलियाँ — tap            | अंतिम उपयोग किए गए tool का quick-select  |

Desktop पर, वही gestures trackpad के साथ काम करते हैं। Mouse उपयोगकर्ता: pan के लिए <kbd>Space</kbd>+drag, zoom के लिए <kbd>Ctrl</kbd>+scroll।

## पेन और उँगली अलग हैं

Default रूप से, पेन draws करता है और उँगली navigate करती है। आप यदि चाहें तो इसे **सेटिंग्स → कैनवास → Input mapping** में उल्टा कर सकते हैं, लेकिन हम default के साथ रहने की सिफारिश करते हैं — यह आपके हाथ को screen पर resting रखता है बिना खोए हुए निशानों की चिंता के।

## Overview mode

तीन उँगलियों से ऊपर swipe (या desktop पर <kbd>Cmd</kbd>+<kbd>0</kbd>) पूरे कैनवास को एक नज़र में दिखाने के लिए zoom out करता है। यह **continent view** है। यह वह view है जो memory palace को काम कराता है — यह आपको समय के साथ अवधारणा neighborhoods बनते देखने देता है।

Overview mode में किसी भी क्षेत्र पर tap करें ताकि उस स्थिति पर एक उचित स्तर पर zoom वापस आ जाए।

## Named sections और bookmarks

यदि आपका कैनवास बड़ा हो रहा है, named regions को mark करने के लिए **Section** का उपयोग करें। एक section केवल एक named rectangular area है — वहाँ jump करने के लिए canvas list में उसके label पर tap करें।

Bookmarks (<kbd>Cmd</kbd>+<kbd>B</kbd>) एक विशिष्ट zoom+position save करते हैं और आपको बाद में लौटने देते हैं।

## क्या न करें

- **लिखना शुरू करने से पहले arranging में दस मिनट खर्च न करें।** Spatial layout content से उभरता है, उल्टा नहीं।
- **पुराने clusters को "साफ" करने के लिए delete न करें।** वे समय के साथ आपकी सोच का record हैं। एक sparse neighborhood एक data है।
- **इतना पास zoom न करें कि spatial cue खो दें।** यदि आप केवल एक node देख सकते हैं, तो आप list app की तरह काम कर रहे हैं। कभी-कभी zoom out करें ताकि याद रहे कि आप कहाँ हैं।

## आगे

- [12-step cycle](/hi/science#learning-cycle) — navigation अंतरालित returns से कैसे संबंधित है
- [सेटिंग्स](/hi/docs/privacy-consent)
