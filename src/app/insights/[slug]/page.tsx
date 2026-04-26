export default async function PostDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return <section className="section"><div className="container"><h1>{slug}</h1><p className="muted">Contenido del post dinámico desde Payload CMS.</p></div></section>
}
