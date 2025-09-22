'use client';

import { Collection } from '@/lib/shopify/types';
import Link from 'next/link';
import Image from 'next/image';
import { Package } from 'lucide-react';

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
    <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-12 lg:grid-cols-3 gap-4">
      {collections.map((collection) => (
        <Link
          key={collection.handle} 
          href={collection.path}
          className="group relative overflow-hidden rounded-2xl hover:scale-105 transition-transform duration-300"
          title={`Ver coleção ${collection.title}`}
        >
          {/* Imagem da Collection */}
          <div className="relative aspect-[2/3] w-full overflow-hidden">
            <Image 
              src={collection.image?.url || "/placeholder.svg"} 
              alt={collection.title} 
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 16vw"
              title={collection.title}
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
          </div>
          
          {/* Botão/Label com o nome */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-center py-3 px-4 rounded-xl transition-colors duration-200 shadow-lg">
              {collection.title.toUpperCase()}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
