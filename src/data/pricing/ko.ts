// 🇰🇷 V1.5 — Native pass complete (2026-05-15).
// CTA labels + badge preserved from the previous locale file.
// Coordinated with it.ts canonical.

import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "영구 무료",
      tagline:
        "방법을 시험해 볼 수 있는 완전한 캔버스. 월 100 AI 크레딧, 항상 표시.",
      features: [
        "무한 캔버스, 손글씨 입력, 완전한 렌더링 엔진",
        "기본 브러시 3종 (연필, 만년필, 마커 — Plus에서 더 많이)",
        "PNG 내보내기",
        "월 100 AI 크레딧 — Atlas와 Chat Fluera AI는 항상 무료",
        "Socratic 주 3회, Ghost Map 주 3회, Exam 주 1회",
        "Fog of War, FSRS (간격 반복)",
        "Cross-Zone Bridges — 시스템이 발견하는 개념 간 연결을 확인",
        "📍 캔버스당 Checkpoint 3개 — 학습 순간을 저장하고 언제든 되돌아가기",
        "데모 캔버스에서 Time Travel + 오디오↔획 동기화 미리보기 (읽기 전용)",
        "Local-first, 완전 오프라인 (1대 기기)",
      ],
      cta: { label: "무료로 시작하기", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5.99",
      period: "월 · €49 / 년 (€22 절약 — 2개월 무료)",
      tagline:
        "완전한 개인 학습: 클라우드 동기화, 주간 제한 없는 AI, 무제한 음성 녹음.",
      features: [
        "클라우드 동기화 5 GB, 2대 기기 — iPad와 데스크톱에서도 캔버스 사용",
        "Socratic, Ghost Map, Exam 빈도 제한 없음 (주 3회 제한 폐지)",
        "Free의 5배 AI 크레딧 (월 500 — Ghost Map 약 60회 또는 Socratic 풀 세션 18회)",
        "무제한 음성 녹음",
        "모든 V1 브러시 (총 6종, 추가 예정)",
        "모든 형식으로 내보내기 (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "Cross-Zone Bridges — 자신의 개념 연결을 만들고 편집",
        "📍 캔버스당 무제한 Checkpoint",
        "7일 무료 체험, 언제든 취소 가능",
      ],
      cta: { label: "Plus 체험하기", href: "/beta" },
      highlighted: true,
      badge: "추천",
    },
    {
      name: "Pro",
      price: "€11.99",
      period: "월 · €99 / 년 (€44 절약 — 3.5개월 무료)",
      tagline:
        "강화된 학습: Time Travel, 오디오↔획 동기화, 실시간 협업, 모든 캔버스 검색.",
      features: [
        "⏱️ Time Travel 스크러버 — 학습을 재생으로 다시 보기",
        "🎤 오디오 ↔ 획 동기화 — 획을 탭하면 그 순간 말했던 오디오 재생",
        "🤝 실시간 캔버스 협업 (CRDT) — 링크로 동료 초대",
        "🔍 프로액티브 Background OCR — 몇 달 전에 쓴 공식을 모든 캔버스에서 검색",
        "클라우드 동기화 50 GB, 무제한 기기",
        "이메일 우선 지원",
        "월 2000 AI 크레딧",
      ],
      cta: { label: "Pro 되기", href: "/beta" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "AI 크레딧은 어떻게 작동하나요?",
      a: "각 AI 작업에는 고정된 크레딧 비용이 있습니다: Ghost Map 8, Socratic 단계당 4, Exam 문제당 12, Chat 메시지당 1. Atlas (캔버스 액션)과 기본 Background OCR은 무료. 남은 크레딧은 캔버스 헤더에 항상 표시됩니다 — 숨겨진 속도 제한이나 예상치 못한 차단은 없습니다. 사용하지 않은 크레딧은 이월되지 않습니다: 플랜은 가입일로부터 30일마다 갱신됩니다 (매월 1일이 아닌 — 30일 결제, 30일 수령).",
    },
    {
      q: "리셋 전에 크레딧이 다 떨어지면?",
      a: "사전에 알려드립니다 — 사이클의 80%를 사용한 시점에 부드러운 경고. 0에 도달하면 AI 기능은 명확한 메시지와 함께 정지됩니다 (조용한 차단은 절대 없음). 다음 30일 사이클을 기다리거나 상위 플랜으로 전환하세요.",
    },
    {
      q: "Pro가 두 배 가격인데 왜 필러가 3개뿐인가요?",
      a: "Pro는 '크레딧이 더 많은 Plus'가 아니라 — 강화된 학습입니다. Time Travel은 획별로 동기화된 오디오와 함께 학습 세션을 재생: 공식을 탭하면 자신이 스스로에게 했던 설명을 다시 들을 수 있습니다. 실시간 CRDT 협업으로 같은 캔버스에서 동급생이나 동료와 동시에 작업 가능. Notability, GoodNotes, Notion AI는 — 이런 통합 수준에서 — 이 스택을 제공하지 않습니다.",
    },
    {
      q: "Plus나 Pro를 취소하면 내 캔버스는 어떻게 되나요?",
      a: "모두 기기에 그대로 남고 (local-first) 기본 브러시 3종과 PNG 내보내기는 Free tier에서 계속 작동합니다. 추가 캔버스는 재활성화하거나 내보낼 때까지 읽기 전용. 명시적 액션 없이 삭제되는 것은 없습니다.",
    },
    {
      q: "Pro 무료 체험은 왜 없나요?",
      a: "Plus는 7일 무료 체험. Pro는 없음: 실시간 협업과 Time Travel 스크러버는 클라우드 비용이 발생하는 지속적 기능이라 무료 제공이 어렵습니다. 방법을 평가하려면 Free가 완전한 캔버스 — 필요한 만큼 사용하세요.",
    },
    {
      q: "Checkpoint가 뭔가요?",
      a: "Checkpoint는 특정 순간의 캔버스에 다는 책갈피입니다 — \"다른 이름으로 저장\" 같은 거죠. 원하는 때 만들어두고(예: \"쪽지시험 전에\", \"3장 끝낸 후에\") 언제든 돌아갈 수 있습니다: 그 시점의 캔버스 상태를 복원합니다. Time Travel과는 달라요: Checkpoint는 사용자가 고른 고정된 지점이고, Time Travel은 전체 기록을 연속적으로 훑는 스크러버입니다. Free는 캔버스당 3개의 Checkpoint, Plus는 무제한입니다.",
    },
    {
      q: "Pro로 업그레이드하기 전에 Time Travel + 오디오↔획 동기화를 시험해볼 수 있나요?",
      a: "네. 모든 Free 사용자는 사전 로드된 데모 캔버스를 받습니다. Time Travel 스크러버를 열고 획을 탭해 동기화된 오디오를 들을 수 있습니다 — 데모에서 읽기 전용. 자신의 학습을 녹음하려면 Pro가 필요합니다.",
    },
    {
      q: "환불 정책은?",
      a: "30일, 무조건, 월간 및 연간 플랜 모두. 가입한 주소에서 support@fluera.dev로 메일.",
    },
    {
      q: "학생 인증은 어떻게 작동하나요?",
      a: "검증된 .edu 또는 학술 이메일. .edu가 없는 유럽 대학의 경우 스캔한 학생증, ISIC, 또는 학과 사무실에서 보낸 일회용 이메일을 받습니다. 한국 대학(.ac.kr) 지원.",
    },
    {
      q: "연구자나 비영리 단체 할인이 있나요?",
      a: "네. 연구실, 박사 과정 프로그램, 등록된 비영리 단체는 /contact에서 신청 가능 — 일반적으로 구조화된 피드백을 받는 대가로 Pro를 Plus 가격이나 무료로 제공합니다.",
    },
    {
      q: "결제 방법은?",
      a: "KakaoPay, Naver Pay, KCP 로컬 카드, Stripe 경유 신용/체크카드, Apple Pay, Google Pay. Education 고객은 은행 이체나 구매 주문서로 결제 가능.",
    },
    {
      q: "Team 또는 Education 플랜은?",
      a: "2단계에서 출시 예정 (공유 워크스페이스, 관리자 대시보드, SSO). 관심 있으시면 sales@fluera.dev로 메일 — 첫 design partner와 함께 로드맵을 만들고 있습니다.",
    },
  ],
};

export default data;
