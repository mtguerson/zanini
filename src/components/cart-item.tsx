'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { formatPrice } from '@/lib/utils';
import Image from 'next/image';
import { Minus, Plus, X } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { CartProduct } from '@/contexts/cart';

interface CartItemProps {
  item: CartProduct;
}

export function CartItem({ item }: CartItemProps) {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    useCart();

  const itemPrice = parseFloat(item.priceRange.maxVariantPrice.amount);
  const totalPrice = itemPrice * item.quantity;

  function handleIncrease() {
    increaseProductQuantity(item.lineId);
  }

  function handleDecrease() {
    if (item.quantity <= 1) {
      return removeProduct(item.lineId);
    }
    return decreaseProductQuantity(item.lineId);
  }

  return (
    <div className="flex gap-3 p-3 bg-card rounded-lg border">
      {/* Imagem do Produto */}
      <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-muted">
        <Image
          src={item.featuredImage.url}
          alt={item.featuredImage.altText || item.title}
          fill
          sizes="64px"
          className="object-cover"
          title={item.featuredImage.altText || item.title}
        />
        {item.customImageUrl && (
          <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full overflow-hidden border-2 border-background shadow-sm">
            <Image
              src={item.customImageUrl}
              alt="Imagem personalizada"
              fill
              sizes="24px"
              className="object-cover"
              title="Imagem personalizada"
            />
          </div>
        )}
      </div>

      {/* Informações do Produto */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm text-foreground line-clamp-2 leading-tight">
              {item.title}
            </h3>

            {/* Variantes disponíveis (se houver) */}
            {item.variants && item.variants.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-1">
                <Badge variant="secondary" className="text-xs">
                  {item.variants[0].title}
                </Badge>
              </div>
            )}

            <div className="flex flex-wrap gap-1 mt-1">
              {item.customImageUrl && (
                <Badge
                  variant="outline"
                  className="text-xs text-green-600 border-green-200"
                >
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    Imagem Personalizada
                  </span>
                </Badge>
              )}
              {item.customText?.trim() && (
                <Badge
                  variant="outline"
                  className="text-xs text-blue-600 border-blue-200"
                >
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    Texto: "{item.customText.trim()}"
                  </span>
                </Badge>
              )}
            </div>
          </div>

          {/* Botão Remover */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => removeProduct(item.lineId)}
            className="h-6 w-6 text-muted-foreground hover:text-destructive flex-shrink-0"
            aria-label="Remover item"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>

        {/* Preço e Controles de Quantidade */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {/* Controles de Quantidade */}
            <div className="flex items-center gap-1">
              <Button
                variant="outline"
                size="icon"
                onClick={handleDecrease}
                className="h-6 w-6"
                aria-label="Diminuir quantidade"
              >
                <Minus className="h-3 w-3" />
              </Button>

              <span className="w-8 text-center text-sm font-medium">
                {item.quantity}
              </span>

              <Button
                variant="outline"
                size="icon"
                onClick={handleIncrease}
                className="h-6 w-6"
                aria-label="Aumentar quantidade"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
          </div>

          {/* Preço */}
          <div className="text-right">
            {item.quantity > 1 && (
              <div className="text-xs text-muted-foreground">
                {formatPrice(itemPrice.toString())} cada
              </div>
            )}
            <div className="font-semibold text-sm text-primary">
              {formatPrice(totalPrice.toString())}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
