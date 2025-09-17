import { getCollections } from '@/lib/shopify';
import { CollectionsGrid } from '@/components/collections-grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Categorias | Zanini',
  description:
    'Explore nossas categorias de produtos cuidadosamente selecionados.',
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  const collectionsWithoutAll = collections.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">
              Nossas Categorias +{' '}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore nossas categorias cuidadosamente selecionadas para você
            </p>
          </div>

          <CollectionsGrid collections={collectionsWithoutAll} />
        </div>
      </div>
    </div>
  );
}
