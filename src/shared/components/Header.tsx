import Link from 'next/link'

const links = [
  ['Inicio', '/'],
  ['Firma', '/firma'],
  ['Método', '/metodo'],
  ['Soluciones', '/soluciones'],
  ['Resultados', '/resultados'],
  ['Insights', '/insights'],
  ['Contacto', '/contacto'],
]

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" aria-label="VALEOX inicio">
          <strong>VALEOX</strong>
        </Link>
        <nav className="nav-links">
          {links.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
