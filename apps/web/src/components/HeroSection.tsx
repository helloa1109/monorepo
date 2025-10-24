'use client';

import { Button, ChevronDown, H1, Lead, DecorativeElement } from '@mono/ui';

export function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-background">

      <DecorativeElement
        className="absolute top-20 right-10 w-24 h-24 text-primary/30 transform rotate-12 z-0 animate-float"
      />
      <DecorativeElement
        className="absolute bottom-16 left-16 w-16 h-16 text-secondary transform -rotate-45 z-0 animate-float"
        style={{ animationDelay: '1s', animationDuration: '5s' }} 
      />

      {/* 중앙 컨텐츠 */}
      <div className="relative z-20 text-center px-6 text-foreground">
        <H1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight tracking-tight ">
          <span className="block">TEXT WRITE</span>
          <span className="block">HELLO</span>
          <Lead className="block text-lg md:text-xl font-medium mt-6 tracking-wide text-muted-foreground [&:not(:first-child)]:mt-6">
            HELLO WORLD
          </Lead>
        </H1>

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