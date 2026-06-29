import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';
import { conditions } from '@/lib/conditions';
import { articles } from '@/lib/articles';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.baseUrl;
    const now = new Date();

    const conditionRoutes: MetadataRoute.Sitemap = conditions.map((condition) => ({
        url: `${base}/recursos/${condition.slug}`,
        lastModified: now,
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
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${base}/agendar`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${base}/recursos`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.85,
        },
        {
            url: `${base}/articulos`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.85,
        },
        {
            url: `${base}/contacto`,
            lastModified: now,
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: `${base}/charlas`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        ...conditionRoutes,
        ...articleRoutes,
    ];
}
