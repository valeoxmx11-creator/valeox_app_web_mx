import type { CollectionConfig } from 'payload'

export const CtaEvents: CollectionConfig = {
  slug: 'cta-events',
  admin: { useAsTitle: 'destination' },
  fields: [
    { name: 'source_page', type: 'text' },
    { name: 'source_type', type: 'text' },
    { name: 'destination', type: 'text', required: true },
    { name: 'lead', type: 'relationship', relationTo: 'leads' },
    { name: 'project', type: 'relationship', relationTo: 'projects' },
    { name: 'whatsapp_redirected', type: 'checkbox', defaultValue: false },
  ],
}
