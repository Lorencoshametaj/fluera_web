import type { PricingData } from "../types";

const data: PricingData = {
  tiers: [
    {
      name: "Free",
      price: "€0",
      period: "영구",
      tagline: "완전한 캔버스. 노트북 3개. 영원히 무료.",
      features: [
        "무한 캔버스, 13개 브러시, 완전한 손글씨 엔진",
        "노트북 3개, 무제한 페이지",
        "로컬 우선 — 완전 오프라인",
        "PNG 및 PDF 내보내기",
        "기본 Socratic mode",
      ],
      cta: { label: "무료로 시작", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Plus",
      price: "€5.99",
      period: "월 · 연 €49",
      tagline: "완전한 캔버스, 2기기 동기화, 기본 AI.",
      features: [
        "13개 브러시 모두 + 무제한 레이어",
        "2기기 간 종단 간 암호화 동기화",
        "PDF 및 모든 기본 형식 내보내기",
        "기본 AI 할당량 (Atlas, Ghost Map 기본)",
        "연 €49 (~월 €4.08)",
      ],
      cta: { label: "Plus로 시작", href: "/beta" },
      highlighted: true,
      badge: "추천",
    },
    {
      name: "Pro",
      price: "€11.99",
      period: "월 · 연 €99",
      tagline: "Exam Session, Atlas, 전체 AI 스위트, 무제한 Time Travel 및 동기화.",
      features: [
        "Exam Session — 캔버스에서 생성된 모의 시험과 하이퍼코렉션 피드백",
        "Atlas 대륙 보기 + 모든 노트북에 걸친 Cross-Zone Bridges",
        "전체 AI 스위트 (Ghost Map, Socratic, Fog of War, FSRS 스케줄러)",
        "무제한 노트북",
        "다중 기기 종단 간 암호화 동기화",
        "Time Travel 오디오 동기화 재생",
        "모든 내보내기 형식 (PNG, JPEG, WebP, SVG, PDF, .fluera)",
        "우선 이메일 지원",
        "연 €99 (~월 €8.25)",
      ],
      cta: { label: "Pro 시작", href: "/beta" },
      highlighted: false,
    },
    {
      name: "Team",
      price: "€19.99",
      period: "시트당 월 · 연 €179 시트당 · 5+ 시트",
      tagline: "스튜디오, 랩, 작은 팀을 위한 공유 캔버스.",
      features: [
        "모든 팀 구성원에게 Pro의 모든 기능",
        "team Atlas와 함께 공유 작업 공간",
        "역할 기반 권한 및 ACL",
        "관리자 대시보드 + 감사 로그",
        "팀 청구 (단일 청구서, VAT 처리)",
        "우선 지원, 전담 온보딩",
      ],
      cta: { label: "영업팀과 상담", href: "/contact/sales" },
      highlighted: false,
    },
  ],
  faq: [
    {
      q: "왜 비공개 베타 중에 가격을 게시하나요?",
      a: "이것은 V1 가격입니다. 지금 가입하는 사람은 가격이 나중에 바뀌어도 구독이 유지되는 동안 자신의 등급 요금이 고정됩니다.",
    },
    {
      q: "학생 할인이 있나요?",
      a: "예. 검증된 학생은 교육 파일럿 프로그램을 통해 Plus 또는 Pro를 50% 할인 받습니다. /contact에 .edu / .ac.uk 주소나 ISIC 카드로 등록하세요. 베타 중에는 수동으로 검증을 처리합니다.",
    },
    {
      q: "Plus나 Pro를 취소하면 노트북이 어떻게 되나요?",
      a: "노트북은 기기에 남아 있고 Free 등급으로 되돌아갑니다. 처음 세 개를 유지하고 나머지는 다시 구독하거나 내보낼 때까지 읽기 전용이 됩니다. 명시적인 작업 없이는 아무것도 삭제되지 않습니다.",
    },
    {
      q: "환불 정책이 있나요?",
      a: "예 — 30일, 묻지 않고, 월간 및 연간 플랜 모두. 가입한 주소에서 support@fluera.dev로 이메일을 보내주세요.",
    },
    {
      q: "Fluera를 셀프 호스팅할 수 있나요?",
      a: "로컬 우선 부분은 이미 6개 플랫폼 모두에서 완전히 오프라인으로 실행됩니다. 클라우드 동기화 셀프 호스팅은 교육 로드맵에 있습니다 (온프레미스, SSO, 감사 로그) — 1단계에서는 아직 제공되지 않습니다.",
    },
    {
      q: "연구자나 비영리 단체에 할인을 제공하나요?",
      a: "예. 연구실, 박사 과정 프로그램 및 등록된 비영리 단체는 /contact에서 신청할 수 있습니다. 사례별로 검토하고 일반적으로 학생 요금으로 Pro를, 또는 구조화된 피드백을 대가로 무료로 제공합니다.",
    },
    {
      q: "Plus나 Pro의 무료 평가판이 없는 이유는 무엇입니까?",
      a: "Free 등급은 기능 제한된 마케팅이 아닙니다 — 완전한 캔버스입니다. 필요한 만큼 사용하세요. Plus와 Pro는 동기화와 AI를 잠금 해제하는데, 이는 우리가 무료로 제공할 수 없는 지속적인 클라우드 비용이 듭니다.",
    },
    {
      q: "어떤 결제 방법을 받나요?",
      a: "Stripe를 통한 신용/직불 카드 (모든 주요 브랜드), EU 고객을 위한 SEPA 직접 인출, Apple Pay / Google Pay. 교육 고객은 은행 송금이나 구매 주문서로 결제할 수 있습니다.",
    },
  ],
};

export default data;
