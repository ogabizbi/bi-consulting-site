import { Database, BarChart3, Wrench, ArrowRight, CheckCircle2, Sparkles, ShieldCheck, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

export default function BIDataConsultingWebsite() {
  const services = [
    {
      icon: Wrench,
      title: "Power BIトラブル即解決パック",
      price: "5万円〜",
      time: "1〜2時間",
      target: "更新エラーやGatewayトラブルを素早く切り分け、対応方針まで整理。",
      points: [
        "Gatewayエラーの原因特定",
        "更新失敗の切り分け",
        "改善策の提示と優先順位整理",
      ],
    },
    {
      icon: BarChart3,
      title: "BIダッシュボード診断サービス",
      price: "10万円〜",
      time: "3〜5時間",
      target: "見づらい・使われないダッシュボードを、伝わる設計へ改善。",
      points: [
        "KPI設計の見直し",
        "画面構成・見やすさ改善",
        "活用されるダッシュボードへの再設計",
      ],
    },
    {
      icon: Database,
      title: "AWSデータ基盤レビュー",
      price: "20万円〜",
      time: "5〜10時間",
      target: "S3 / Glue / Redshift / BI構成のコストと性能を横断レビュー。",
      points: [
        "構成全体のレビュー",
        "ボトルネックの洗い出し",
        "コスト最適化の提案",
      ],
    },
  ];

  const strengths = [
    {
      icon: Sparkles,
      title: "横断的に見られる",
      text: "BI・データ基盤・運用まで一気通貫で整理できます。",
    },
    {
      icon: ShieldCheck,
      title: "実務ベース",
      text: "Power BI / QuickSight / AWS の現場知見をもとに支援します。",
    },
    {
      icon: Clock3,
      title: "短時間でも価値",
      text: "スポット相談でも、次にやるべきことが明確になる形で返します。",
    },
  ];

  const issues = [
    "Power BIの更新エラーが解消できない",
    "ダッシュボードを作ったのに現場で使われない",
    "AWSのデータ基盤コストが高く、改善余地が見えない",
    "QuickSight / Power BI / AWSをまたいで相談したい",
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute right-[-6rem] top-[8rem] h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.2em] text-cyan-300 uppercase">
                BI / Data Platform Consulting
              </p>
            </div>
            <a
              href="#contact"
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              お問い合わせ
            </a>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              Power BI / QuickSight / AWS / Redshift / Glue
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              BIとデータ基盤の課題を、
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent">
                洗練された改善提案
              </span>
              へ。
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Power BIのトラブル対応、ダッシュボード改善、AWSデータ基盤レビューまで。
              現場で起きる課題を整理し、短時間でも実行しやすい打ち手に落とし込みます。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
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
                無料相談をする
              </a>
            </div>

            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {strengths.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-md">
                    <div className="mb-4 inline-flex rounded-2xl bg-white/10 p-3">
                      <Icon className="h-5 w-5 text-cyan-300" />
                    </div>
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{item.text}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm text-cyan-300">対応領域</p>
                <div className="mt-5 grid gap-4">
                  {[
                    ["BI", "Power BI / QuickSight / KPI / Dashboard"],
                    ["Data", "S3 / Glue / Redshift / ETL / Cost Review"],
                    ["Support", "スポット相談 / 継続支援 / レビュー"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/90">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 p-5">
                  <p className="text-sm text-cyan-200">まずはスポット相談からでもOK</p>
                  <p className="mt-2 text-2xl font-semibold">短時間で、課題整理と打ち手を明確にします。</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Services</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-5xl">提供サービス</h2>
          </div>
          <p className="max-w-2xl text-slate-300">
            まずは現状整理だけでも大丈夫です。技術的な深掘りだけでなく、優先順位と進め方まで見える形で返します。
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3">
                    <Icon className="h-5 w-5 text-cyan-300" />
                  </div>
                  <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-200">
                    {service.price}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-9">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-400">想定工数：{service.time}</p>
                <p className="mt-4 leading-7 text-slate-300">{service.target}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-4">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition group-hover:text-cyan-100"
                >
                  このサービスを相談する <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Challenges</p>
            <h2 className="mt-3 text-3xl font-semibold">こんな課題に対応します</h2>
            <div className="mt-8 space-y-4">
              {issues.map((issue) => (
                <div key={issue} className="rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200">
                  {issue}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-400/10 p-8 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Process</p>
            <h2 className="mt-3 text-3xl font-semibold">進め方</h2>
            <div className="mt-8 grid gap-4">
              {[
                ["STEP 1", "無料相談", "現状の課題とゴールをヒアリングします。"],
                ["STEP 2", "対応方針の整理", "スポット支援か継続支援かを整理し、進め方をご提案します。"],
                ["STEP 3", "実施・改善提案", "原因特定、レビュー、改善案の提示まで行います。"],
              ].map(([step, title, text]) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{step}</p>
                  <p className="mt-2 text-xl font-semibold">{title}</p>
                  <p className="mt-2 text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Contact</p>
              <h2 className="mt-3 text-4xl font-semibold">まずは気軽にご相談ください</h2>
              <p className="mt-4 leading-8 text-slate-300">
                まだ課題が言語化できていない段階でも問題ありません。
                現状整理からご一緒します。
              </p>
            </div>

            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="会社名 / お名前"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="メールアドレス"
              />
              <textarea
                className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-cyan-300/40"
                placeholder="ご相談内容"
              />
              <button className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                送信する <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
