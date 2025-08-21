import { getProducts } from '@/lib/shopify';
import { Badge } from './ui/badge';
import { TrendingUp } from 'lucide-react';
import { ProductCard } from './product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Card, CardContent } from './ui/card';

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

      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full max-w-screen"
      >
        <CarouselContent>
          {bestSellingProducts.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/5"
            >
              <div className="p-1">
                <ProductCard product={product} key={product.id} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
