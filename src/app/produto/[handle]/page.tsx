import { getProduct, getProductRecommendations } from '@/lib/shopify';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { ProductDetails } from '@/components/product-details';
import { ProductReviews } from '@/components/product-reviews';
import { RelatedProducts } from '@/components/related-products';

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

  const relatedProducts = await getProductRecommendations(product.id);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-16">
        <ProductDetails product={product} />

        <div className="border-t pt-16">
          <ProductReviews />
        </div>

        {relatedProducts.length > 0 && (
          <div className="border-t pt-16">
            <RelatedProducts products={relatedProducts} />
          </div>
        )}
      </div>
    </div>
  );
}
