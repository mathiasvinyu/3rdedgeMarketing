# Data Model: Four-Page Website Rebuild (Payload CMS Headless Schema)

**Feature**: [001-website-rebuild](spec.md)  
**Date**: 2026-09-19 (Updated)  

This data model defines the headless content architecture implemented in **Payload CMS 3.x**. Collections are organized into logical WordPress-like groups (Post Types and Taxonomies) using Payload's `admin.group` configuration.

---

## 1. Post Types & Taxonomies Architecture

```
Payload Admin Navigation
├── Group: Content / Editorial
│   ├── Posts (Insights)          [Post Type]
│   └── Topics                    [Taxonomy for Posts]
├── Group: Work & Capabilities
│   ├── Services                  [Post Type]
│   ├── Capabilities              [Taxonomy for Services]
│   ├── Case Studies              [Post Type]
│   └── Tags                      [Taxonomy for Case Studies]
├── Group: Pages
│   └── Pages                     [Singleton / Page Content Records]
├── Group: Inquiries
│   └── Contact Inquiries         [Submissions]
├── Group: Media
│   └── Media                     [Asset Uploads]
└── Globals (Settings)
    └── Site Settings             [Navigation & Global Brand Tokens]
```

---

## 2. Collection Schemas

### 2.1 Posts (Insights) — Collection: `posts`
*Admin Group: "Content"*

```typescript
export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    group: 'Content',
    defaultColumns: ['title', 'publishedAt', 'readTimeMinutes'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'publishedAt', type: 'date', required: true, defaultValue: () => new Date() },
    { name: 'readTimeMinutes', type: 'number', required: true, min: 1, defaultValue: 4 },
    { name: 'excerpt', type: 'textarea', required: true, maxLength: 250 },
    { name: 'content', type: 'richText', required: true }, // Lexical editor
    {
      name: 'keyTakeaways',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'takeaway', type: 'text', required: true }],
    },
    {
      name: 'topics',
      type: 'relationship',
      relationTo: 'topics',
      hasMany: true,
      admin: { description: 'Select taxonomies associated with this insight' },
    },
  ],
}
```

### 2.2 Topics (Taxonomy) — Collection: `topics`
*Admin Group: "Content"*

```typescript
export const Topics: CollectionConfig = {
  slug: 'topics',
  admin: {
    useAsTitle: 'name',
    group: 'Content',
  },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'description', type: 'textarea' },
  ],
}
```

---

### 2.3 Services — Collection: `services`
*Admin Group: "Work & Capabilities"*

```typescript
export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'title',
    group: 'Work & Capabilities',
    defaultColumns: ['number', 'title', 'order'],
  },
  fields: [
    {
      name: 'number',
      type: 'text',
      required: true,
      admin: { description: 'Two-digit identifier: 01, 02, 03, 04, 05' },
      validate: (val) => (/^\d{2}$/.test(val) ? true : 'Must be a 2-digit string (e.g. 01)'),
    },
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'summary', type: 'textarea', required: true },
    {
      name: 'capabilities',
      type: 'relationship',
      relationTo: 'capabilities',
      hasMany: true,
      required: true,
      admin: { description: 'Specific capability deliverable tags' },
    },
    { name: 'order', type: 'number', required: true, defaultValue: 1 },
  ],
}
```

### 2.4 Capabilities (Taxonomy) — Collection: `capabilities`
*Admin Group: "Work & Capabilities"*

```typescript
export const Capabilities: CollectionConfig = {
  slug: 'capabilities',
  admin: {
    useAsTitle: 'label',
    group: 'Work & Capabilities',
  },
  fields: [
    { name: 'label', type: 'text', required: true, unique: true }, // e.g. "User research", "Core Web Vitals"
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
}
```

---

### 2.5 Case Studies — Collection: `case-studies`
*Admin Group: "Work & Capabilities"*

```typescript
export const CaseStudies: CollectionConfig = {
  slug: 'case-studies',
  admin: {
    useAsTitle: 'title',
    group: 'Work & Capabilities',
  },
  fields: [
    { name: 'clientName', type: 'text', required: true },
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true, index: true },
    { name: 'quietFailureDiagnosed', type: 'textarea', required: true },
    { name: 'solutionImplemented', type: 'textarea', required: true },
    { name: 'verifiedOutcome', type: 'textarea', required: true },
    { name: 'featuredImage', type: 'upload', relationTo: 'media', required: false },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true,
    },
    { name: 'order', type: 'number', required: true, defaultValue: 1 },
  ],
}
```

### 2.6 Tags (Taxonomy) — Collection: `tags`
*Admin Group: "Work & Capabilities"*

```typescript
export const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name',
    group: 'Work & Capabilities',
  },
  fields: [
    { name: 'name', type: 'text', required: true, unique: true },
    { name: 'slug', type: 'text', required: true, unique: true },
  ],
}
```

---

### 2.7 Pages — Collection: `pages`
*Admin Group: "Pages"*

```typescript
export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    group: 'Pages',
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'slug', type: 'select', required: true, unique: true, options: ['home', 'about', 'services', 'insights'] },
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'headline', type: 'text', required: true },
        { name: 'subhead', type: 'textarea' },
        { name: 'ctaLabel', type: 'text' },
        { name: 'ambientCanvasEnabled', type: 'checkbox', defaultValue: false },
      ],
    },
    {
      name: 'sections',
      type: 'blocks',
      blocks: [
        /* DiagnosisNarrativeBlock, ProcessWorkflowBlock, OriginStoryBlock, OperationalMomentsBlock, ClosingCTABlock */
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'metaTitle', type: 'text' },
        { name: 'metaDescription', type: 'textarea' },
      ],
    },
  ],
}
```

---

### 2.8 Contact Inquiries — Collection: `contact-inquiries`
*Admin Group: "Inquiries"*

```typescript
export const ContactInquiries: CollectionConfig = {
  slug: 'contact-inquiries',
  admin: {
    useAsTitle: 'name',
    group: 'Inquiries',
    defaultColumns: ['name', 'email', 'organization', 'status', 'submittedAt'],
  },
  access: {
    create: () => true, // Public endpoint allows creation
    read: ({ req }) => Boolean(req.user), // Only authenticated admins can read
    update: ({ req }) => Boolean(req.user),
    delete: ({ req }) => Boolean(req.user),
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'organization', type: 'text' },
    { name: 'projectSummary', type: 'textarea', required: true },
    { name: 'timeframe', type: 'text' },
    {
      name: 'status',
      type: 'select',
      options: ['new', 'reviewed', 'archived'],
      defaultValue: 'new',
      required: true,
    },
    { name: 'submittedAt', type: 'date', defaultValue: () => new Date() },
  ],
}
```

---

### 2.9 Media — Collection: `media`
*Admin Group: "Media"*

```typescript
export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'public/media',
    imageSizes: [
      { name: 'thumbnail', width: 400, height: 300, position: 'centre' },
      { name: 'feature', width: 1200, height: 800, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [
    { name: 'alt', type: 'text', required: true },
  ],
}
```

---

## 3. Globals: Site Settings (`site-settings`)

```typescript
export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  admin: {
    group: 'Settings',
  },
  fields: [
    {
      name: 'navigation',
      type: 'array',
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
        { name: 'positioningText', type: 'text', defaultValue: 'Clear thinking, honest design, solid engineering.' },
        { name: 'copyright', type: 'text', defaultValue: '© 3rd Edge Creative. All rights reserved.' },
      ],
    },
  ],
}
```
