import Link from 'next/link'
import { PageHero } from '@/shared/components/PageHero'

export default function SolucionesPage() {
  return (
    <>
      <PageHero title="Soluciones" intro="Dos líneas estructurales: Automatización Inteligente y Lean Manufacturing." />
      <section className="section"><div className="container grid grid-2"><article className="card"><h2>Automatización Inteligente</h2><p>Integración de decisiones, flujos y control digital por madurez operativa.</p><Link href="/automatizacion">Explorar automatización</Link></article><article className="card"><h2>Lean Manufacturing</h2><p>Arquitectura de mejora operativa para eliminar desperdicio y elevar rendimiento.</p><Link href="/lean-manufacturing">Explorar Lean</Link></article></div></section>
    </>
  )
}
