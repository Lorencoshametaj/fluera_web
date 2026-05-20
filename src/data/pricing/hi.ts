// 🇮🇳 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.
//
// Note: Hindi (Devanagari) — brand terms in English/Latin per usual web
// convention (memory `project_i18n_target_languages`: brand terms always EN).

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "हमेशा के लिए",
      tagline:
        "मेथड आज़माने के लिए पूरा canvas। हर महीने 100 AI क्रेडिट, हमेशा दिखाई देते हैं।",
      features: [
        "अनंत canvas, हस्तलिखित इनपुट, पूर्ण रेंडरिंग इंजन",
        "3 बेस ब्रश (पेंसिल, फाउंटेन पेन, मार्कर — Plus में और भी)",
        "PNG एक्सपोर्ट",
        "हर महीने 100 AI क्रेडिट — Atlas और Chat Fluera AI हमेशा मुफ़्त",
        "Socratic 3 सेशन/सप्ताह, Ghost Map 3 तुलना/सप्ताह, 1 Exam/सप्ताह",
        "Fog of War, FSRS (अंतराल पुनरावृत्ति)",
        "Cross-Zone Bridges — सिस्टम द्वारा खोजे गए कॉन्सेप्ट्स के बीच के कनेक्शन देखें",
        "📍 प्रति canvas 3 Checkpoints — एक अध्ययन क्षण सहेजें और जब चाहें वापस जाएँ",
        "Demo canvas पर Time Travel + audio↔stroke sync का पूर्वावलोकन (केवल पढ़ने के लिए)",
        "Local-first, पूरी तरह से ऑफ़लाइन (1 डिवाइस)",
      ],
      cta: { label: "मुफ़्त शुरू करें", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5.99",
      period: "प्रति माह · €49 / वर्ष (€22 बचाएँ — 2 महीने मुफ़्त)",
      tagline:
        "पूर्ण व्यक्तिगत अध्ययन: cloud sync, साप्ताहिक सीमा के बिना AI, असीमित voice recording।",
      features: [
        "Cloud sync 5 GB, 2 डिवाइस पर — iPad और desktop पर भी आपके canvases",
        "Socratic, Ghost Map, Exam बिना फ़्रीक्वेंसी सीमा (अब 3/सप्ताह नहीं)",
        "Free से 5× ज़्यादा AI क्रेडिट (प्रति माह 500 — लगभग 60 Ghost Maps या 18 पूर्ण Socratic सेशन)",
        "असीमित voice recording",
        "सभी V1 ब्रश (कुल 6, और भी आने वाले)",
        "पूर्ण एक्सपोर्ट (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — अपने स्वयं के कॉन्सेप्ट कनेक्शन बनाएँ और संपादित करें",
        "📍 प्रति canvas असीमित Checkpoints",
        "7 दिन का मुफ़्त ट्रायल, कभी भी रद्द करें",
      ],
      cta: { label: "Plus आज़माएँ", href: "/beta" },
      highlighted: true,
      badge: "अनुशंसित",
    },
    {
      name: "Pro",
      price: "€11.99",
      period: "प्रति माह · €99 / वर्ष (€44 बचाएँ — 3.5 महीने मुफ़्त)",
      tagline:
        "एम्प्लीफाइड अध्ययन: Time Travel, audio↔stroke sync, real-time collab, सभी canvases में खोज।",
      features: [
        "⏱️ Time Travel scrubber — अपने अध्ययन को playback में देखें",
        "🎤 Audio ↔ stroke sync — एक stroke पर tap करें और सुनें कि उस पल आप क्या कह रहे थे",
        "🤝 Real-time canvas collaboration (CRDT) — एक link से साथियों को आमंत्रित करें",
        "🔍 प्रोएक्टिव Background OCR — महीनों पहले लिखा फ़ॉर्मूला सभी canvases में खोजें",
        "Cloud sync 50 GB, असीमित डिवाइस",
        "प्राथमिक email सहायता",
        "प्रति माह 2000 AI क्रेडिट",
      ],
      cta: { label: "Pro बनें", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "AI क्रेडिट कैसे काम करते हैं?",
      a: "हर AI ऑपरेशन की एक तय क्रेडिट लागत है: Ghost Map 8, Socratic प्रति stage 4, Exam प्रति प्रश्न 12, Chat प्रति संदेश 1। Atlas (canvas actions) और बेसिक Background OCR मुफ़्त हैं। आप हमेशा canvas हेडर में बचे क्रेडिट देखते हैं — कोई छिपी हुई rate limits नहीं, कोई आश्चर्य नहीं। अप्रयुक्त क्रेडिट आगे नहीं बढ़ते: प्लान आपकी सब्सक्रिप्शन तारीख से हर 30 दिन में रीफिल होता है (महीने की 1 तारीख को नहीं — आप 30 दिन के लिए भुगतान करते हैं और 30 दिन पाते हैं)।",
    },
    {
      q: "अगर रीसेट से पहले मेरे क्रेडिट खत्म हो जाएँ तो?",
      a: "हम पहले से बताते हैं — जब आप 80% साइकल इस्तेमाल कर लें तो soft warning। शून्य पर AI फ़ंक्शन एक स्पष्ट संदेश के साथ रुक जाते हैं (कभी silent blocks नहीं)। अगले 30-दिन साइकल का इंतज़ार करें या upgrade करें।",
    },
    {
      q: "केवल तीन pillars के लिए Pro की कीमत दोगुनी क्यों है?",
      a: "Pro 'Plus + ज़्यादा क्रेडिट' नहीं है — यह एम्प्लीफाइड अध्ययन है। Time Travel आपके अध्ययन सेशन को stroke-synchronised audio के साथ replay करता है: एक फ़ॉर्मूला tap करें और वह व्याख्या सुनें जो आपने ख़ुद को दी थी। Real-time CRDT collaboration आपको classmates या colleagues के साथ एक ही canvas पर एक साथ काम करने देता है। Notability, GoodNotes और Notion AI यह stack — इस integration level पर — नहीं देते।",
    },
    {
      q: "अगर मैं Plus या Pro रद्द कर दूँ तो मेरे canvases का क्या होगा?",
      a: "सब आपके device पर रहता है (local-first), और 3 बेस ब्रश + PNG export Free tier में काम करते रहते हैं। अतिरिक्त canvases reactivate या export करने तक read-only हो जाते हैं। आपकी explicit action के बिना कुछ भी delete नहीं होता।",
    },
    {
      q: "Pro का मुफ़्त trial क्यों नहीं है?",
      a: "Plus में 7-दिन का मुफ़्त trial है। Pro में नहीं: real-time collab + Time Travel scrubber recurring features हैं जिनकी cloud costs हम मुफ़्त नहीं दे सकते। अगर आप method आज़माना चाहते हैं, Free पूरा canvas है — जितना चाहें इस्तेमाल करें।",
    },
    {
      q: "Checkpoint क्या है?",
      a: "Checkpoint आपके canvas का एक ख़ास पल पर bookmark है — जैसे \"save as\"। आप जब चाहें बनाएँ (जैसे \"quiz से पहले\", \"chapter 3 ख़त्म करने के बाद\") और कभी भी वापस आ जाएँ: उस point पर canvas का state restore हो जाता है। यह Time Travel से अलग है: Checkpoint आपका चुना हुआ fixed point है, Time Travel पूरी history का continuous scrubber है। Free में हर canvas पर 3 Checkpoint, Plus में unlimited।",
    },
    {
      q: "क्या मैं Pro upgrade करने से पहले Time Travel + audio↔stroke sync आज़मा सकता हूँ?",
      a: "हाँ। हर Free user को एक pre-loaded demo canvas मिलता है जहाँ आप Time Travel scrubber खोल सकते हैं और strokes पर tap करके synchronised audio चला सकते हैं — demo पर read-only। अपने अध्ययन record करने के लिए Pro चाहिए।",
    },
    {
      q: "रिफ़ंड पॉलिसी?",
      a: "30 दिन, बिना सवाल, monthly और annual दोनों plans पर। जिस address से रजिस्टर किया उससे support@fluera.dev पर email करें।",
    },
    {
      q: "Student verification कैसे काम करता है?",
      a: "Verified .edu या academic email। .edu के बिना भारतीय या यूरोपीय विश्वविद्यालयों के लिए हम scanned student card, ISIC, या faculty office से एक बार का email स्वीकार करते हैं।",
    },
    {
      q: "Researchers या non-profits के लिए डिस्काउंट?",
      a: "हाँ। Research labs, PhD programs और registered non-profits /contact पर apply कर सकते हैं — हम आम तौर पर structured feedback के बदले Pro को Plus rate पर या मुफ़्त देते हैं।",
    },
    {
      q: "आप कौन सी payment methods स्वीकार करते हैं?",
      a: "UPI (Razorpay/Stripe), RuPay cards, Paytm, Stripe के माध्यम से credit/debit cards, Apple Pay और Google Pay। Education customers bank transfer या purchase order से भुगतान कर सकते हैं।",
    },
    {
      q: "Team या Education plans?",
      a: "Phase 2 में आ रहे हैं (shared workspaces, admin dashboard, SSO)। रुचि है? sales@fluera.dev पर email करें — हम अपने पहले design partners के साथ roadmap बना रहे हैं।",
    },
  ],
};

export default data;
