'use client';

import { ProductCard } from './product-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Product } from '@/lib/shopify/types';

interface BestSellingProductsCarousel {
  bestSellingProducts: Product[];
}

export function BestSellingProductsCarousel({
  bestSellingProducts,
}: BestSellingProductsCarousel) {
  return (
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
        {bestSellingProducts.map((product) => (
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
  );
}
