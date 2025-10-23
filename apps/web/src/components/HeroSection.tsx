// File: apps/web/src/components/HeroSection.tsx
'use client';

import { Button , ChevronDown} from '@mono/ui';

export function HeroSection() {
  return (
    // 배경을 기본 --background 색상 (흰색)으로 설정 (body 기본값 따름)
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 배경 그라데이션 제거 또는 라이트 테마에 맞게 수정 (여기서는 제거) */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100 z-10" /> */}

      {/* Enhanced decorative floating elements */}
      <div className="absolute inset-0 z-0 opacity-70"> {/* 라이트 테마에서 잘 보이도록 투명도 조정 */}
        {/* 장식 요소 색상을 오렌지 계열 및 라이트 테마에 맞게 조정 */}
        <div className="absolute top-[20%] left-[15%] w-48 h-48 rounded-full bg-orange-500/20 blur-[100px] animate-pulse" />
        <div className="absolute top-[30%] right-[20%] w-56 h-56 rounded-full bg-amber-500/15 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[25%] left-[35%] w-52 h-52 rounded-full bg-yellow-500/10 blur-[110px] animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute top-[15%] right-[30%] w-40 h-40 rounded-full bg-red-500/10 blur-[90px] animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-[35%] right-[25%] w-44 h-44 rounded-full bg-orange-400/15 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* 텍스트 색상을 기본 foreground 색상 (검은색)으로 변경 */}
      <div className="relative z-20 text-center px-6 text-foreground">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-tight tracking-tight ">
          <span className="block">TS+NEXT</span>
          <span className="block">TEXT WRITE</span>
          {/* 부제목 색상을 muted-foreground (회색)로 변경 */}
          <span className="block text-base md:text-lg font-normal mt-6 tracking-widest text-muted-foreground">HELLO WORLD</span>
        </h1>
        <Button
          variant="outline"
          // 버튼 스타일을 라이트 테마 및 오렌지 primary 색상에 맞게 수정
          className="rounded-full border-2 border-border hover:border-primary hover:bg-primary/10 text-foreground px-10 py-7 mt-12 text-base transition-all duration-300"
        >
          sang hyuk
        </Button>
        <div className="mt-24">
          {/* 아이콘 색상을 muted-foreground (회색)로 변경 */}
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-muted-foreground" />
        </div>
      </div>
    </section>
  );
}