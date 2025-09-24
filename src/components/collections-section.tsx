import { getCollections } from '@/lib/shopify';
import { CollectionsGrid } from '@/components/collections-grid';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Package } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import { Badge } from './ui/badge';

export async function CollectionsSection() {
  const collections = await getCollections();

  const collectionsWithoutAll = collections.slice(1);

  const featuredCollections = collectionsWithoutAll.slice(0, 6);

  return (
    <div className="flex flex-col mx-auto p-12 gap-4 max-w-7xl justify-center items-center">
      <Badge
        variant="outline"
        className="flex items-center gap-2 border-primary text-base bg-primary/10 text-primary"
      >
        <Package />
        Categorias de sucesso
      </Badge>
      <h2 className="text-3xl bg-gradient-to-r text-center from-primary to-sidebar-foreground bg-clip-text text-transparent font-bold">
        Nossas Categorias
      </h2>
      <p className="text-muted-foreground text-center">
        Explore nossas categorias de produtos que têm transformado a vida de
        milhares de pessoas.
      </p>

      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full max-w-screen"
      >
        <CarouselContent>
          {featuredCollections.map((collection) => (
            <CarouselItem
              key={collection.handle}
              className="md:basis-1/2 lg:basis-1/3 py-2"
            >
              <CollectionsGrid collections={[collection]} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="cursor-pointer" />
        <CarouselNext className="cursor-pointer" />
      </Carousel>

      <Button className="mt-6 group" size="lg" asChild>
        <Link href="/produtos" title="Ver todos os produtos">
          Ver todos os produtos
          <ArrowRight className="w-4 h-4 cursor-pointer group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    </div>
  );
}
