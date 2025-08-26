import { ProductsFilters } from '@/components/products-filters';
import { ProductsFiltersSkeleton } from '@/components/products-filters-skeleton';
import { ProductsGrid } from '@/components/products-grid';
import { ProductsGridSkeleton } from '@/components/products-grid-skeleton';
import { getProducts } from '@/lib/shopify';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Todos os Produtos | Zanini',
  description:
    'Explore nossa coleção completa de produtos de comunicação visual.',
  openGraph: {
    title: 'Todos os Produtos | Zanini',
    description:
      'Explore nossa coleção completa de produtos de comunicação visual.',
    type: 'website',
  },
};

interface ProductsPageProps {
  searchParams: Promise<{
    query?: string;
    sortKey?: string;
    reverse?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
  }>;
}

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = await searchParams;

  const {
    query = '',
    sortKey = 'CREATED_AT',
    reverse = 'true',
    category = '',
    minPrice = '',
    maxPrice = '',
  } = params;

  // Buscar produtos com os parâmetros de filtro
  const products = await getProducts({
    query: query || undefined,
    sortKey: sortKey as any,
    reverse: reverse === 'true',
  });

  // Filtrar produtos por preço se especificado
  const filteredProducts = products.filter((product) => {
    const price = parseFloat(product.priceRange.maxVariantPrice.amount);

    if (minPrice && price < parseFloat(minPrice)) return false;
    if (maxPrice && price > parseFloat(maxPrice)) return false;
    if (category && !product.tags.includes(category)) return false;

    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-12">
        {/* Cabeçalho da Página */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Todos os Produtos
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore nossa coleção completa de {products.length} produtos de
            comunicação visual
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filtros Laterais */}
          <div className="lg:col-span-1">
            <Suspense fallback={<ProductsFiltersSkeleton />}>
              <ProductsFilters
                products={products}
                currentFilters={{
                  query,
                  sortKey,
                  reverse: reverse === 'true',
                  category,
                  minPrice,
                  maxPrice,
                }}
              />
            </Suspense>
          </div>

          {/* Grid de Produtos */}
          <div className="lg:col-span-3">
            <Suspense fallback={<ProductsGridSkeleton />}>
              <ProductsGrid
                products={filteredProducts}
                currentSort={{ sortKey, reverse: reverse === 'true' }}
              />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
