'use client';

import { useEffect, useState } from 'react';

interface IntroLoaderProps {
  onComplete: () => void;
}

export function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const exitTimer = setTimeout(() => setIsExiting(true), 2500);
    const completeTimer = setTimeout(onComplete, 3300);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-800 ${
        isExiting ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Logo/Text */}
      <div className="mb-8 animate-in fade-in zoom-in-95 duration-700">
        <h1 className="text-7xl md:text-9xl font-black text-black tracking-tighter">
          WELCOME
        </h1>
      </div>

      {/* Spinner */}
      <div className="relative w-16 h-16 animate-in fade-in zoom-in-95 duration-700 delay-300">
        <div className="absolute inset-0 border-4 border-zinc-800 rounded-full" />
        <div className="absolute inset-0 border-4 border-transparent border-t-orange-400 rounded-full animate-spin" />
      </div>

      {/* Subtitle */}
      <p className="mt-8 text-sm md:text-base text-gray-500 tracking-widest animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
        LOADING.. SANGHYUK
      </p>
    </div>
  );
}