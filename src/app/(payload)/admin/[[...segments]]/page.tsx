import { PayloadAdminPage } from '@payloadcms/next/views'
import config from '@/payload/payload'

export default function AdminPage() {
  return PayloadAdminPage({ config })
}
