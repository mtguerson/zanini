'use client';

import { Product, ProductVariant } from '@/lib/shopify/types';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useState } from 'react';

interface ProductVariantSelectorProps {
  product: Product;
  selectedVariant: ProductVariant | undefined;
  onVariantChange: (variant: ProductVariant) => void;
}

export function ProductVariantSelector({
  product,
  selectedVariant,
  onVariantChange,
}: ProductVariantSelectorProps) {
  const [selectedOptions, setSelectedOptions] = useState<
    Record<string, string>
  >(
    selectedVariant?.selectedOptions.reduce(
      (acc, option) => ({
        ...acc,
        [option.name]: option.value,
      }),
      {}
    ) || {}
  );

  // Encontra a variante baseada nas opções selecionadas
  function findVariantBySelectedOptions(options: Record<string, string>) {
    return product.variants.find((variant) =>
      variant.selectedOptions.every(
        (option) => options[option.name] === option.value
      )
    );
  }

  function handleOptionChange(optionName: string, optionValue: string) {
    const newSelectedOptions = {
      ...selectedOptions,
      [optionName]: optionValue,
    };

    setSelectedOptions(newSelectedOptions);

    // Encontra e seleciona a variante correspondente
    const newVariant = findVariantBySelectedOptions(newSelectedOptions);
    if (newVariant) {
      onVariantChange(newVariant);
    }
  }

  // Verifica se uma opção está disponível
  function isOptionAvailable(optionName: string, optionValue: string) {
    const testOptions = {
      ...selectedOptions,
      [optionName]: optionValue,
    };

    const variant = findVariantBySelectedOptions(testOptions);
    return variant?.availableForSale ?? false;
  }

  if (!product.options || product.options.length === 0) {
    return null;
  }

  return (
    <div className="space-y-6">
      {product.options.map((option) => (
        <div key={option.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">
              {option.name}
            </label>
            <span className="text-sm text-muted-foreground">
              {selectedOptions[option.name] || 'Selecione'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {option.values.map((value) => {
              const isSelected = selectedOptions[option.name] === value;
              const isAvailable = isOptionAvailable(option.name, value);

              return (
                <Button
                  key={value}
                  variant={isSelected ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => handleOptionChange(option.name, value)}
                  disabled={!isAvailable}
                  className={cn(
                    'relative transition-all duration-200',
                    isSelected && 'ring-2 ring-primary/20',
                    !isAvailable && 'opacity-50 cursor-not-allowed'
                  )}
                  aria-pressed={isSelected}
                  aria-label={`${option.name}: ${value}`}
                >
                  {value}
                  {!isAvailable && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-destructive rotate-45" />
                    </div>
                  )}
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Informações da Variante Selecionada */}
      {selectedVariant && (
        <div className="p-4 bg-muted/50 rounded-lg space-y-2">
          <h4 className="font-medium text-foreground">Variante Selecionada</h4>
          <div className="text-sm text-muted-foreground space-y-1">
            <p>
              <strong>SKU:</strong> {selectedVariant.id.split('/').pop()}
            </p>
            <p>
              <strong>Disponibilidade:</strong>{' '}
              <span
                className={cn(
                  'font-medium',
                  selectedVariant.availableForSale
                    ? 'text-green-600'
                    : 'text-destructive'
                )}
              >
                {selectedVariant.availableForSale
                  ? 'Em estoque'
                  : 'Indisponível'}
              </span>
            </p>
            {selectedVariant.selectedOptions.length > 0 && (
              <div>
                <strong>Opções:</strong>{' '}
                {selectedVariant.selectedOptions.map((option, index) => (
                  <span key={option.name}>
                    {option.name}: {option.value}
                    {index < selectedVariant.selectedOptions.length - 1 && ', '}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
