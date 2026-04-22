import type { GlobalConfig } from 'payload'

const ctaFields = [
  { name: 'label', type: 'text' as const },
  { name: 'href', type: 'text' as const },
]

export const PublicPages: GlobalConfig = {
  slug: 'public-pages',
  label: 'Public Pages Content',
  fields: [
    {
      name: 'home',
      type: 'group',
      fields: [
        { name: 'hero_title', type: 'text' },
        { name: 'hero_subtitle', type: 'textarea' },
        { name: 'hero_support_text', type: 'textarea' },
        { name: 'hero_microcopy', type: 'textarea' },
        { name: 'primary_cta', type: 'group', fields: ctaFields },
        { name: 'secondary_cta', type: 'group', fields: ctaFields },
        { name: 'show_featured_kpis', type: 'checkbox', defaultValue: true },
        { name: 'show_featured_projects', type: 'checkbox', defaultValue: true },
      ],
    },
    { name: 'firma', type: 'json' },
    { name: 'metodo', type: 'json' },
    { name: 'soluciones', type: 'json' },
    { name: 'resultados', type: 'json' },
    { name: 'insights', type: 'json' },
    { name: 'contacto', type: 'json' },
    { name: 'encuestas', type: 'json' },
    { name: 'historial_clientes', type: 'json' },
    { name: 'estadisticas', type: 'json' },
    { name: 'gracias_copy', type: 'textarea' },
  ],
}
