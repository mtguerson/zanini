import type { Metadata } from 'next';
import { ProductCard } from '@/components/product-card';
import { defaultSort, sorting } from '@/lib/constants';
import { getProducts } from '@/lib/shopify';

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { sort, q: searchValue } = (await searchParams) as {
    [key: string]: string;
  };
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;
  const products = await getProducts({ sortKey, reverse, query: searchValue });
  const resultsText = products.length > 1 ? 'resultados' : 'resultado';

  return (
    <>
      {searchValue ? (
        <div className="container mx-auto px-4 md:py-8 py-6 md:px-6 lg:px-8">
          {products.length === 0
            ? `Nenhum resultado encontrado para "${searchValue}", tente outra pesquisa`
            : `Mostrando ${products.length} ${resultsText} para "${searchValue}"`}
        </div>
      ) : null}
      {products.length > 0 ? (
        <div className="container mx-auto px-4 md:px-6 lg:px-8 mb-12">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}
