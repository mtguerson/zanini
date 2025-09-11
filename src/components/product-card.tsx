import { Product } from '@/lib/shopify/types';
import { ShoppingCart, Star } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  if (viewMode === 'list') {
    return (
      <div className="group relative w-full bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
        <div className="flex gap-4 p-4">
          {/* Imagem */}
          <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg bg-gray-50">
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText || product.title}
              fill
              quality={100}
              sizes="128px"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Conteúdo */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2 group-hover:text-primary transition-colors">
                <div className="gap-2 flex">
                  {product.title}
                  <Badge variant="outline">
                    <Star className="text-amber-500" fill="#e89d09" />
                    4.9
                  </Badge>
                </div>
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {product.description}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">
                  {formatPrice(product.priceRange.maxVariantPrice.amount)}
                </span>
                <Badge className="bg-primary text-white font-semibold text-xs">
                  15% OFF
                </Badge>
              </div>

              <Button
                asChild
                size="sm"
                className="bg-primary hover:bg-primary/90"
                disabled={!product.availableForSale}
              >
                <Link href={`/produto/${product.handle}`}>
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {product.availableForSale ? 'Ver Produto' : 'Indisponível'}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative w-full max-w-lg bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
      {/* Container da Imagem com Badge */}
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={product.featuredImage.url}
          alt={product.featuredImage.altText || product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          priority={false}
        />

        {/* Badge de Desconto */}
        <div className="absolute top-2 right-2 z-10">
          <Badge className="bg-primary text-white font-semibold p-1 text-xs shadow-md">
            15% OFF
          </Badge>
        </div>
      </div>

      {/* Conteúdo do Card */}
      <div className="p-4 space-y-3">
        {/* Título do Produto */}
        <div className="justify-between flex items-start">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
            {product.title}
          </h3>

          <Badge variant="outline">
            <Star className="text-amber-500" fill="#e89d09" />
            4.9
          </Badge>
        </div>

        {/* Preço */}
        <div className="flex items-center gap-2">
          <p className="text-sm text-muted-foreground">a partir de</p>
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.priceRange.minVariantPrice.amount)}
          </span>
        </div>

        {/* Botão Comprar Agora */}
        <Button
          asChild
          className="w-full bg-primary cursor-pointer hover:bg-primary/90 text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
          disabled={!product.availableForSale}
        >
          <Link href={`/produto/${product.handle}`}>
            <ShoppingCart className="w-4 h-4" />
            {product.availableForSale ? 'Comprar Agora' : 'Indisponível'}
          </Link>
        </Button>
      </div>
    </div>
  );
}
