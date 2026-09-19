import type { CollectionConfig } from 'payload'

export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    group: 'Work & Capabilities',
    description: 'Real client case studies proving capability without abstract stat bars',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'clientName',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
    {
      name: 'quietFailureDiagnosed',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The subtle failure identified (e.g. form drop-offs, slow mobile performance)',
      },
    },
    {
      name: 'solutionImplemented',
      type: 'textarea',
      required: true,
      admin: {
        description: 'The unified design and engineering resolution',
      },
    },
    {
      name: 'verifiedOutcome',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Real, verifiable outcome delivered',
      },
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      defaultValue: 1,
    },
  ],
}
