import Link from 'next/link'
import { PageHero } from '@/shared/components/PageHero'

export default function InsightsPage() {
  return (
    <>
      <PageHero title="Insights" intro="Análisis y publicaciones administradas por CMS para dirección ejecutiva." />
      <section className="section"><div className="container"><p className="muted">No hay publicaciones aún. El equipo editorial puede crear posts en Admin.</p><Link href="/contacto">Solicitar contenido especializado</Link></div></section>
    </>
  )
}
