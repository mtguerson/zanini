import { getCollections } from '@/lib/shopify';
import { CollectionsGrid } from '@/components/collections-grid';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export async function CollectionsSection() {
  const collections = await getCollections();

  const collectionsWithoutAll = collections.slice(1);

  const featuredCollections = collectionsWithoutAll.slice(0, 6);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Nossas Categorias
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra produtos cuidadosamente selecionados em nossas categorias
            exclusivas
          </p>
        </div>

        <CollectionsGrid collections={featuredCollections} />

        {collections.length > 6 && (
          <div className="text-center mt-12">
            <Link href="/categorias">
              <Button size="lg" className="group">
                Ver todas as categorias
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
