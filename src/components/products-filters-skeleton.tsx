import { Filter, Search, DollarSign, Tag, Package } from 'lucide-react';

export function ProductsFiltersSkeleton() {
  return (
    <div className="space-y-6">
      {/* Cabeçalho dos Filtros */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-primary" />
          <div className="h-6 w-16 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Seção de Busca */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Search className="w-4 h-4 text-primary" />
          <div className="h-5 w-28 bg-muted rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="flex-1 h-10 bg-muted rounded animate-pulse" />
          <div className="h-10 w-10 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Seção de Filtro de Preço */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-primary" />
          <div className="h-5 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="h-4 w-12 bg-muted rounded animate-pulse mb-1" />
              <div className="h-10 bg-muted rounded animate-pulse" />
            </div>
            <div>
              <div className="h-4 w-12 bg-muted rounded animate-pulse mb-1" />
              <div className="h-10 bg-muted rounded animate-pulse" />
            </div>
          </div>
          <div className="h-9 bg-muted rounded animate-pulse" />
        </div>
        <div className="h-4 w-32 bg-muted rounded animate-pulse" />
      </div>

      {/* Seção de Categorias */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4 text-primary" />
          <div className="h-5 w-20 bg-muted rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          {/* Simular algumas categorias */}
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className="w-full px-3 py-2 rounded-md">
              <div className="flex items-center justify-between">
                <div
                  className="h-4 bg-muted rounded animate-pulse"
                  style={{ width: `${60 + Math.random() * 40}%` }}
                />
                <div className="h-5 w-8 bg-muted rounded-full animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção de Disponibilidade */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Package className="w-4 h-4 text-primary" />
          <div className="h-5 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="h-4 w-20 bg-muted rounded animate-pulse" />
            <div className="h-5 w-8 bg-muted rounded-full animate-pulse" />
          </div>
          <div className="flex items-center justify-between">
            <div className="h-4 w-16 bg-muted rounded animate-pulse" />
            <div className="h-5 w-6 bg-muted rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
