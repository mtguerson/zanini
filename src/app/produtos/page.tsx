import { ProductsFilters } from '@/components/products-filters';
import { ProductsFiltersSkeleton } from '@/components/products-filters-skeleton';
import { ProductsGrid } from '@/components/products-grid';
import { ProductsGridSkeleton } from '@/components/products-grid-skeleton';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
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
    page?: string;
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
    page = '1',
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

  // Configurações de paginação
  const productsPerPage = 9;
  const currentPage = parseInt(page);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  // Função para gerar URL com parâmetros
  function createPageUrl(pageNumber: number) {
    const searchParams = new URLSearchParams();

    if (query) searchParams.set('query', query);
    if (sortKey !== 'CREATED_AT') searchParams.set('sortKey', sortKey);
    if (reverse !== 'true') searchParams.set('reverse', reverse);
    if (category) searchParams.set('category', category);
    if (minPrice) searchParams.set('minPrice', minPrice);
    if (maxPrice) searchParams.set('maxPrice', maxPrice);
    if (pageNumber > 1) searchParams.set('page', pageNumber.toString());

    return `/produtos?${searchParams.toString()}`;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-8 py-8">
        {/* Cabeçalho da Página */}
        <div className="mb-4">
          <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Todos os Produtos
          </h1>
          <p className="text-muted-foreground text-lg">
            Explore nossa coleção completa de{' '}
            <strong>{filteredProducts.length} produtos </strong>
            de comunicação visual
            {totalPages > 1 && (
              <span className="block text-sm mt-1">
                Página {currentPage} de {totalPages} • Mostrando{' '}
                {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)}{' '}
                de <strong>{filteredProducts.length} produtos </strong>
              </span>
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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

          <div className="lg:col-span-3">
            <Suspense fallback={<ProductsGridSkeleton />}>
              <ProductsGrid
                products={paginatedProducts}
                currentSort={{ sortKey, reverse: reverse === 'true' }}
              />
            </Suspense>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-center">
            <Pagination>
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious href={createPageUrl(currentPage - 1)} />
                  </PaginationItem>
                )}

                {currentPage > 3 && (
                  <>
                    <PaginationItem>
                      <PaginationLink href={createPageUrl(1)}>1</PaginationLink>
                    </PaginationItem>
                    {currentPage > 4 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                  </>
                )}

                {(() => {
                  const pages = [];
                  const startPage = Math.max(1, currentPage - 2);
                  const endPage = Math.min(totalPages, currentPage + 2);

                  for (let i = startPage; i <= endPage; i++) {
                    pages.push(
                      <PaginationItem key={i}>
                        <PaginationLink
                          href={createPageUrl(i)}
                          isActive={i === currentPage}
                        >
                          {i}
                        </PaginationLink>
                      </PaginationItem>
                    );
                  }

                  return pages;
                })()}

                {currentPage < totalPages - 2 && (
                  <>
                    {currentPage < totalPages - 3 && (
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                    )}
                    <PaginationItem>
                      <PaginationLink href={createPageUrl(totalPages)}>
                        {totalPages}
                      </PaginationLink>
                    </PaginationItem>
                  </>
                )}

                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext href={createPageUrl(currentPage + 1)} />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </div>
  );
}
