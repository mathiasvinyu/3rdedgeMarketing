import type { CollectionConfig } from 'payload'

export const ContactInquiries: CollectionConfig = {
  slug: 'contact-inquiries',
  admin: {
    useAsTitle: 'name',
    group: 'Inquiries',
    defaultColumns: ['name', 'email', 'organization', 'status', 'submittedAt'],
    description: 'Inquiries submitted through the website contact pathway',
  },
  access: {
    create: () => true, // Allows public form submission via API
    read: ({ req }) => Boolean(req.user), // Admin only
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      minLength: 2,
      maxLength: 100,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'organization',
      type: 'text',
      maxLength: 150,
    },
    {
      name: 'projectSummary',
      type: 'textarea',
      required: true,
      minLength: 10,
      maxLength: 2000,
    },
    {
      name: 'timeframe',
      type: 'text',
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'Reviewed', value: 'reviewed' },
        { label: 'Archived', value: 'archived' },
      ],
      required: true,
    },
    {
      name: 'submittedAt',
      type: 'date',
      defaultValue: () => new Date().toISOString(),
      admin: {
        readOnly: true,
      },
    },
  ],
}
