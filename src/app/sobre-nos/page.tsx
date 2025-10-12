import { Metadata } from 'next';
import { AboutHero } from '@/components/about-hero';
import { AboutStory } from '@/components/about-story';
import { AboutValues } from '@/components/about-values';
import { AboutTeam } from '@/components/about-team';
import { OurLocation } from '@/components/our-location';

export const metadata: Metadata = {
  title: 'Sobre Nós | Zanini',
  description:
    'Conheça a história, valores e compromissos da Zanini. Descubra quem somos e o que nos move.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <OurLocation />
    </div>
  );
}
