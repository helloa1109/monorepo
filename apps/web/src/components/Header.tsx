'use client';

import { Button,ArrowRight } from '@mono/ui';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between bg-black/50 backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
          <span className="text-lg font-bold">H</span>
        </div>
      </div>
      <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold rounded-full px-6 shadow-lg shadow-cyan-400/20">
        테스트 버튼 <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </header>
  );
}