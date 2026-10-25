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
      period: "ずっと無料",
      tagline:
        "canvas のすべて、復習、コース。サブスクリプション不要、期限もありません。",
      features: [
        "無限の canvas と手書き",
        "復習、コース、すべてのブラシ、書き出し、タイムトラベル",
        "登録後の最初の月は AI をお試しで",
        "すべてのデバイスで使える 500 MB のクラウド（音声なし、Cloud の開始後）",
        "オフラインでも使えます。canvas はデバイスに残ります",
      ],
      cta: { label: "無料で始める", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud",
      name: "Cloud",
      price: "€19.99",
      period: "年額 · 年額のみ · Cloud 60 は €44.99 / 年",
      tagline:
        "canvas と録音した講義のための保存場所。アプリのアップデートで開始します。",
      features: [
        "スマホ、タブレット、パソコンで使える 20 GB",
        "録音した講義をどこでも聴ける",
        "スマホを替えても canvas は安全",
        "Cloud 60：講義をたくさん録音する人のための 60 GB",
      ],
      cta: { label: "Cloud を選ぶ", href: "/beta" },
      highlighted: false,
    },
    {
      id: "ia",
      name: "AI",
      price: "€9.99",
      period: "月額 · €84.99 / 年（€34.89 お得）",
      tagline: "書いた内容を読み取る AI。残量はいつでも見えます。",
      features: [
        "AI がノートを読み、概念ごとに名前を付けます",
        "チューター、試験、チャット、数式、文字起こし",
        "今月残っている AI の量をパーセントでいつでも確認",
        "忙しい月のための試験用の予備",
        "14日間無料でお試し",
      ],
      cta: { label: "AI を試す", href: "/beta" },
      highlighted: false,
    },
    {
      id: "cloud_ia",
      name: "Cloud + AI",
      price: "€99.99",
      period: "年額 · 別々に買うより €4.99 お得 · Cloud 60 なら €119.99 / 年",
      tagline: "Cloud と AI のすべてを、1つのサブスクリプションで。",
      features: [
        "Cloud と AI のすべて",
        "20 GB、または Cloud 60 + AI で 60 GB",
        "今月残っている AI の量をパーセントでいつでも確認",
        "年額のみ",
      ],
      cta: { label: "Cloud + AI を選ぶ", href: "/beta" },
      highlighted: true,
      badge: "おすすめ",
    },
  ],
  faq: [
    {
      q: "残りの AI はどこで確認できますか?",
      a: "アプリでいつでも確認できます。今月の AI があと何パーセント残っているか、いつ回復するか（毎月1日）、今のペースでいつまで足りるかをメーターが示します。隠れた上限も、頭の中で換算するクレジットもありません。見えている量が、使える量です。",
    },
    {
      q: "今月の AI を使い切ったら?",
      a: "復習、コース、ノートは AI がなくてもいつでも使えます。AI は毎月1日に戻ります。それより前に必要なら、アプリで試験用の予備をオンにするか、少し追加できます。",
    },
    {
      q: "一度買えば、すべてのデバイスで使えますか?",
      a: "はい。スマートフォンまたはタブレットの Fluera アプリから App Store または Google Play で登録し、ストアのアカウントに登録済みの支払い方法でお支払いいただきます。その後は、同じアカウントでサインインしたすべてのデバイス（パソコンを含む）でプランをご利用いただけます。",
    },
    {
      q: "Cloud はもうデバイス間で使えますか?",
      a: "まだです。スマホ、タブレット、パソコン間の Cloud は開発中で、アプリのアップデートで開始します。それまで canvas はデバイスに残り、オフラインでも使えます。",
    },
    {
      q: "無料体験はありますか?",
      a: "はい。AI のみ、14日間無料です。体験期間が終わる前なら、ストアからいつでも解約できます。Free には期限がなく、支払いも必要ありません。",
    },
    {
      q: "解約したら canvas はどうなりますか?",
      a: "デバイスに残り、あなたのものです。canvas、復習、コース、ブラシ、書き出しは Free で引き続き使えます。プランの機能は再開するまで停止します。あなたの操作なしに削除されるものはありません。",
    },
    {
      q: "返金ポリシーは?",
      a: "返金・解約条件はストアと購入経路によって異なります。適用されるポリシーは確定前に表示されます。サポートが必要な場合は、登録したアドレスから support@fluera.dev へご連絡ください。",
    },
    {
      q: "Team または Education プランは?",
      a: "フェーズ2 で登場予定(共有ワークスペース、管理ダッシュボード、SSO)。興味があれば support@fluera.dev へメール — 最初の design partner と一緒にロードマップを構築中です。",
    },
  ],
};

export default data;
