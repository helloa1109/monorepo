'use client';

import { Button , ChevronDown} from '@mono/ui';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0 opacity-70"> 
        <div className="absolute top-[20%] left-[15%] w-48 h-48 rounded-full bg-orange-500/20 blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] right-[20%] w-56 h-56 rounded-full bg-amber-500/15 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[25%] left-[35%] w-52 h-52 rounded-full bg-yellow-500/10 blur-[110px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[15%] right-[30%] w-40 h-40 rounded-full bg-red-500/10 blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-44 h-44 rounded-full bg-orange-400/15 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-20 text-center px-6 text-foreground">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight ">
          <span className="block">PLODE</span>
          <span className="block">IT Community</span>
          <span className="block text-base md:text-lg font-normal mt-6 tracking-widest text-muted-foreground">HELLO WORLD</span>
        </h1>
        <Button
          variant="outline"
          className="rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 text-foreground px-10 py-7 mt-12 text-base transition-all duration-300"
        >
          INVITE LINK
        </Button>
        <div className="mt-24">
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}