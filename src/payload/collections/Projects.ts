import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { useAsTitle: 'title' },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    { name: 'sector', type: 'text' },
    { name: 'company_size', type: 'text' },
    { name: 'solution_type', type: 'text' },
    { name: 'summary', type: 'textarea' },
    { name: 'main_problem', type: 'text' },
    { name: 'problem_description', type: 'textarea' },
    { name: 'diagnosis_summary', type: 'textarea' },
    { name: 'solution_description', type: 'textarea' },
    { name: 'tools_used', type: 'textarea' },
    { name: 'strategic_impact', type: 'textarea' },
    { name: 'cover_image', type: 'relationship', relationTo: 'media' },
    { name: 'gallery', type: 'relationship', relationTo: 'media', hasMany: true },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'draft',
      options: [
        { label: 'Borrador', value: 'draft' },
        { label: 'Publicado', value: 'published' },
      ],
    },
    { name: 'featured', type: 'checkbox', defaultValue: false },
    { name: 'visible', type: 'checkbox', defaultValue: true },
    { name: 'published_at', type: 'date' },
  ],
}
