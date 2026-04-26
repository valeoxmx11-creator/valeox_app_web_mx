import type { CollectionConfig } from 'payload'

export const Leads: CollectionConfig = {
  slug: 'leads',
  admin: { useAsTitle: 'email' },
  fields: [
    { name: 'full_name', type: 'text' },
    { name: 'email', type: 'email', required: true, unique: true },
    { name: 'phone', type: 'text' },
    { name: 'company', type: 'text' },
    { name: 'position', type: 'text' },
    { name: 'company_size', type: 'text' },
    { name: 'sector', type: 'text' },
    { name: 'main_problem', type: 'textarea' },
    { name: 'main_interest', type: 'text' },
    { name: 'accepts_whatsapp', type: 'checkbox' },
    { name: 'accepts_marketing', type: 'checkbox' },
    { name: 'accepts_privacy', type: 'checkbox', required: true },
    { name: 'source_page', type: 'text' },
    { name: 'source_type', type: 'text' },
    { name: 'landing_url', type: 'text' },
    { name: 'lead_score', type: 'number', defaultValue: 0 },
    { name: 'lead_priority', type: 'select', options: ['low', 'medium', 'high'], defaultValue: 'medium' },
    { name: 'lead_status', type: 'select', defaultValue: 'new', options: ['new', 'qualified', 'contacted', 'in_conversation', 'diagnosis_scheduled', 'proposal_sent', 'won', 'lost'] },
    { name: 'internal_notes', type: 'textarea' },
    { name: 'related_project', type: 'relationship', relationTo: 'projects' },
  ],
}
