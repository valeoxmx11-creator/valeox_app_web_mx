import { getFeaturedProjects } from '@/data/repositories/project.repository'

export async function getHomeFeaturedProjects() {
  return getFeaturedProjects()
}
