import { Hero } from '@/components/hero';
import { BestSellingProducts } from '@/components/best-selling-products';
import { PromotionalShowcase } from '@/components/promotional-showcase';
import { TestImonials } from '@/components/testimonials';
import { CollectionsSection } from '@/components/collections-section';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PromotionalShowcase />
      <BestSellingProducts />
      <CollectionsSection />
      <TestImonials />
    </main>
  );
}
