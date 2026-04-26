import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="section">
      <div className="container">
        <h1>Página no encontrada</h1>
        <p className="muted">La ruta solicitada no está disponible.</p>
        <Link href="/" className="btn btn-secondary">Volver al inicio</Link>
      </div>
    </section>
  )
}
