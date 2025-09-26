import type { Metadata } from 'next';
import { ProductCard } from '@/components/product-card';
import { defaultSort, sorting } from '@/lib/constants';
import { getCollectionProducts } from '@/lib/shopify';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function CategoryPage({
  params,
  searchParams,
}: {
  params: Promise<{ collection: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { sort } = (await searchParams) as { [key: string]: string };
  const { collection } = await params;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getCollectionProducts({
    collection,
    sortKey,
    reverse,
  });

  return (
    <>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-2">
          {collection.includes('-')
            ? collection
                .split('-')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')
            : collection.charAt(0).toUpperCase() + collection.slice(1)}
        </h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
}
