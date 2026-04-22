import { getPublishedKpiAggregates } from '@/data/repositories/kpi.repository'

export async function getPrimaryKpis() {
  const all = await getPublishedKpiAggregates()
  return {
    primary: all.slice(0, 4),
    all,
  }
}
