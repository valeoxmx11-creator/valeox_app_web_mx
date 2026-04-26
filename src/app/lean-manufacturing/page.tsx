import { PageHero } from '@/shared/components/PageHero'

const temas = ['5S', 'Kaizen', 'Kanban', 'Just In Time', 'Jidoka', 'Heijunka', 'SMED', 'Poka-Yoke', 'Value Stream Mapping']

export default function LeanManufacturingPage() {
  return (
    <>
      <PageHero title="Lean Manufacturing" intro="Sistema de herramientas para estabilidad, flujo y productividad sostenible." />
      <section className="section"><div className="container grid grid-3">{temas.map((tema) => (<article key={tema} className="card"><h3>{tema}</h3><p>Aplicación estructurada con enfoque en reducción de variabilidad y desperdicio.</p></article>))}</div></section>
    </>
  )
}
