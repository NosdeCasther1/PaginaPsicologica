import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { conditions } from '@/lib/conditions';
import { articles } from '@/lib/articles';
import { servicePages } from '@/lib/services';

const SITE_UPDATED_AT = new Date('2026-07-23');

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;

  const serviceRoutes: MetadataRoute.Sitemap = servicePages.map((service) => ({
    url: `${base}/servicios/${service.slug}`,
    lastModified: SITE_UPDATED_AT,
    changeFrequency: 'monthly',
    priority: 0.85,
  }));

  const conditionRoutes: MetadataRoute.Sitemap = conditions.map((condition) => ({
    url: `${base}/recursos/${condition.slug}`,
    lastModified: SITE_UPDATED_AT,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${base}/articulos/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'monthly',
    priority: 0.75,
  }));

  return [
    {
      url: base,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${base}/servicios`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/agendar`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/recursos`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${base}/articulos`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${base}/contacto`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${base}/charlas`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/privacidad`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/terminos`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${base}/confidencialidad`,
      lastModified: SITE_UPDATED_AT,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    ...serviceRoutes,
    ...conditionRoutes,
    ...articleRoutes,
  ];
}
