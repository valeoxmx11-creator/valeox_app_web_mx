import type { GlobalConfig } from 'payload'

export const StatisticsView: GlobalConfig = {
  slug: 'statistics-view',
  label: 'Estadísticas (Read Model Config)',
  fields: [
    { name: 'intro_copy', type: 'textarea' },
    { name: 'show_kpi_breakdown', type: 'checkbox', defaultValue: true },
  ],
}
