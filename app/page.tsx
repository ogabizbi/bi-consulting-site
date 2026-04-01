import {
  Database,
  BarChart3,
  Wrench,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Clock3,
  Layers3,
  Activity,
  Zap,
} from "lucide-react";

export default function BIDataConsultingWebsite() {
  const services = [
    {
      icon: Wrench,
      title: "Power BIトラブル即解決",
      price: "5万円〜",
      time: "1〜2時間",
      summary: "更新エラーやGateway障害を短時間で整理。",
      points: ["原因特定", "切り分け", "改善方針提示"],
    },
    {
      icon: BarChart3,
      title: "ダッシュボード診断",
      price: "10万円〜",
      time: "3〜5時間",
      summary: "見づらい・使われないBIを改善。",
      points: ["KPI見直し", "UI改善", "活用設計"],
    },
    {
      icon: Database,
      title: "AWSデータ基盤レビュー",
      price: "20万円〜",
      time: "5〜10時間",
      summary: "S3 / Glue / Redshift のコストと性能をレビュー。",
      points: ["構成整理", "ボトルネック抽出", "最適化提案"],
    },
  ];

  const strengths = [
    {
      icon: Layers3,
      title: "BIと基盤を横断",
      text: "ダッシュボードだけでなく、その裏側のデータ基盤まで見られます。",
    },
    {
      icon: ShieldCheck,
      title: "実務に近い提案",
      text: "理想論ではなく、現場で回る改善策に落とし込みます。",
    },
    {
      icon: Clock3,
      title: "短時間でも前進",
      text: "まず何から直すべきかを明確にします。",
    },
  ];

  const flow = [
    { no: "01", title: "相談", text: "課題と状況をヒアリング" },
    { no: "02", title: "整理", text: "原因と優先順位を見える化" },
    { no: "03", title: "提案", text: "改善方針と進め方を提示" },
  ];

  const techs = ["Power BI", "QuickSight", "AWS", "Redshift", "Glue", "ETL", "KPI設計", "RLS"];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-8rem] top-[6rem] h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              BI / Data Platform Consulting
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            無料相談
          </a>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              Power BI / QuickSight / AWS / Redshift / Glue
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              BIとデータ基盤の課題を、
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                見える改善案
              </span>
              に変える。
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
              トラブル対応、ダッシュボード改善、AWSデータ基盤レビューまで。
              現場で止まっているポイントを整理し、短時間で次の打ち手を明確にします。
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                サービスを見る <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                相談する
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">対応形態</p>
                <p className="mt-3 text-2xl font-semibold">スポット / 継続</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">初回相談</p>
                <p className="mt-3 text-2xl font-semibold">課題整理から</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">強み</p>
                <p className="mt-3 text-2xl font-semibold">BI × 基盤</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <Activity className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">よくある相談</p>
                  <p className="mt-2 text-lg font-semibold">Power BI更新エラー</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5">
                  <BarChart3 className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">よくある相談</p>
                  <p className="mt-2 text-lg font-semibold">使われないBI改善</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:col-span-2">
                  <Zap className="h-6 w-6 text-cyan-300" />
                  <p className="mt-4 text-sm text-slate-400">提供価値</p>
                  <p className="mt-2 text-2xl font-semibold leading-tight">
                    原因特定だけで終わらず、
                    <br className="hidden sm:block" />
                    次にやることまで明確にします。
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 p-6 backdrop-blur-md">
              <p className="text-sm font-medium text-cyan-200">対応領域</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {techs.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                <div className="inline-flex rounded-2xl bg-white/10 p-3">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Services</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">提供サービス</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            長文ではなく、何ができるかが一目で伝わるように整理しています。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-200">
                    {service.price}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-400">想定工数：{service.time}</p>
                <p className="mt-4 leading-7 text-slate-300">{service.summary}</p>

                <div className="mt-6 grid gap-3">
                  {service.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3"
                    >
                      <CheckCircle2 className="h-4 w-4 text-cyan-300" />
                      <span className="text-sm text-slate-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-4 md:py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Flow</p>
              <h2 className="mt-3 text-3xl font-semibold md:text-4xl">進め方</h2>
            </div>
            <p className="max-w-xl text-slate-300">初回の相談から改善方針の提示まで、シンプルに3ステップです。</p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {flow.map((item) => (
              <div key={item.no} className="rounded-3xl border border-white/10 bg-slate-900/60 p-6">
                <p className="text-sm font-semibold text-cyan-300">{item.no}</p>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold">まずは気軽にご相談ください</h2>
              <p className="mt-4 leading-8 text-slate-300">
                まだ課題がはっきりしていなくても大丈夫です。
                現状整理から一緒に進めます。
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                  placeholder="会社名 / お名前"
                />
                <input
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                  placeholder="メールアドレス"
                />
              </div>
              <textarea
                className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="ご相談内容"
              />
              <button className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                送信する <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
