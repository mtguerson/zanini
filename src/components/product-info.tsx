'use client';

import { Product } from '@/lib/shopify/types';
import { formatPrice } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/hooks/use-cart';
import { ProductVariantSelector } from './product-variant-selector';

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const { addProduct, toggleCart } = useCart();

  // Calcula preço com desconto (exemplo: 15% off)
  const originalPrice = parseFloat(
    selectedVariant?.price.amount || product.priceRange.maxVariantPrice.amount
  );
  const discountedPrice = originalPrice * 0.85; // 15% de desconto
  const savings = originalPrice - discountedPrice;

  function handleQuantityChange(newQuantity: number) {
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  }

  function handleAddToCart() {
    if (!selectedVariant) return;

    const cartProduct = {
      ...product,
      quantity: quantity,
    };
    addProduct(cartProduct);

    toggleCart();
  }

  return (
    <div className="space-y-6">
      {/* Cabeçalho do Produto */}
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            {product.title}
          </h1>

          <Button
            variant="outline"
            size="icon"
            aria-label="Compartilhar produto"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>

        {/* Status de Disponibilidade */}
        <div className="flex items-center gap-2">
          <Badge
            variant={product.availableForSale ? 'outline' : 'destructive'}
            className="text-xs font-medium"
          >
            {product.availableForSale ? 'Em Estoque' : 'Esgotado'}
          </Badge>
          {product.tags.includes('new') && (
            <Badge variant="secondary" className="text-xs font-medium">
              Novidade
            </Badge>
          )}
          {savings > 0 && (
            <Badge className="bg-primary text-primary-foreground text-xs font-medium">
              15% OFF
            </Badge>
          )}
        </div>
      </div>

      {/* Preços */}
      <div className="space-y-2">
        <div className="flex items-baseline gap-3">
          <span className="text-3xl font-bold text-primary">
            {formatPrice(discountedPrice.toString())}
          </span>
          {savings > 0 && (
            <span className="text-lg text-muted-foreground line-through">
              {formatPrice(originalPrice.toString())}
            </span>
          )}
        </div>
        {savings > 0 && (
          <p className="text-sm text-green-600 font-medium">
            Você economiza {formatPrice(savings.toString())}
          </p>
        )}
        <p className="text-sm text-muted-foreground">
          ou 12x de {formatPrice((discountedPrice / 12).toString())} sem juros
        </p>
      </div>

      {/* Descrição Curta */}
      {product.description && (
        <div className="space-y-2">
          <p className="text-muted-foreground leading-relaxed">
            {product.description.slice(0, 200)}
            {product.description.length > 200 && '...'}
          </p>
        </div>
      )}

      {/* Seletor de Variantes */}
      {product.options.length > 0 && (
        <ProductVariantSelector
          product={product}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />
      )}

      {/* Quantidade */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">
          Quantidade
        </label>
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 1}
            aria-label="Diminuir quantidade"
          >
            -
          </Button>
          <span className="w-12 text-center font-medium">{quantity}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleQuantityChange(quantity + 1)}
            aria-label="Aumentar quantidade"
          >
            +
          </Button>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="space-y-3">
        <Button
          onClick={handleAddToCart}
          disabled={!product.availableForSale}
          className="w-full h-12 text-base font-semibold"
          size="lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Adicionar ao carrinho
        </Button>

        <Button
          variant="outline"
          className="w-full h-12 text-base font-semibold"
          size="lg"
        >
          Comprar Agora
        </Button>
      </div>

      {/* Benefícios */}
      <div className="space-y-3 pt-4 border-t border-border">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Truck className="w-5 h-5 text-primary" />
          <span>Frete grátis para compras acima de R$ 199</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Shield className="w-5 h-5 text-primary" />
          <span>Garantia de 1 ano contra defeitos de fabricação</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <RotateCcw className="w-5 h-5 text-primary" />
          <span>Troca grátis em até 30 dias</span>
        </div>
      </div>

      {/* Tags do Produto */}
      {product.tags.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-foreground">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
