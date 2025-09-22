import type { MetadataRoute } from 'next';
import { getCollections, getProducts } from '@/lib/shopify';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://zaninidigital.com.br';

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, changeFrequency: 'daily', priority: 1 },
    { url: `${baseUrl}/produtos`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${baseUrl}/categorias`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/sobre-nos`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const [collections, products] = await Promise.all([
    getCollections(),
    getProducts({ sortKey: 'CREATED_AT', reverse: true }),
  ]);

  const collectionRoutes: MetadataRoute.Sitemap = collections
    .filter((c) => !!c.path)
    .map((collection) => ({
      url: `${baseUrl}${collection.path}`,
      lastModified: new Date(collection.updatedAt),
      changeFrequency: 'weekly',
      priority: 0.7,
    }));

  const productRoutes: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/produto/${product.handle}`,
    lastModified: new Date(product.updatedAt),
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  return [...staticRoutes, ...collectionRoutes, ...productRoutes];
}


