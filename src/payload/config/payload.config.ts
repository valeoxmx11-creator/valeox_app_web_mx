import path from 'path'
import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { fileURLToPath } from 'url'
import { Users } from '@/payload/collections/Users'
import { Media } from '@/payload/collections/Media'
import { Leads } from '@/payload/collections/Leads'
import { Projects } from '@/payload/collections/Projects'
import { ProjectImpacts } from '@/payload/collections/ProjectImpacts'
import { KpiAggregates } from '@/payload/collections/KpiAggregates'
import { Categories } from '@/payload/collections/Categories'
import { Posts } from '@/payload/collections/Posts'
import { CtaEvents } from '@/payload/collections/CtaEvents'
import { Surveys } from '@/payload/collections/Surveys'
import { ClientHistory } from '@/payload/collections/ClientHistory'
import { SiteSettings } from '@/payload/globals/SiteSettings'
import { PublicPages } from '@/payload/globals/PublicPages'
import { StatisticsView } from '@/payload/globals/StatisticsView'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname, '../../') },
  },
  editor: lexicalEditor(),
  collections: [Users, Media, Leads, Projects, ProjectImpacts, KpiAggregates, Categories, Posts, CtaEvents, Surveys, ClientHistory],
  globals: [SiteSettings, PublicPages, StatisticsView],
  db: postgresAdapter({
    pool: { connectionString: process.env.DATABASE_URI || '' },
  }),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, '../../payload-types.ts') },
  cors: [process.env.CORS_ORIGIN || 'http://localhost:3000'],
  csrf: [process.env.CSRF_TRUSTED_ORIGINS || 'http://localhost:3000'],
})
