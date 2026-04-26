export interface ImpactInput {
  kpi_key: string
  value: number
  aggregation_mode: 'sum' | 'average' | 'count' | 'percentage' | 'custom'
}

export function aggregateImpacts(impacts: ImpactInput[]) {
  const grouped = new Map<string, ImpactInput[]>()

  for (const impact of impacts) {
    const list = grouped.get(impact.kpi_key) ?? []
    list.push(impact)
    grouped.set(impact.kpi_key, list)
  }

  return Array.from(grouped.entries()).map(([kpi_key, list]) => {
    const mode = list[0]?.aggregation_mode ?? 'sum'
    const sum = list.reduce((acc, cur) => acc + cur.value, 0)
    const value = mode === 'average' || mode === 'percentage' ? sum / list.length : mode === 'count' ? list.length : sum
    return { kpi_key, value, mode }
  })
}
