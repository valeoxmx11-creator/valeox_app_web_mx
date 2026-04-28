export interface CtaTrackingInput {
  source_page: string
  source_type: string
  destination: string
  related_lead_id?: string
  related_project_id?: string
}

export function normalizeCtaEvent(input: CtaTrackingInput) {
  return {
    ...input,
    occurred_at: new Date().toISOString(),
  }
}
