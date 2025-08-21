import { getProducts } from '@/lib/shopify';
import { Badge } from './ui/badge';
import { TrendingUp } from 'lucide-react';
import { ProductCard } from './product-card';

export async function BestSellingProducts() {
  const bestSellingProducts = await getProducts({ sortKey: 'BEST_SELLING' });

  return (
    <div className="flex flex-col mx-auto p-12 gap-4 max-w-7xl justify-center items-center cursor-pointer">
      <Badge
        variant="outline"
        className="flex items-center gap-2 border-primary text-base bg-primary/10 text-primary"
      >
        <TrendingUp />
        Destaques da Semana
      </Badge>
      <h2 className="text-3xl bg-gradient-to-r text-center from-primary to-sidebar-foreground bg-clip-text text-transparent font-bold">
        Nossos produtos mais vendidos
      </h2>
      <p className="text-muted-foreground text-center">
        Uma seleção especial dos nossos produtos que têm transformado a vida de
        milhares de pessoas.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {bestSellingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
