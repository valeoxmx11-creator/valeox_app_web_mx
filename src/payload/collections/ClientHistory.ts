import type { CollectionConfig } from 'payload'

export const ClientHistory: CollectionConfig = {
  slug: 'client-history',
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'lead', type: 'relationship', relationTo: 'leads', required: true },
    { name: 'snapshot', type: 'json' },
    { name: 'internal_notes', type: 'textarea' },
  ],
}
