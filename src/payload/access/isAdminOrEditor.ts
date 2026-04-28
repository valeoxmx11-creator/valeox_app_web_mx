import type { Access } from 'payload'

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (!user) return false
  return ['admin', 'editor'].includes((user as { role?: string }).role ?? '')
}
