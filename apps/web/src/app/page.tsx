'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { SecondSection } from '@/components/SecondSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <SecondSection/>
    </main>
  );
}
