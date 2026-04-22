import { getExecutiveStats } from '@/data/queries/statistics.query'

export async function buildAdminStatistics() {
  return getExecutiveStats()
}
