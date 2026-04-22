import type { CollectionConfig } from 'payload'

export const KpiAggregates: CollectionConfig = {
  slug: 'kpi-aggregates',
  admin: { useAsTitle: 'label' },
  access: { create: () => false, delete: () => false },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'key', type: 'text', required: true, unique: true },
    { name: 'value', type: 'number', required: true },
    { name: 'unit', type: 'text' },
    { name: 'context', type: 'textarea' },
    { name: 'visible', type: 'checkbox', defaultValue: true },
    { name: 'last_recalculated_at', type: 'date' },
  ],
}
