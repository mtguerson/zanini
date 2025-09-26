'use client';

import { Product } from '@/lib/shopify/types';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, X, Filter, Tag, DollarSign, Package } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface ProductsFiltersProps {
  products: Product[];
  currentFilters: {
    query: string;
    sortKey: string;
    reverse: boolean;
    category: string;
    minPrice: string;
    maxPrice: string;
  };
}

export function ProductsFilters({
  products,
  currentFilters,
}: ProductsFiltersProps) {
  const [searchQuery, setSearchQuery] = useState(currentFilters.query);
  const [minPrice, setMinPrice] = useState(currentFilters.minPrice);
  const [maxPrice, setMaxPrice] = useState(currentFilters.maxPrice);
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extrair categorias únicas dos produtos
  const categories = useMemo(() => {
    const allTags = products.flatMap((product) => product.tags);
    const uniqueTags = Array.from(new Set(allTags));
    return uniqueTags.filter((tag) => tag && tag.length > 0).sort();
  }, [products]);

  // Calcular faixa de preços
  const priceRange = useMemo(() => {
    const prices = products.map((product) =>
      parseFloat(product.priceRange.maxVariantPrice.amount)
    );
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [products]);

  function updateFilters(updates: Record<string, string>) {
    const params = new URLSearchParams(searchParams);

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value.trim()) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  }

  function handleSearch() {
    updateFilters({ query: searchQuery });
  }

  function handlePriceFilter() {
    updateFilters({ minPrice, maxPrice });
  }

  function handleCategoryFilter(category: string) {
    updateFilters({
      category: category === currentFilters.category ? '' : category,
    });
  }

  function clearAllFilters() {
    setSearchQuery('');
    setMinPrice('');
    setMaxPrice('');
    router.push('/produtos');
  }

  const hasActiveFilters =
    currentFilters.query ||
    currentFilters.category ||
    currentFilters.minPrice ||
    currentFilters.maxPrice;

  return (
    <div className="space-y-4">
      {/* Cabeçalho dos Filtros */}
      <div className="flex items-center justify-between">
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearAllFilters}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="w-4 h-4 mr-1" />
            Limpar
          </Button>
        )}
      </div>

      {/* Filtro de Preço */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          <Label className="text-sm font-medium">Faixa de Preço</Label>
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <Label className="text-xs text-muted-foreground">Mínimo</Label>
              <Input
                type="number"
                placeholder="R$ 0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                min={0}
                max={priceRange.max}
              />
            </div>
            <div>
              <Label className="text-xs text-muted-foreground">Máximo</Label>
              <Input
                type="number"
                placeholder={`R$ ${priceRange.max.toFixed(0)}`}
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                min={0}
                max={priceRange.max}
              />
            </div>
          </div>
          <Button size="sm" onClick={handlePriceFilter} className="w-full">
            Aplicar Filtro
          </Button>
          {(currentFilters.minPrice || currentFilters.maxPrice) && (
            <Badge variant="secondary" className="text-xs">
              Preço: R$ {currentFilters.minPrice || '0'} - R${' '}
              {currentFilters.maxPrice || '∞'}
            </Badge>
          )}
        </div>
        <div className="text-xs text-muted-foreground">
          Preços de R$ {priceRange.min.toFixed(0)} a R${' '}
          {priceRange.max.toFixed(0)}
        </div>
      </div>

      {/* Filtro de Categorias */}
      {categories.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-primary" />
            <Label className="text-sm font-medium">Categorias</Label>
          </div>
          <div className="space-y-2 max-h-48 overflow-y-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryFilter(category)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  currentFilters.category === category
                    ? 'bg-primary text-white'
                    : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="capitalize">{category}</span>
                  <Badge variant="outline" className="text-xs">
                    {products.filter((p) => p.tags.includes(category)).length}
                  </Badge>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Resumo dos Filtros Ativos */}
      {hasActiveFilters && (
        <div className="pt-4 border-t border-border">
          <div className="text-xs text-muted-foreground mb-2">
            Filtros ativos:
          </div>
          <div className="space-y-1">
            {currentFilters.query && (
              <Badge variant="secondary" className="text-xs mr-1">
                Busca: {currentFilters.query}
              </Badge>
            )}
            {currentFilters.category && (
              <Badge variant="secondary" className="text-xs mr-1">
                Categoria: {currentFilters.category}
              </Badge>
            )}
            {(currentFilters.minPrice || currentFilters.maxPrice) && (
              <Badge variant="secondary" className="text-xs mr-1">
                Preço: R$ {currentFilters.minPrice || '0'} - R${' '}
                {currentFilters.maxPrice || '∞'}
              </Badge>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
