import { Hero } from '@/components/hero';
import { BestSellingProducts } from '@/components/best-selling-products';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BestSellingProducts />
    </main>
  );
}
