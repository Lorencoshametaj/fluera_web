import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "캡처",                  verb: "강의 당일",          description: "강의 중에 개념을 손으로 적으세요. 공간에 배치하세요. 펜의 느림이 강요하는 압축 — 거기서 부호화가 시작됩니다." },
    { n: 2,  title: "재구성",                 verb: "그날 저녁",          description: "책을 덮으세요. 기억나는 것을 같은 캔버스의 비어 있는 영역에 다시 만드세요. 망설이는 빨간 노드가 다음에 공부할 것의 지도입니다 (Kapur, 생산적 실패, 2008)." },
    { n: 3,  title: "소크라테스식",            verb: "48시간 이내",         description: "AI가 묻고 당신이 답합니다. 각 공개 전에 1부터 5까지 확신도를 평가하세요. 메타인지를 명시화합니다." },
    { n: 4,  title: "켄타우로스",              verb: "직후",              description: "Ghost Map이 당신의 추론을 이상적인 지도와 겹쳐 보여줍니다. 하이퍼코렉션이 격차를 영속적으로 만듭니다 (Butterfield와 Metcalfe, 2001)." },
    { n: 5,  title: "수면",                    verb: "그날 밤",            description: "아무것도 하지 마세요. 서파 수면이 하루를 재생합니다. 해마가 흔적을 신피질에 넘겨줍니다. 우리의 일은 길을 비키는 것입니다." },
    { n: 6,  title: "첫 회상",                 verb: "1일째",              description: "다음 날 돌아오세요. 캔버스가 거의 알았던 것을 흐리게 합니다. 기억에서 끌어내고, 미끄러진 것을 다시 쓰세요." },
    { n: 7,  title: "동료 학습",                verb: "2-3일째",            description: "동급생의 캔버스를 방문하세요. 가르치세요. 가르침을 받으세요. 다른 사람을 위해 정리하는 것이 당신 안에 굳힙니다 (가르침 효과)." },
    { n: 8,  title: "간격 회상",                verb: "3일 · 7일 · 14일…", description: "점점 넓어지는 간격에서 성공적인 재학습. 과학적 증거의 황금 표준 전략 (Rawson과 Dunlosky, 2011)." },
    { n: 9,  title: "영역 간 다리",             verb: "몇 주 후",           description: "대륙 보기로 줌 아웃. 화학과 미분 방정식 사이에 화살표를 그리세요. 전이는 학습의 진짜 시험입니다." },
    { n: 10, title: "시험 준비",                verb: "시험 7-14일 전",     description: "Fog of War 모드. 자신의 캔버스의 안개를 탐색하세요. 녹색, 빨강, 사각지대 — 숙달의 지도가 스스로 만들어집니다." },
    { n: 11, title: "Exam Session",            verb: "7일 전 ・ 당일",      description: "Fluera가 당신의 캔버스에서 폐쇄형 시험을 생성합니다. 1부터 5까지 확신도를 평가하고 손으로 답하세요. 그러면 Ghost Map이 격차를 겹쳐 보여줍니다. 하이퍼코렉션이 자만한 실수를 영속적으로 만듭니다 (Butterfield와 Metcalfe, 2001)." },
    { n: 12, title: "지속적인 성장",            verb: "영원히",             description: "캔버스는 인지의 자서전으로 남습니다. 2년 후에 돌아와서 자신이 얼마나 성장했는지의 형체 있는 모습을 볼 수 있습니다." },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "바람직한 어려움 — 더 어렵게 공부하는 것이 더 잘 기억된다는 반직관적인 발견.", year: "1994" },
    { name: "Butterfield와 Metcalfe",  contribution: "하이퍼코렉션 효과 — 자신감 있게 한 실수가 한 번 수정되면 가장 영구적으로 기억됩니다.", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "시스템 1 vs 시스템 2 — 사고와 기억에서의 빠른 직관과 느린 숙고.", year: "2011" },
    { name: "Lev Vygotsky",            contribution: "근접발달영역 — 비계 학습이 단독 학습을 능가하는 좁은 띠.", year: "1978" },
    { name: "Albert Bandura",          contribution: "자기효능감 — IQ보다 더 강한 학업 성공 예측 인자.", year: "1977" },
    { name: "Carol Dweck",             contribution: "성장 마인드셋 — 재능이 아닌 노력을 칭찬하면 어려움에 대한 반응이 바뀝니다.", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "플로우 — 도전과 능력이 즉각적인 피드백과 함께 균형을 이룰 때의 최대 인지 수행.", year: "1990" },
    { name: "Joseph Novak",            contribution: "개념도 — 지도를 구축하는 것이 미리 만들어진 것을 공부하는 것을 능가합니다, 모든 학문에서.", year: "1984" },
    { name: "O'Keefe와 Moser",         contribution: "장소 세포와 격자 세포 — 뇌의 생물학적 GPS. 기억의 궁전이 작동하는 이유.", year: "노벨상 2014", nobel: true },
    { name: "Flanigan 외", contribution: "24개 연구에서 손으로 쓴 노트가 타이핑보다 조금 나은 성취를 보였습니다 — 작은 차이지만 복습할수록 커집니다.", year: "2024" },
    { name: "Audrey van der Meer",     contribution: "EEG 증거: 손글씨가 타이핑보다 더 넓은 뇌 네트워크를 활성화합니다.", year: "2020" },
    { name: "Roediger와 Karpicke",     contribution: "회상 연습 — 시험은 기억을 측정하지 않고, 기억을 만듭니다.", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "베타" },
    { name: "iPadOS",  api: "Metal",       status: "베타" },
    { name: "macOS",   api: "Metal",       status: "베타" },
    { name: "Windows", api: "Direct3D 11", status: "알파" },
    { name: "Android", api: "Vulkan",      status: "알파" },
    { name: "Linux",   api: "OpenGL",      status: "알파" },
    { name: "Web",     api: "WebGPU",      status: "데모" },
  ],
  medicalUseCase: {
    kicker: "가장 힘든 교육과정을 위해",
    title: "의대 공부를, 하나의 캔버스에.",
    intro: "해부학, 생리학, 약리학. 서로 연결된 채로 남아야 하고, 시험 압박 속에서도 인출되어야 하는 수천 개의 사실. 의학에서 실제로 통하는 공부는 하는 동안 힘들게 느껴지는 공부입니다. Fluera는 바로 그 공부를 가장 저항이 적은 길로 만듭니다.",
    steps: [
      {
        phase: "강의 날",
        title: "각 기관계가 하나의 영역이 됩니다.",
        description: "같은 무한 캔버스 안에서 강의마다 자기 영역에 씁니다 — 해부 구조, 약물 작용 기전, 대사 경로. 공간상의 위치가 기억의 닻이 됩니다. 12개의 브러시 엔진과 지원 태블릿에서의 저지연 잉크.",
      },
      {
        phase: "그날 저녁",
        title: "책을 펴기 전에, 기억에서 재구성하세요.",
        description: "강의 자료를 덮으세요. 같은 캔버스의 빈 영역에 기억나는 것을 다시 세워 보세요. 발견되는 구멍 — 건너뛴 뇌신경, 헷갈린 수용체 — 이 오늘 밤 공부할 것의 지도입니다. 설계로서의 생산적 실패 (Kapur, 2008).",
      },
      {
        phase: "48시간 안에",
        title: "직접 만든 캔버스 위에서의 소크라테스식 문답.",
        description: "AI가 묻고 당신이 답합니다. 답을 보기 전에 확신도를 1~5로 예측합니다. 확신이 높았는데 틀린 것일수록 — 확실하다고 여겼던 약일수록 — 더 강하게 강화됩니다. 과잉교정 (Butterfield & Metcalfe, 2001).",
      },
      {
        phase: "시험 7~14일 전",
        title: "가장 약한 계통에 Fog of War를.",
        description: "캔버스의 일부를 가리세요. 공개하기 전에 해부를 기억에서 끌어내세요. Fluera는 현대적 간격 반복 알고리즘인 FSRS로 복귀 시점을 정합니다. 시험 당일이면 캔버스 자체가 시뮬레이션입니다.",
      },
    ],
    closing: "종이와 PDF와 세 개의 열린 앱으로 이미 절반쯤 하고 있는 흐름이라면, Fluera가 그것을 하나의 연속된 루프로 만듭니다. 기억이 작동하는 방식에 맞춰 만들었고, 다른 방식은 용납하지 않는 교육과정에서 시험했습니다.",
  },
};

export default data;
