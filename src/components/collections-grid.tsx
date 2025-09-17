'use client';

import { Collection } from '@/lib/shopify/types';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowRight, Package } from 'lucide-react';

interface CollectionsGridProps {
  collections: Collection[];
}

export function CollectionsGrid({ collections }: CollectionsGridProps) {
  if (!collections || collections.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
        <p className="text-muted-foreground">Nenhuma categoria encontrada</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {collections.map((collection) => (
        <Link key={collection.handle} href={collection.path}>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full">
            <CardContent className="p-6 h-full flex flex-col">
              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>

                {collection.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                    {collection.description}
                  </p>
                )}

                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Categoria
                  </Badge>
                  {collection.handle === '' && (
                    <Badge variant="outline" className="text-xs">
                      Todos os produtos
                    </Badge>
                  )}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Explorar produtos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
}
