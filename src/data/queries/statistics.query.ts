export interface ExecutiveStats {
  totalLeads: number
  qualifiedLeads: number
  projectsPublished: number
  projectsFeatured: number
}

export async function getExecutiveStats(): Promise<ExecutiveStats> {
  return {
    totalLeads: 0,
    qualifiedLeads: 0,
    projectsPublished: 0,
    projectsFeatured: 0,
  }
}
