import { getCollections } from '@/lib/shopify';
import { CollectionsGrid } from '@/components/collections-grid';
import { Metadata } from 'next';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export const metadata: Metadata = {
  title: 'Categorias | Zanini',
  description:
    'Explore nossas categorias de produtos cuidadosamente selecionados.',
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  const collectionsWithoutAll = collections.slice(1);

  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl bg-gradient-to-r text-center from-primary to-sidebar-foreground bg-clip-text text-transparent font-bold">
              Nossas Categorias
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossas categorias cuidadosamente selecionadas para você
            </p>
          </div>

          <div className="w-full max-w-screen flex flex-col gap-4 items-center justify-center md:flex-row md:flex-wrap">
            {collectionsWithoutAll.map((collection) => (
              <div
                key={collection.handle}
                className="w-full min-w-[260px] max-w-xs md:flex-1"
              >
                <CollectionsGrid collections={[collection]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
