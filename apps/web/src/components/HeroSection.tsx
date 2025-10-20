'use client';

import { Button , ChevronDown} from '@mono/ui';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-10" />

      {/* Enhanced decorative floating elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[15%] w-48 h-48 rounded-full bg-cyan-400/30 blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] right-[20%] w-56 h-56 rounded-full bg-blue-500/25 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[25%] left-[35%] w-52 h-52 rounded-full bg-purple-500/20 blur-[110px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[15%] right-[30%] w-40 h-40 rounded-full bg-yellow-300/15 blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-44 h-44 rounded-full bg-pink-400/20 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-20 text-center px-6">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight">
          <span className="block">TS+NEXT</span>
          <span className="block">TEXT WRITE</span>
          <span className="block text-base md:text-lg font-normal mt-6 tracking-widest">HELLO WORLD</span>
        </h1>
        <Button
          variant="outline"
          className="rounded-full border-2 border-white/40 hover:border-cyan-400 hover:bg-cyan-400/10 text-white px-10 py-7 mt-12 text-base transition-all duration-300"
        >
          sang hyuk
        </Button>
        <div className="mt-24">
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white/40" />
        </div>
      </div>
    </section>
  );
}