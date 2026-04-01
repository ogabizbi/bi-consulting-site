export default function BIDataConsultingWebsite() {
  const services = [
    {
      title: "Power BIトラブル即解決パック",
      price: "5万円〜",
      time: "1〜2時間",
      target: "Power BIの更新エラーやGatewayトラブルを早く解決したい企業向け",
      points: [
        "Gatewayエラーの原因特定",
        "更新失敗の切り分け",
        "改善策の提示と優先順位整理",
      ],
    },
    {
      title: "BIダッシュボード診断サービス",
      price: "10万円〜",
      time: "3〜5時間",
      target: "作ったものの使われていないダッシュボードを改善したい企業向け",
      points: [
        "KPI設計の見直し",
        "画面構成・見やすさ改善",
        "活用されるダッシュボードへの再設計",
      ],
    },
    {
      title: "AWSデータ基盤レビュー",
      price: "20万円〜",
      time: "5〜10時間",
      target: "S3 / Glue / Redshift / BI構成のコストや性能に課題がある企業向け",
      points: [
        "構成全体のレビュー",
        "ボトルネックの洗い出し",
        "コスト最適化の提案",
      ],
    },
  ];

  const strengths = [
    "BI・データ基盤の両方を横断して見られる",
    "Power BI / QuickSight / AWSの実務経験ベース",
    "単なる開発ではなく、課題整理から支援可能",
    "スポット相談から継続支援まで対応可能",
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="border-b bg-white">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full border border-slate-200 px-4 py-1 text-sm font-medium text-slate-600">
              BI / データ基盤 / Power BI / AWS コンサルティング
            </p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
              BIとデータ基盤の課題を、
              <br className="hidden md:block" />
              実務目線で素早く解決します。
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 md:text-xl">
              Power BIのトラブル対応、ダッシュボード改善、AWSデータ基盤レビューまで。
              現場で起きる「困った」を、短時間で整理し、実行しやすい改善策へ落とし込みます。
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02]"
              >
                サービスを見る
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100"
              >
                相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {strengths.map((item) => (
            <div key={item} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <p className="text-base font-medium leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">提供サービス</h2>
          <p className="mt-3 text-slate-600">
            まずはスポット相談からでも大丈夫です。現状整理だけでも価値が出るように設計しています。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex h-full flex-col rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold leading-8">{service.title}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                  {service.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-500">想定工数：{service.time}</p>
              <p className="mt-4 text-slate-600">{service.target}</p>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                {service.points.map((point) => (
                  <li key={point} className="rounded-2xl bg-slate-50 px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
              <button className="mt-8 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
                このサービスを相談する
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-2xl font-bold">こんな課題に対応します</h2>
            <div className="mt-6 space-y-4 text-slate-700">
              <div className="rounded-2xl bg-slate-50 p-4">Power BIの更新エラーが解消できない</div>
              <div className="rounded-2xl bg-slate-50 p-4">ダッシュボードを作ったのに現場で使われない</div>
              <div className="rounded-2xl bg-slate-50 p-4">AWSのデータ基盤コストが高く、改善余地が見えない</div>
              <div className="rounded-2xl bg-slate-50 p-4">QuickSight / Power BI / AWSをまたいで相談したい</div>
            </div>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm">
            <h2 className="text-2xl font-bold">進め方</h2>
            <div className="mt-6 space-y-5">
              <div>
                <p className="text-sm text-slate-300">STEP 1</p>
                <p className="mt-1 text-lg font-semibold">無料相談</p>
                <p className="mt-2 text-slate-300">現状の課題とゴールをヒアリングします。</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">STEP 2</p>
                <p className="mt-1 text-lg font-semibold">対応方針の整理</p>
                <p className="mt-2 text-slate-300">スポット支援か継続支援かを整理し、進め方をご提案します。</p>
              </div>
              <div>
                <p className="text-sm text-slate-300">STEP 3</p>
                <p className="mt-1 text-lg font-semibold">実施・改善提案</p>
                <p className="mt-2 text-slate-300">原因特定、レビュー、改善案の提示まで行います。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:p-12">
          <h2 className="text-3xl font-bold">お問い合わせ</h2>
          <p className="mt-4 text-slate-600">
            まずは「何に困っているか」がざっくりしていても問題ありません。
            課題の整理からお手伝いします。
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <input
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              placeholder="会社名 / お名前"
            />
            <input
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
              placeholder="メールアドレス"
            />
          </div>
          <textarea
            className="mt-4 min-h-[140px] w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-slate-900"
            placeholder="ご相談内容"
          />
          <button className="mt-6 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
            送信する
          </button>
        </div>
      </section>
    </div>
  );
}
