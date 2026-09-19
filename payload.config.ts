import path from 'path'
import { fileURLToPath } from 'url'
import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

import { Pages } from './src/collections/Pages'
import { Services } from './src/collections/Services'
import { Capabilities } from './src/collections/Capabilities'
import { CaseStudies } from './src/collections/CaseStudies'
import { Tags } from './src/collections/Tags'
import { Posts } from './src/collections/Posts'
import { Topics } from './src/collections/Topics'
import { ContactInquiries } from './src/collections/ContactInquiries'
import { Media } from './src/collections/Media'
import { SiteSettings } from './src/globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '— 3rd Edge CMS',
    },
  },
  collections: [
    {
      slug: 'users',
      auth: true,
      access: {
        delete: () => true,
        update: () => true,
      },
      fields: [],
    },
    Pages,
    Services,
    Capabilities,
    CaseStudies,
    Tags,
    Posts,
    Topics,
    ContactInquiries,
    Media,
  ],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '3rd-edge-creative-super-secret-key-2026',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: 'file:./payload.db',
    },
  }),
})
