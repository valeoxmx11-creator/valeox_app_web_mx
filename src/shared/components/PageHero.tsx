export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="section section-soft">
      <div className="container">
        <p className="eyebrow">VALEOX</p>
        <h1>{title}</h1>
        <p>{intro}</p>
      </div>
    </section>
  )
}
