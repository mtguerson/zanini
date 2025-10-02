'use client';

import { Image as ImageType } from '@/lib/shopify/types';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ProductGalleryProps {
  images: ImageType[];
  title: string;
  variantImage?: ImageType;
}

export function ProductGallery({
  images,
  title,
  variantImage,
}: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const displayImages = useMemo(() => {
    if (!variantImage) return images;
    const withoutDup = images.filter((img) => img.url !== variantImage.url);
    return [
      {
        ...variantImage,
        altText: variantImage.altText || `${title} - Variante`,
      },
      ...withoutDup,
    ];
  }, [images, variantImage, title]);

  useEffect(() => {
    if (variantImage) {
      setSelectedImageIndex(0);
    }
  }, [variantImage?.url]);

  if (!displayImages || displayImages.length === 0) {
    return (
      <div className="w-full aspect-square bg-muted rounded-lg flex items-center justify-center">
        <p className="text-muted-foreground">Imagem não disponível</p>
      </div>
    );
  }

  const currentImage = displayImages[selectedImageIndex];
  const hasMultipleImages = displayImages.length > 1;

  function handlePreviousImage() {
    setSelectedImageIndex((prev) =>
      prev === 0 ? displayImages.length - 1 : prev - 1
    );
  }

  function handleNextImage() {
    setSelectedImageIndex((prev) =>
      prev === displayImages.length - 1 ? 0 : prev + 1
    );
  }

  return (
    <div className="space-y-4">
      <div className="relative group">
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
          <Image
            src={currentImage.url}
            alt={currentImage.altText || title}
            fill
            className="transition-transform duration-300 group-hover:scale-105"
            priority
            title={currentImage.altText || title}
          />

          {hasMultipleImages && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={handlePreviousImage}
                aria-label="Imagem anterior"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={handleNextImage}
                aria-label="Próxima imagem"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
              {selectedImageIndex + 1} / {displayImages.length}
            </div>
          )}
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2">
        {displayImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImageIndex(index)}
            className={cn(
              'relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200',
              selectedImageIndex === index
                ? 'border-primary ring-2 ring-primary/20'
                : 'border-border hover:border-primary/50'
            )}
            aria-label={`Visualizar imagem ${index + 1}`}
          >
            <Image
              src={image.url}
              alt={image.altText || `${title} - Imagem ${index + 1}`}
              fill
              sizes="64px"
              className="object-cover"
              title={image.altText || `${title} - Imagem ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
