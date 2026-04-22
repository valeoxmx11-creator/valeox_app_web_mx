import type { CollectionConfig } from 'payload'
import { recalculateKpisAfterImpactChange } from '@/payload/hooks/recalculateKpis'

export const ProjectImpacts: CollectionConfig = {
  slug: 'project-impacts',
  admin: { useAsTitle: 'kpi_label' },
  hooks: { afterChange: [recalculateKpisAfterImpactChange] },
  fields: [
    { name: 'project', type: 'relationship', relationTo: 'projects', required: true },
    { name: 'kpi_label', type: 'text', required: true },
    { name: 'kpi_key', type: 'text', required: true },
    { name: 'value', type: 'number', required: true },
    { name: 'unit', type: 'text' },
    { name: 'aggregation_mode', type: 'select', required: true, options: ['sum', 'average', 'count', 'percentage', 'custom'] },
    { name: 'context', type: 'textarea' },
    { name: 'visible', type: 'checkbox', defaultValue: true },
    { name: 'published', type: 'checkbox', defaultValue: false },
  ],
}
