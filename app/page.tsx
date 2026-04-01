export default function BIConsultingLandingPage() {
  const problems = [
    "Power BI の更新エラー対応に時間が取られている",
    "ダッシュボードを作っても現場で使われていない",
    "AWSデータ基盤のコストや構成が最適か分からない",
    "BIとデータ基盤をまとめて相談できる相手がいない",
  ];

  const services = [
    {
      no: "01",
      title: "Power BIトラブル即解決",
      text: "更新失敗、Gatewayエラー、接続不良などを切り分けし、最短で復旧方針を整理します。",
      bullets: ["原因特定", "切り分け", "改善方針提示"],
    },
    {
      no: "02",
      title: "ダッシュボード診断",
      text: "見づらい・使われないBIを、意思決定に使えるダッシュボードへ改善します。",
      bullets: ["KPI見直し", "UI改善", "活用設計"],
    },
    {
      no: "03",
      title: "AWSデータ基盤レビュー",
      text: "S3 / Glue / Redshift などの構成をレビューし、コストと運用の改善余地を洗い出します。",
      bullets: ["構成整理", "ボトルネック抽出", "最適化提案"],
    },
  ];

  const features = [
    {
      title: "短時間で課題を整理",
      text: "何がボトルネックなのかを先に明確化し、優先順位の高い打ち手から提案します。",
    },
    {
      title: "BIと基盤を横断して見られる",
      text: "ダッシュボード側だけでなく、データ取得・加工・統合まで含めて改善できます。",
    },
    {
      title: "現場で回る形に落とし込む",
      text: "理想論ではなく、実際の運用・体制・予算に合わせた改善案を整理します。",
    },
    {
      title: "スポット相談にも対応",
      text: "顧問契約でなくても、まずはピンポイントな相談から始められます。",
    },
  ];

  const flow = [
    { no: "01", title: "ヒアリング", text: "現状の課題、利用ツール、困っている状況を確認" },
    { no: "02", title: "整理", text: "原因と改善優先度を整理し、対応方針を明確化" },
    { no: "03", title: "提案", text: "実施内容・進め方・必要工数の目安をご提示" },
  ];

  return (
    <main className="lp">
      <header className="site-header">
        <div className="container header-inner">
          <div className="logo">BI / Data Platform Consulting</div>
          <nav className="header-actions">
            <a href="#services" className="link-button">サービス</a>
            <a href="#contact" className="primary-button small">無料相談</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Power BI / QuickSight / AWS / Redshift / Glue</div>
            <h1>
              BIの課題を、<br />
              <span>“使える改善案”</span> に変える。
            </h1>
            <p className="hero-text">
              Power BIの更新エラー対応、使われないダッシュボードの改善、
              AWSデータ基盤レビューまで。
              止まっているポイントを整理し、次の打ち手を明確にします。
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="primary-button">無料で相談する</a>
              <a href="#services" className="secondary-button">サービスを見る</a>
            </div>

            <div className="hero-points">
              <div className="point-card">
                <div className="point-label">対応形態</div>
                <div className="point-value">スポット / 継続</div>
              </div>
              <div className="point-card">
                <div className="point-label">相談内容</div>
                <div className="point-value">BI × 基盤</div>
              </div>
              <div className="point-card">
                <div className="point-label">初回</div>
                <div className="point-value">課題整理から</div>
              </div>
            </div>
          </div>

          <div className="hero-form-card">
            <div className="form-card-badge">無料相談</div>
            <h2>まずは課題を整理しませんか？</h2>
            <p>
              まだ要件が固まっていなくても大丈夫です。
              現状の悩みから一緒に整理します。
            </p>

            <div className="form-grid">
              <input type="text" placeholder="会社名 / お名前" />
              <input type="text" placeholder="メールアドレス" />
              <textarea placeholder="ご相談内容" rows={6} />
              <button className="primary-button full">送信する</button>
            </div>
          </div>
        </div>
      </section>

      <section className="problem-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Problems</div>
            <h2>こんなお悩みはありませんか？</h2>
            <p>
              調査や運用に時間を取られ、本来やりたい改善に手が回らない状態を解消します。
            </p>
          </div>

          <div className="problem-grid">
            {problems.map((item) => (
              <div key={item} className="problem-card">
                <div className="problem-icon">!</div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="service-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">Services</div>
            <h2>提供サービス</h2>
            <p>課題の切り分けから改善提案まで、分かりやすく3つに整理しています。</p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <div key={service.title} className="service-card">
                <div className="service-no">{service.no}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="feature-section">
        <div className="container">
          <div className="section-heading center">
            <div className="section-label">Why Us</div>
            <h2>選ばれる理由</h2>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flow-section">
        <div className="container">
          <div className="section-heading">
            <div className="section-label">Flow</div>
            <h2>ご相談から実施までの流れ</h2>
          </div>

          <div className="flow-grid">
            {flow.map((item) => (
              <div key={item.no} className="flow-card">
                <div className="flow-no">{item.no}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-box">
          <div>
            <div className="section-label">Contact</div>
            <h2>まずは無料で課題整理します</h2>
            <p>
              Power BI、QuickSight、AWSデータ基盤のどこから相談すればいいか分からない段階でも大丈夫です。
            </p>
          </div>
          <a href="#contact" className="primary-button">無料相談はこちら</a>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container contact-box">
          <div className="contact-copy">
            <div className="section-label">Contact Form</div>
            <h2>お問い合わせ</h2>
            <p>
              課題がまだ曖昧でも構いません。
              「何に困っているか」から一緒に整理します。
            </p>
          </div>

          <div className="contact-form">
            <div className="two-col">
              <input type="text" placeholder="会社名 / お名前" />
              <input type="text" placeholder="メールアドレス" />
            </div>
            <textarea placeholder="ご相談内容" rows={7} />
            <button className="primary-button">送信する</button>
          </div>
        </div>
      </section>
    </main>
  );
}
