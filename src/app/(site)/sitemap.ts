import type { MetadataRoute } from 'next'
import { getPayloadClient } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://3rdedge.co.za'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  try {
    const payload = await getPayloadClient()
    const posts = await payload.find({
      collection: 'posts',
      where: {
        status: { equals: 'published' },
      },
      limit: 100,
    })

    const postRoutes: MetadataRoute.Sitemap = posts.docs.map((post) => ({
      url: `${siteUrl}/insights/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.publishedAt || Date.now()),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))

    return [...staticRoutes, ...postRoutes]
  } catch {
    return staticRoutes
  }
}
