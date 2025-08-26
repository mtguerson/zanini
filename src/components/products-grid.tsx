'use client';

import { Product } from '@/lib/shopify/types';
import { ProductCard } from '@/components/product-card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SortAsc, SortDesc, Grid3X3, List, Filter } from 'lucide-react';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ProductsGridProps {
  products: Product[];
  currentSort: {
    sortKey: string;
    reverse: boolean;
  };
}

type ViewMode = 'grid' | 'list';
type SortOption = {
  key: string;
  label: string;
  reverse?: boolean;
};

const sortOptions: SortOption[] = [
  { key: 'CREATED_AT', label: 'Mais Recentes', reverse: true },
  { key: 'CREATED_AT', label: 'Mais Antigos', reverse: false },
  { key: 'TITLE', label: 'Nome A-Z', reverse: false },
  { key: 'TITLE', label: 'Nome Z-A', reverse: true },
  { key: 'PRICE', label: 'Menor Preço', reverse: false },
  { key: 'PRICE', label: 'Maior Preço', reverse: true },
];

export function ProductsGrid({ products, currentSort }: ProductsGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSortChange(sortKey: string, reverse: boolean) {
    const params = new URLSearchParams(searchParams);
    params.set('sortKey', sortKey);
    params.set('reverse', reverse.toString());
    router.push(`?${params.toString()}`);
  }

  function getCurrentSortLabel() {
    return (
      sortOptions.find(
        (option) =>
          option.key === currentSort.sortKey &&
          (option.reverse ?? false) === currentSort.reverse
      )?.label || 'Ordenar'
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mb-4">
          <div className="w-24 h-24 mx-auto bg-muted rounded-full flex items-center justify-center">
            <Grid3X3 className="w-12 h-12 text-muted-foreground" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">
          Nenhum produto encontrado
        </h3>
        <p className="text-muted-foreground mb-4">
          Tente ajustar os filtros para encontrar o que você procura.
        </p>
        <Button variant="outline" onClick={() => router.push('/produtos')}>
          Limpar Filtros
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Barra de Ferramentas */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <Badge variant="secondary" className="text-sm">
            {products.length} {products.length === 1 ? 'produto' : 'produtos'}
          </Badge>

          {/* Botão de Filtros Mobile */}
          <Button
            variant="outline"
            size="sm"
            className="lg:hidden"
            onClick={() => setShowMobileFilters(!showMobileFilters)}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
        </div>

        <div className="flex items-center gap-2">
          {/* Seletor de Ordenação */}
          <div className="relative">
            <select
              value={`${currentSort.sortKey}-${currentSort.reverse}`}
              onChange={(e) => {
                const [key, reverse] = e.target.value.split('-');
                handleSortChange(key, reverse === 'true');
              }}
              className="appearance-none bg-background border border-border rounded-md px-3 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions.map((option) => (
                <option
                  key={`${option.key}-${option.reverse}`}
                  value={`${option.key}-${option.reverse ?? false}`}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              {currentSort.reverse ? (
                <SortDesc className="w-4 h-4 text-muted-foreground" />
              ) : (
                <SortAsc className="w-4 h-4 text-muted-foreground" />
              )}
            </div>
          </div>

          {/* Seletor de Visualização */}
          <div className="flex border border-border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none hidden md:flex"
            >
              <Grid3X3 className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none hidden md:flex"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Grid de Produtos */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} viewMode={viewMode} />
        ))}
      </div>

      {/* Paginação Simples (pode ser expandida) */}
      {products.length >= 100 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground mb-4">
            Mostrando primeiros 100 produtos
          </p>
          <Button variant="outline">Carregar Mais Produtos</Button>
        </div>
      )}
    </div>
  );
}
