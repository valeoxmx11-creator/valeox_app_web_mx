import type { CollectionConfig } from 'payload'

export const Surveys: CollectionConfig = {
  slug: 'surveys',
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'full_name', type: 'text' },
    { name: 'email', type: 'email' },
    { name: 'answers', type: 'json' },
    { name: 'source_page', type: 'text' },
    { name: 'source_type', type: 'text' },
    { name: 'qualification_result', type: 'text' },
  ],
}
