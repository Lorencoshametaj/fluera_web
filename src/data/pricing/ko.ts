import type { PricingData } from "../types";

// Listino del 22/10/2026 (Free, Cloud, IA, Cloud + IA). Allineato a it.ts.
// Gli importi di `price` e `period` li controlla
// fluera_engine/tool/public_truth_gate.dart contro FlueraPricing, per `id`.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Free",
      price: "€0",
      period: "계속 무료",
      tagline:
        "캔버스 전체, 복습, 과목. 구독도 없고 기한도 없어요.",
      features: [
        "무한 캔버스와 손글씨",
        "복습, 과목, 모든 브러시, 내보내기, 타임 트래블",
        "가입 후 첫 달에 AI 맛보기",
        "모든 기기에서 쓰는 500MB 클라우드 (오디오 제외, Cloud가 시작되면)",
        "오프라인에서도 작동해요: 캔버스는 기기에 남아요",
      ],
      cta: { label: "무료로 시작하기", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19.99",
      period: "연간 · 연간만 가능 · Cloud 60은 €44.99 / 년",
      tagline:
        "캔버스와 녹음한 강의를 위한 공간. 앱 업데이트로 시작돼요.",
      features: [
        "휴대폰, 태블릿, 컴퓨터에서 쓰는 20GB",
        "녹음한 강의를 어디서나 들을 수 있어요",
        "휴대폰을 바꿔도 캔버스는 안전해요",
        "Cloud 60: 강의를 많이 녹음하는 사람을 위한 60GB",
      ],
      cta: { label: "Cloud 선택", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9.99",
      period: "월간 · €84.99 / 년 (€34.89 절약)",
      tagline: "당신이 쓴 내용을 읽는 AI, 남은 양은 언제나 보여요.",
      features: [
        "AI가 노트를 읽고 개념마다 이름을 붙여요",
        "튜터, 시험, 채팅, 수식, 받아쓰기",
        "이번 달 남은 AI를 퍼센트로 언제든 볼 수 있어요",
        "바쁜 달을 위한 시험 예비분",
        "14일 무료 체험",
      ],
      cta: { label: "AI 체험하기", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99.99",
      period: "연간 · 따로 사는 것보다 €4.99 절약 · Cloud 60이면 €119.99 / 년",
      tagline: "Cloud와 AI 전부를 하나의 구독으로.",
      features: [
        "Cloud와 AI 전부",
        "20GB, 또는 Cloud 60 + AI로 60GB",
        "이번 달 남은 AI를 퍼센트로 언제든 볼 수 있어요",
        "연간만 가능",
      ],
      cta: { label: "Cloud + AI 선택", href: "/beta" },
      highlighted: true,
      badge: "추천",
    },
  ],
  faq: [
    {
      q: "남은 AI는 어떻게 확인하나요?",
      a: "앱에서 언제나요. 이번 달 AI가 몇 퍼센트 남았는지, 언제 다시 채워지는지(매달 1일), 지금 속도로 언제까지 충분한지를 표시가 알려 줘요. 숨겨진 한도도, 머릿속으로 환산할 크레딧도 없어요. 보이는 만큼이 가진 만큼이에요.",
    },
    {
      q: "이번 달 AI를 다 쓰면요?",
      a: "복습, 과목, 노트는 AI 없이도 언제나 작동해요. AI는 매달 1일에 돌아와요. 그 전에 필요하면 앱에서 시험 예비분을 켜거나 조금 더할 수 있어요.",
    },
    {
      q: "한 번 사면 모든 기기에서 쓸 수 있나요?",
      a: "네. 휴대폰이나 태블릿의 Fluera 앱에서 App Store 또는 Google Play를 통해 구독하고, 스토어 계정에 저장된 결제 수단으로 결제해요. 이후 같은 계정으로 로그인한 모든 기기에서 요금제를 쓸 수 있어요. 컴퓨터도 포함이에요.",
    },
    {
      q: "Cloud는 이미 기기 간에 작동하나요?",
      a: "아직 아니에요. 휴대폰, 태블릿, 컴퓨터 사이의 Cloud는 만드는 중이고 앱 업데이트로 시작돼요. 그때까지 캔버스는 기기에 남고, 오프라인에서도 작동해요.",
    },
    {
      q: "무료 체험이 있나요?",
      a: "네. AI만 14일 무료예요. 체험이 끝나기 전에 스토어에서 언제든 해지할 수 있어요. Free는 기한이 없고 결제도 필요 없어요.",
    },
    {
      q: "해지하면 캔버스는 어떻게 되나요?",
      a: "기기에 그대로 남고 당신의 것이에요. 캔버스, 복습, 과목, 브러시, 내보내기는 Free로 계속 작동해요. 요금제 기능은 다시 켤 때까지 멈춰요. 당신이 직접 하지 않으면 아무것도 지워지지 않아요.",
    },
    {
      q: "환불 정책은?",
      a: "환불 및 철회 조건은 스토어와 구매 경로에 따라 다릅니다. 적용되는 정책은 확정 전에 표시되며, 도움이 필요하면 가입한 주소에서 support@fluera.dev로 문의해 주세요.",
    },
    {
      q: "Team 또는 Education 플랜은?",
      a: "2단계에서 출시 예정 (공유 워크스페이스, 관리자 대시보드, SSO). 관심 있으시면 support@fluera.dev로 메일 — 첫 design partner와 함께 로드맵을 만들고 있습니다.",
    },
  ],
};

export default data;
