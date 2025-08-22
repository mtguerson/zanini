import { getProduct } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductGallery } from '@/components/product-gallery';
import { ProductInfo } from '@/components/product-info';

type ProductPageParams = {
  params: Promise<{
    handle: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageParams): Promise<Metadata> {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return {
      title: 'Produto não encontrado',
      description: 'O produto solicitado não foi encontrado.',
    };
  }

  return {
    title: `${product.title} | Zanini`,
    description: product.seo?.description || product.description,
    openGraph: {
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.description,
      images: [
        {
          url: product.featuredImage.url,
          width: product.featuredImage.width,
          height: product.featuredImage.height,
          alt: product.featuredImage.altText || product.title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.seo?.title || product.title,
      description: product.seo?.description || product.description,
      images: [product.featuredImage.url],
    },
  };
}

export default async function ProductPage({ params }: ProductPageParams) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="order-1">
            <ProductGallery images={product.images} title={product.title} />
          </div>

          <div className="order-2">
            <ProductInfo product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
