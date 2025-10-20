import Image from 'next/image';
import heroBanner from '../../public/promotional/banner.webp';

export function HeroBanner() {
  return (
    <div className="relative w-full aspect-[16/9] overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroBanner}
        alt="Hero Banner"
        fill
        priority
        quality={100}
        className="object-cover"
      />
      
      {/* Overlay para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/10"></div>
    </div>
  );
}
