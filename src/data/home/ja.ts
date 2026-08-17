import type { HomeData } from "../types";

const data: HomeData = {
  steps: [
    { n: 1,  title: "キャプチャ",                verb: "授業当日",          description: "授業中に概念を手書きする。空間に配置する。遅いペンが脳に圧縮を強いる――そこで符号化が生まれます。" },
    { n: 2,  title: "再構築",                    verb: "その晩",            description: "本を閉じる。覚えていることを同じキャンバス内の空いている領域に再構築する。ためらった赤いノードが、次に学ぶべきものの地図です(Kapur、生産的失敗、2008)。" },
    { n: 3,  title: "ソクラテス的対話",          verb: "48時間以内",        description: "AIが質問し、あなたが答える。各回答の前に1から5で確信度を申告する。メタ認知を明示化します。" },
    { n: 4,  title: "ケンタウロス",              verb: "直後",              description: "Ghost Mapがあなたの推論を理想的な地図に重ねます。ハイパーコレクションが修正を記憶に固定します(ButterfieldとMetcalfe、2001)。" },
    { n: 5,  title: "睡眠",                      verb: "その夜",            description: "何もしない。徐波睡眠が一日を再生します。海馬が痕跡を皮質に渡します。私たちの仕事は邪魔をしないことです。" },
    { n: 6,  title: "最初の想起",                verb: "1日目",             description: "翌日に戻る。キャンバスがほぼ知っていたことを薄くします。記憶から取り出して、抜け落ちたものを書き直します。" },
    { n: 7,  title: "ピアラーニング",            verb: "2〜3日目",          description: "クラスメートのキャンバスを訪れる。教える。教えられる。他者のために整理することが、自分の中で定着させます(教える効果)。" },
    { n: 8,  title: "間隔を空けた想起",          verb: "3日目・7日目・14日目…", description: "間隔を広げながらの逐次再学習。科学的エビデンスにおけるゴールドスタンダード戦略です(RawsonとDunlosky、2011)。" },
    { n: 9,  title: "領域間の橋",                verb: "数週間後",          description: "大陸ビューまでズームアウト。化学と微分方程式の間に矢印を引く。転移こそが学習の本当のテストです。" },
    { n: 10, title: "試験準備",                  verb: "7〜14日前",         description: "Fog of War。自分自身のキャンバスの霧を進む。緑、赤、盲点――マスタリーの地図がひとりでに描かれます。" },
    { n: 11, title: "Exam Session",              verb: "7日前 ・ 当日",      description: "Fluera があなたのキャンバスから閉本試験を生成します。1から5で確信度を申告し、手で答え、Ghost Map がギャップを重ねる。ハイパーコレクションが、自信があったのに間違えた箇所を永続的に固定します(ButterfieldとMetcalfe、2001)。" },
    { n: 12, title: "永続的な成長",              verb: "永遠に",            description: "キャンバスは認知の自伝として残ります。2年後に戻ったとき、自分がどれだけ成長したかの形ある姿が見えます。" },
  ],
  authors: [
    { name: "Robert A. Bjork",         contribution: "望ましい困難――より難しく学習することがより良い想起を生むという反直観的な発見。", year: "1994" },
    { name: "ButterfieldとMetcalfe",   contribution: "ハイパーコレクション効果――高い確信度で犯した誤りは、一度修正されると最も長く残ります。", year: "2001" },
    { name: "Daniel Kahneman",         contribution: "システム1対システム2――思考と記憶における速い直観と遅い熟慮。", year: "2011" },
    { name: "レフ・ヴィゴツキー",      contribution: "発達の最近接領域――支援を受けた学習が独学を上回る、その狭い帯域。", year: "1978" },
    { name: "Albert Bandura",          contribution: "自己効力感――学業成功の最強の予測因子、IQをも上回る。", year: "1977" },
    { name: "Carol Dweck",             contribution: "成長マインドセット――才能ではなく努力を褒めることが、困難への反応を変えます。", year: "2006" },
    { name: "Mihaly Csikszentmihalyi", contribution: "フロー――挑戦とスキルが即座のフィードバックとともに釣り合うときの認知パフォーマンスの最大値。", year: "1990" },
    { name: "Joseph Novak",            contribution: "コンセプトマッピング――地図を構築することは、既製のものを学ぶことを、どの分野でも上回ります。", year: "1984" },
    { name: "O'KeefeとMoser",          contribution: "Place cellsとgrid cells――脳の生物学的GPS。記憶の宮殿が機能する理由。", year: "ノーベル賞2014", nobel: true },
    { name: "MuellerとOppenheimer",    contribution: "手書きのノートは概念的な質問でラップトップのノートを上回ります――ラップトップの方が網羅的でも。", year: "2014" },
    { name: "Audrey van der Meer",     contribution: "EEGの証拠:手書きはタイピングよりも広い脳ネットワークを活性化します。", year: "2020" },
    { name: "RoedigerとKarpicke",      contribution: "想起練習――テストは記憶を測るのではなく、記憶を作ります。", year: "2006" },
  ],
  platforms: [
    { name: "iOS",     api: "Metal",       status: "ベータ" },
    { name: "iPadOS",  api: "Metal",       status: "ベータ" },
    { name: "macOS",   api: "Metal",       status: "ベータ" },
    { name: "Windows", api: "Direct3D 11", status: "アルファ" },
    { name: "Android", api: "Vulkan",      status: "アルファ" },
    { name: "Linux",   api: "OpenGL",      status: "アルファ" },
    { name: "Web",     api: "WebGPU",      status: "デモ" },
  ],
  medicalUseCase: {
    kicker: "もっとも厳しいカリキュラムのために",
    title: "医学部を、ひとつのキャンバスに。",
    intro: "解剖学、生理学、薬理学。互いにつながったまま、試験の重圧の下でも引き出せなければならない何千もの知識。医学で本当に効くのは、やっている最中は苦しく感じる勉強です。Fluera はその勉強を、最も抵抗の少ない道に変えます。",
    steps: [
      {
        phase: "講義の日",
        title: "器官系ごとに、ひとつの領域になる。",
        description: "同じ無限キャンバスの中で、講義ごとに自分の領域に書きます——解剖構造、薬の作用機序、代謝経路。空間上の位置がそのまま記憶の錨になります。12 のブラシエンジンと、対応タブレットでの低遅延インク。",
      },
      {
        phase: "その日の夜",
        title: "本を開く前に、記憶から再構成する。",
        description: "講義資料を閉じます。同じキャンバスの空いた場所に、覚えていることを組み立て直してみてください。見つかる穴——飛ばした脳神経、取り違えた受容体——が、今夜やるべきことの地図です。生産的失敗を、設計として (Kapur, 2008)。",
      },
      {
        phase: "48 時間以内",
        title: "自分が作ったキャンバスの上で、ソクラテス式の問答。",
        description: "AI が問い、あなたが答えます。答えを見る前に、確信度を 1〜5 で予測します。確信が高かったのに外した項目ほど——確信していた薬ほど——強く補強されます。ハイパーコレクション (Butterfield & Metcalfe, 2001)。",
      },
      {
        phase: "試験の 7〜14 日前",
        title: "いちばん弱い系に Fog of War を。",
        description: "キャンバスの一部を覆います。開く前に、解剖を記憶から引き出してください。Fluera は FSRS——現代的な間隔反復アルゴリズム——で戻る日を決めます。試験当日には、キャンバスそのものが本番のシミュレーションです。",
      },
    ],
    closing: "紙と PDF と 3 つの開いたアプリで、すでに半分やっている流れなら、Fluera はそれをひと続きのループにします。記憶の仕組みに合わせて作られ、それ以外を許さないカリキュラムで試されています。",
  },
};

export default data;
