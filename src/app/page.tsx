import Link from 'next/link'
import { getPrimaryKpis } from '@/domains/kpi-aggregates/service'
import { getHomeFeaturedProjects } from '@/domains/projects/service'
import { KpiSection } from '@/shared/components/KpiSection'

export default async function HomePage() {
  const [{ primary, all }, featuredProjects] = await Promise.all([getPrimaryKpis(), getHomeFeaturedProjects()])

  return (
    <>
      <section className="section">
        <div className="container">
          <p className="eyebrow">VALEOX</p>
          <h1>El sistema correcto determina el resultado.</h1>
          <p>La mayoría de las operaciones no fallan por falta de esfuerzo. Fallan por sistemas mal diseñados.</p>
          <p>VALEOX diseña arquitecturas operativas que transforman operaciones manuales, inestables y dependientes en sistemas estructurados, inteligentes y escalables.</p>
          <p><strong>El problema no es la gente. El problema es el sistema.</strong></p>
          <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap' }}>
            <Link className="btn btn-primary" href="/auth/discovery">Solicitar diagnóstico estructural</Link>
            <Link className="btn btn-secondary" href="/metodo">Explorar el método VALEOX</Link>
          </div>
        </div>
      </section>

      <KpiSection primary={primary} all={all} />

      <section className="section">
        <div className="container">
          <p className="eyebrow">Resultados destacados</p>
          <h2>Proyectos publicados con impacto medible</h2>
          <div className="grid grid-3">
            {featuredProjects.length ? featuredProjects.map((project) => (
              <article key={project.id} className="card">
                <h3>{project.title}</h3>
                <p className="muted">{project.summary ?? 'Sin resumen.'}</p>
                <Link href={`/proyectos/${project.slug}`}>Ver proyecto</Link>
              </article>
            )) : <p className="muted">No hay proyectos destacados publicados por el equipo editorial.</p>}
          </div>
        </div>
      </section>

      <section className="section section-soft"><div className="container"><h2>Diagnóstico del problema estructural</h2><p>Las operaciones dependen de héroes, no de sistemas. Esta dependencia limita escala, control y previsibilidad.</p></div></section>
      <section className="section"><div className="container"><h2>Autoridad técnica VALEOX</h2><p>No intervenimos personas. Diseñamos estructuras para rendimiento sostenido.</p></div></section>
      <section className="section section-soft"><div className="container"><h2>Método VALEOX</h2><p>Valorar, Arquitectar, Limpiar, Estructurar Digitalmente, Optimizar y Expandir.</p></div></section>
      <section className="section"><div className="container"><h2>Rediseñe su sistema</h2><Link className="btn btn-primary" href="/contacto">Hablar con VALEOX</Link></div></section>
    </>
  )
}
