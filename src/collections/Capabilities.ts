import type { CollectionConfig } from 'payload'

export const Capabilities: CollectionConfig = {
  slug: 'capabilities',
  admin: {
    useAsTitle: 'label',
    group: 'Work & Capabilities',
    description: 'Taxonomy for service deliverables & capabilities (e.g. User research, Accessibility audits)',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
    },
  ],
}
