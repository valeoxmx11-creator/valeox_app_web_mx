export interface LeadInput {
  company_size?: string
  main_interest?: string
  accepts_whatsapp?: boolean
  accepts_marketing?: boolean
}

export function scoreLead(input: LeadInput) {
  let score = 0
  if (input.company_size) score += 20
  if (input.main_interest) score += 20
  if (input.accepts_whatsapp) score += 15
  if (input.accepts_marketing) score += 10

  const priority = score >= 50 ? 'high' : score >= 25 ? 'medium' : 'low'

  return { score, priority }
}
