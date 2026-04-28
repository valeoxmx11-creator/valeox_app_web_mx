import Link from 'next/link'
import { getPrimaryKpis } from '@/domains/kpi-aggregates/service'
import { getHomeFeaturedProjects } from '@/domains/projects/service'
import { PageHero } from '@/shared/components/PageHero'

export default async function ResultadosPage() {
  const [{ all }, projects] = await Promise.all([getPrimaryKpis(), getHomeFeaturedProjects()])

  return (
    <>
      <PageHero title="Resultados" intro="Evidencia consolidada por proyectos publicados, categorías y contribuciones KPI." />
      <section className="section"><div className="container"><h2>Contexto KPI</h2>{all.length ? <div className="grid grid-3">{all.map((kpi) => <article key={kpi.key} className="card"><h3>{kpi.label}</h3><p>{kpi.value} {kpi.unit}</p></article>)}</div> : <p className="muted">Sin KPI agregados publicados por el momento.</p>}</div></section>
      <section className="section section-soft"><div className="container"><h2>Proyectos</h2>{projects.length ? <div className="grid grid-2">{projects.map((project) => <article className="card" key={project.id}><h3>{project.title}</h3><p>{project.summary}</p><Link href={`/proyectos/${project.slug}`}>Abrir proyecto</Link></article>)}</div> : <p className="muted">No existen proyectos visibles para el público.</p>}</div></section>
    </>
  )
}
