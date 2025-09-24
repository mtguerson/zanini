export function ProductsGridSkeleton() {
  return (
    <div className="space-y-6">
      {/* Barra de Ferramentas Skeleton */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-6 w-20 bg-muted rounded animate-pulse" />
          <div className="h-8 w-20 bg-muted rounded animate-pulse lg:hidden" />
        </div>
        <div className="flex items-center gap-2">
          <div className="h-8 w-32 bg-muted rounded animate-pulse" />
          <div className="h-8 w-16 bg-muted rounded animate-pulse" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="group relative w-full max-w-lg rounded-xl shadow-sm border overflow-hidden"
          >
            {/* Imagem Skeleton */}
            <div className="relative aspect-square overflow-hidden bg-muted animate-pulse">
              <div className="absolute top-2 right-2 z-10">
                <div className="h-6 w-16 bg-muted-foreground/20 rounded animate-pulse" />
              </div>
            </div>

            {/* Conteúdo Skeleton */}
            <div className="p-4 space-y-3">
              {/* Título Skeleton */}
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded animate-pulse" />
                <div className="h-4 bg-muted rounded w-3/4 animate-pulse" />
              </div>

              {/* Preço Skeleton */}
              <div className="flex items-center gap-2">
                <div className="h-6 w-24 bg-muted rounded animate-pulse" />
              </div>

              {/* Botão Skeleton */}
              <div className="h-10 bg-muted rounded-lg animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
