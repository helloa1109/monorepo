'use client';

import { useEffect, useState } from 'react';

import { FAQSection } from '@/components/FAQSection';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { IntroLoader } from '@/components/IntroLoader';
import { SecondSection } from '@/components/SecondSection';
// 필요할 경우 주석해제
// import { SponsorBanner } from '@/components/SponsorBanner';
import { ThirdSection } from '@/components/ThirdSection';

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (showIntro) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setIsLoaded(true);
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showIntro]);

  return (
    <>
      {/* 인트로 화면 */}
      {showIntro && <IntroLoader onComplete={() => setShowIntro(false)} />}

      {/* 메인 콘텐츠 */}
      <main
        className={`min-h-screen bg-background text-foreground overflow-x-hidden transition-opacity duration-1000 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />
        <HeroSection />
        <SecondSection />
        <ThirdSection />
        {/* 필요할경우: SponsorBanner 추가 */}
        {/* <SponsorBanner/> */}
        <FAQSection />
      </main>
    </>
  );
}