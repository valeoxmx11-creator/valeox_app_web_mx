export type AggregationMode = 'sum' | 'average' | 'count' | 'percentage' | 'custom'

export interface KpiAggregate {
  label: string
  key: string
  value: number
  unit?: string
  context?: string
}

export interface ProjectSummary {
  id: string
  title: string
  slug: string
  sector?: string
  category?: string
  summary?: string
  featured?: boolean
}
