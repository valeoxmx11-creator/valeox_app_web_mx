import Link from 'next/link'

export default async function ProyectoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <section className="section">
      <div className="container">
        <p className="eyebrow">Proyecto</p>
        <h1>{slug}</h1>
        <p className="muted">Detalle dinámico pendiente de integración con Payload (project + impacts).</p>
        <div className="grid grid-2">
          {['Sector', 'Categoría', 'Tamaño de empresa', 'Tipo de solución', 'Problema estructural', 'Diagnóstico / intervención', 'Solución implementada', 'Impacto medible', 'Impacto estratégico'].map((field) => (
            <article key={field} className="card"><h3>{field}</h3><p>Dato administrable por CMS.</p></article>
          ))}
        </div>
        <Link className="btn btn-primary" href="/contacto">Solicitar diagnóstico estructural</Link>
      </div>
    </section>
  )
}
