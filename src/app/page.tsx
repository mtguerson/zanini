import { Hero } from '@/components/hero';
import { BestSellingProducts } from '@/components/best-selling-products';
import { PromotionalShowcase } from '@/components/promotional-showcase';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PromotionalShowcase />
      <BestSellingProducts />
    </main>
  );
}
