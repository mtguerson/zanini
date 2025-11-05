'use client';

import { useState } from 'react';
import { ProductGallery } from '@/components/product-gallery';
import { ProductInfo } from '@/components/product-info';
import type { Product, ProductVariant } from '@/lib/shopify/types';

interface ProductDetailsProps {
  product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedVariant, setSelectedVariant] = useState<
    ProductVariant | undefined
  >(product.variants[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="order-1">
        <ProductGallery
          images={product.images}
          title={product.title}
          variantImage={selectedVariant?.image}
        />
      </div>

      <div className="order-2">
        <ProductInfo
          product={product}
          controlledVariant={selectedVariant}
          onVariantChange={setSelectedVariant}
        />
      </div>
    </div>
  );
}
