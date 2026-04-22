import Link from 'next/link'
import { PageHero } from '@/shared/components/PageHero'

export default function ContactoPage() {
  return (
    <>
      <PageHero title="Contacto" intro="Conversemos sobre el rediseño estructural de su operación." />
      <section className="section"><div className="container"><p>Accione un diagnóstico ejecutivo y habilite ruta de transformación medible.</p><Link className="btn btn-primary" href="/auth/discovery">Solicitar diagnóstico estructural</Link></div></section>
    </>
  )
}
