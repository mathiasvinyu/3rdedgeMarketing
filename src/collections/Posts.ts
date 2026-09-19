import type { CollectionConfig } from 'payload'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'publishedAt', 'readTimeMinutes'],
    description: 'Insights editorial articles ("Notes from the work")',
  },
  access: {
    read: () => true,
  },
  fields: [
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
      name: 'publishedAt',
      type: 'date',
      required: true,
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'readTimeMinutes',
      type: 'number',
      required: true,
      min: 1,
      defaultValue: 4,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
      maxLength: 250,
      admin: {
        description: 'Plain-language summary of the article (max 250 chars)',
      },
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
    {
      name: 'keyTakeaways',
      type: 'array',
      fields: [
        {
          name: 'takeaway',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
    },
  ],
}
