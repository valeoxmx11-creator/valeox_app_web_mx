import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  fields: [
    { name: 'whatsapp_number', type: 'text' },
    { name: 'contact_email', type: 'email' },
    {
      name: 'social_links',
      type: 'array',
      fields: [
        { name: 'platform', type: 'select', options: ['linkedin', 'instagram', 'facebook', 'youtube'] },
        { name: 'url', type: 'text' },
        { name: 'visible', type: 'checkbox', defaultValue: true },
      ],
    },
  ],
}
