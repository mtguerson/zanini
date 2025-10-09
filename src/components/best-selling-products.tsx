import { getProducts } from '@/lib/shopify';
import { Badge } from './ui/badge';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';
import { BestSellingProductsCarousel } from './best-selling-products-carousel';

export async function BestSellingProducts() {
  const bestSellingProducts = await getProducts({ sortKey: 'BEST_SELLING' });

  const top10BestSellingProducts = bestSellingProducts.slice(0, 10);

  return (
    <div className="flex flex-col mx-auto p-12 gap-4 max-w-7xl justify-center items-center">
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

      <BestSellingProductsCarousel
        bestSellingProducts={top10BestSellingProducts}
      />

      <Button className="mt-6 group text-white" size="lg" asChild>
        <Link href="/produtos" title="Ver todos os produtos">
          Ver todos os produtos
          <ArrowRight className="w-4 h-4 cursor-pointer group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
