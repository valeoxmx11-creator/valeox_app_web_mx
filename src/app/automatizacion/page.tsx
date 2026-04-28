import { PageHero } from '@/shared/components/PageHero'

const niveles = ['Básico', 'Intermedio', 'Avanzado', 'Experto / AI']

export default function AutomatizacionPage() {
  return (
    <>
      <PageHero title="Automatización Inteligente" intro="Diseño por niveles de madurez para estandarizar, integrar y escalar decisiones." />
      <section className="section"><div className="container grid grid-2">{niveles.map((nivel) => (<article key={nivel} className="card"><h2>{nivel}</h2><p>Definición de objetivos, procesos objetivo, arquitectura digital y control de calidad operacional.</p></article>))}</div></section>
    </>
  )
}
