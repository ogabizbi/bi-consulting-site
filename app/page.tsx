export default function BIDataConsultingWebsite() {
  const services = [
    {
      title: "Power BIトラブル即解決",
      price: "5万円〜",
      time: "1〜2時間",
      summary: "更新エラーやGateway障害を短時間で整理。",
      points: ["原因特定", "切り分け", "改善方針提示"],
    },
    {
      title: "ダッシュボード診断",
      price: "10万円〜",
      time: "3〜5時間",
      summary: "見づらい・使われないBIを改善。",
      points: ["KPI見直し", "UI改善", "活用設計"],
    },
    {
      title: "AWSデータ基盤レビュー",
      price: "20万円〜",
      time: "5〜10時間",
      summary: "S3 / Glue / Redshift のコストと性能をレビュー。",
      points: ["構成整理", "ボトルネック抽出", "最適化提案"],
    },
  ];

  const strengths = [
    {
      title: "BIと基盤を横断",
      text: "ダッシュボードだけでなく、その裏側のデータ基盤まで見られます。",
    },
    {
      title: "実務に近い提案",
      text: "理想論ではなく、現場で回る改善策に落とし込みます。",
    },
    {
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
    <main className="page">
      <div className="bg-orb orb1" />
      <div className="bg-orb orb2" />
      <div className="bg-orb orb3" />

      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">BI / Data Platform Consulting</div>
          <a href="#contact" className="btn btn-ghost">無料相談</a>
        </div>
      </header>

      <section className="hero container">
        <div className="hero-left">
          <div className="pill">Power BI / QuickSight / AWS / Redshift / Glue</div>
          <h1>
            BIとデータ基盤の課題を、
            <span className="gradient-text">見える改善案</span>
            に変える。
          </h1>
          <p className="hero-text">
            トラブル対応、ダッシュボード改善、AWSデータ基盤レビューまで。
            現場で止まっているポイントを整理し、短時間で次の打ち手を明確にします。
          </p>

          <div className="hero-actions">
            <a href="#services" className="btn btn-primary">サービスを見る</a>
            <a href="#contact" className="btn btn-ghost">相談する</a>
          </div>

          <div className="stats">
            <div className="card mini-card">
              <div className="label">対応形態</div>
              <div className="value">スポット / 継続</div>
            </div>
            <div className="card mini-card">
              <div className="label">初回相談</div>
              <div className="value">課題整理から</div>
            </div>
            <div className="card mini-card">
              <div className="label">強み</div>
              <div className="value">BI × 基盤</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="card feature-panel">
            <div className="feature-grid">
              <div className="feature-box">
                <div className="label">よくある相談</div>
                <div className="feature-title">Power BI更新エラー</div>
              </div>
              <div className="feature-box">
                <div className="label">よくある相談</div>
                <div className="feature-title">使われないBI改善</div>
              </div>
              <div className="feature-box wide">
                <div className="label">提供価値</div>
                <div className="feature-title large">
                  原因特定だけで終わらず、
                  <br />
                  次にやることまで明確にします。
                </div>
              </div>
            </div>
          </div>

          <div className="card tags-panel">
            <div className="section-label">対応領域</div>
            <div className="tags">
              {techs.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container strengths-section">
        <div className="card-grid three">
          {strengths.map((item) => (
            <div key={item.title} className="card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="container services-section">
        <div className="section-header">
          <div>
            <div className="section-label">Services</div>
            <h2>提供サービス</h2>
          </div>
          <p>長文ではなく、何ができるかが一目で伝わるように整理しています。</p>
        </div>

        <div className="card-grid three">
          {services.map((service) => (
            <div key={service.title} className="card service-card">
              <div className="service-top">
                <span className="service-price">{service.price}</span>
              </div>
              <h3>{service.title}</h3>
              <div className="meta">想定工数：{service.time}</div>
              <p>{service.summary}</p>
              <div className="point-list">
                {service.points.map((point) => (
                  <div key={point} className="point">{point}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container flow-section">
        <div className="card flow-wrap">
          <div className="section-header">
            <div>
              <div className="section-label">Flow</div>
              <h2>進め方</h2>
            </div>
            <p>初回の相談から改善方針の提示まで、シンプルに3ステップです。</p>
          </div>

          <div className="card-grid three">
            {flow.map((item) => (
              <div key={item.no} className="card flow-card">
                <div className="flow-no">{item.no}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="container contact-section">
        <div className="card contact-wrap">
          <div className="contact-copy">
            <div className="section-label">Contact</div>
            <h2>まずは気軽にご相談ください</h2>
            <p>
              まだ課題がはっきりしていなくても大丈夫です。
              現状整理から一緒に進めます。
            </p>
          </div>

          <div className="contact-form">
            <div className="form-row">
              <input placeholder="会社名 / お名前" />
              <input placeholder="メールアドレス" />
            </div>
            <textarea placeholder="ご相談内容" />
            <button className="btn btn-primary">送信する</button>
          </div>
        </div>
      </section>
    </main>
  );
}
