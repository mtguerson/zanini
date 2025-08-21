import { Product } from '@/lib/shopify/types';
import { ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { formatPrice } from '@/lib/utils';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group mt-4 relative w-full max-w-lg bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
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
        <h3 className="font-semibold text-gray-900 text-sm leading-tight line-clamp-2 min-h-[2.5rem] group-hover:text-primary transition-colors">
          {product.title}
        </h3>

        {/* Preço */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {formatPrice(product.priceRange.maxVariantPrice.amount)}
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
