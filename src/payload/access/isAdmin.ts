import type { Access } from 'payload'

export const isAdmin: Access = ({ req: { user } }) => (user as { role?: string } | null)?.role === 'admin'
