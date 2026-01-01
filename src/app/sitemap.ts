import { MetadataRoute } from 'next';
import { siteConfig } from '@/siteConfig';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/payments',
    '/process',
    '/about',
    '/contact',
    '/insights',
    '/privacy',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
