'use client';

import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
    </main>
  );
}
