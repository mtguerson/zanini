'use client';

import { Product } from '@/lib/shopify/types';
import { ProductCard } from '@/components/product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

interface RelatedProductsProps {
  products: Product[];
}

export function RelatedProducts({ products }: RelatedProductsProps) {
  if (!products.length) return null;

  return (
    <>
      <h2 className="text-2xl font-bold">Produtos Relacionados</h2>
      <p className="text-muted-foreground">
        Veja outros produtos que podem ser de seu interesse.
      </p>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-screen"
      >
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className="md:basis-1/2 lg:basis-1/4 py-2"
            >
              <ProductCard product={product} key={product.id} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>
    </>
  );
}
