import type { PricingData } from "../types";

// Listino del 22/10/2026 coi nomi della tavola «I piani di Fluera» (26/10):
// Fluera (gratis), Fluera Ovunque, Fluera Mentore, Fluera Ovunque + Mentore,
// tradotti in ogni lingua con le stesse parole dell’app (ARB del motore).
// `public_truth_gate.dart` lega prezzi e periodi a FlueraPricing per `id`, e
// i nomi a `abbonamenti_piano*` della stessa lingua.

const data: PricingData = {
  tiers: [
    {
      id: "free",
      name: "Fluera",
      price: "€0",
      period: "계속 무료",
      tagline:
        "캔버스 전체, 복습, 과목. 구독도 없고 기한도 없어요.",
      features: [
        "무한 캔버스와 손글씨",
        "복습, 코스, 모든 브러시, 내보내기, 타임 트래블",
        "첫 달에 써 보는 멘토",
        "모든 기기에서 같은 500MB (오디오 제외, 동기화가 시작되면)",
        "오프라인에서도 작동해요: 캔버스는 기기에 남아요",
      ],
      cta: { label: "무료로 시작하기", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Fluera 어디서나",
      price: "€29.99",
      period: "연간 · 연간만 가능 · 60 GB은 €44.99 / 년",
      tagline:
        "휴대폰, 태블릿, 컴퓨터에서 모두. 공간 걱정 없이. 앱 업데이트로 시작돼요.",
      features: [
        "무료 500MB 대신 20GB",
        "녹음한 강의를 소리까지 모든 기기에서",
        "캔버스를 공유하고 함께 쓰기",
        "그만둬도 6개월 동안 모두 내려받을 수 있어요. 잉크는 영원히 남아요.",
        "공부 기능은 더해지지 않아요. 모두 무료에 있어요",
      ],
      cta: { label: "어디서나 선택", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "Fluera 멘토",
      price: "€9.99",
      period: "월간 · €84.99 / 년 (€34.89 절약)",
      tagline:
        "내 노트를 읽은 튜터. 매달 이용량은 언제나 퍼센트로 보여요.",
      features: [
        "쓴 내용에 대해 질문해요",
        "구술 시험을 보고 부족한 점을 알려 줘요",
        "쓰는 개념마다 제목을 붙여요",
        "손으로 쓴 수식을 편집할 수 있는 수식으로 바꿔요",
        "채팅으로 노트에 질문할 수도 있어요",
        "매달 이용량, 언제나 퍼센트로 표시",
        "처음 14일은 무료",
      ],
      cta: { label: "멘토 써 보기", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Fluera 어디서나 + 멘토",
      price: "€99.99",
      period: "연간 · 따로 사는 것보다 €14.99 절약 · 60 GB이면 €119.99 / 년",
      tagline:
        "Fluera의 모든 것을, 모든 기기에서, 튜터와 함께. 추천 요금제.",
      features: [
        "어디서나 전부: 20GB와 소리가 있는 강의",
        "멘토 전부: 질문, 시험, 제목, 수식",
        "매달 이용량, 언제나 퍼센트로 표시",
        "연간만 가능",
      ],
      cta: { label: "어디서나 + 멘토 선택", href: "/beta" },
      highlighted: true,
      badge: "추천",
    },
  ],
  faq: [
    {
      q: "멘토가 얼마나 남았는지 어떻게 보나요?",
      a: "앱에서 언제나 볼 수 있어요. 카운터가 이번 달 멘토 이용량이 얼마나 남았는지 퍼센트로, 언제 다시 채워지는지(매달 1일), 지금 속도로 언제까지 쓸 수 있는지 알려 줘요. 숨은 한도도, 머릿속으로 바꿔 계산할 크레딧도 없어요. 보이는 게 전부예요.",
    },
    {
      q: "이번 달 멘토를 다 쓰면요?",
      a: "복습, 코스, 노트는 멘토 없이도 언제나 쓸 수 있어요. 멘토는 매달 1일에 돌아와요. 그 전에 필요하면 앱에서 시험 예비분을 켜거나 조금 더할 수 있어요.",
    },
    {
      q: "한 번 사면 모든 기기에서 쓸 수 있나요?",
      a: "네. 휴대폰이나 태블릿의 Fluera 앱에서 App Store 또는 Google Play를 통해 구독하고, 스토어 계정에 저장된 결제 수단으로 결제해요. 이후 같은 계정으로 로그인한 모든 기기에서 요금제를 쓸 수 있어요. 컴퓨터도 포함이에요.",
    },
    {
      q: "어디서나는 벌써 기기 간에 작동하나요?",
      a: "아직이에요. 휴대폰, 태블릿, 컴퓨터 간 동기화는 만드는 중이고 앱 업데이트로 시작돼요. 그때까지 캔버스는 기기에 남고, 오프라인에서도 작동해요.",
    },
    {
      q: "무료 체험이 있나요?",
      a: "네. 14일 무료, 멘토에만 해당돼요. 체험이 끝나기 전에 스토어에서 언제든 해지할 수 있어요. 무료 Fluera는 만료되지 않고 결제를 요구하지 않아요.",
    },
    {
      q: "해지하면 캔버스는 어떻게 되나요?",
      a: "기기에 그대로 남아요. 캔버스, 복습, 코스, 브러시, 내보내기는 계속 무료로 쓸 수 있어요. 어디서나를 쓰고 있었다면 6개월 동안 모두 내려받을 수 있고, 잉크는 영원히 남아요. 직접 지우지 않는 한 아무것도 삭제되지 않아요.",
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
