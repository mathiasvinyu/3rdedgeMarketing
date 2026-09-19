import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navigation',
      type: 'array',
      required: true,
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'path', type: 'text', required: true },
      ],
    },
    {
      name: 'contactInfo',
      type: 'group',
      fields: [
        { name: 'email', type: 'email', required: true, defaultValue: 'hello@3rdedge.co.za' },
        { name: 'location', type: 'text', defaultValue: 'South Africa' },
      ],
    },
    {
      name: 'footer',
      type: 'group',
      fields: [
        {
          name: 'positioningText',
          type: 'text',
          defaultValue: 'Clear thinking, honest design, solid engineering.',
        },
        {
          name: 'copyright',
          type: 'text',
          defaultValue: '© 3rd Edge Creative. All rights reserved.',
        },
      ],
    },
  ],
}
