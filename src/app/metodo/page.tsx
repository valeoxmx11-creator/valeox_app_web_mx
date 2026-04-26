import { PageHero } from '@/shared/components/PageHero'

const fases = ['Valorar', 'Arquitectar', 'Limpiar', 'Estructurar Digitalmente', 'Optimizar', 'Expandir']

export default function MetodoPage() {
  return (
    <>
      <PageHero title="Método VALEOX" intro="Un marco de seis fases para rediseñar operaciones con criterio de ingeniería." />
      <section className="section"><div className="container grid grid-2">{fases.map((fase) => (<article key={fase} className="card"><h2>{fase}</h2><p><strong>Propósito:</strong> definir objetivo estructural de la fase.</p><p><strong>Qué se analiza:</strong> procesos, restricciones, variabilidad y datos.</p><p><strong>Qué se diseña:</strong> decisiones, flujo, gobierno y automatización.</p><p><strong>Resultado esperado:</strong> capacidad operativa estable y medible.</p></article>))}</div></section>
    </>
  )
}
