'use client';

import { Button, ArrowRight, Menu, X, cn, ThemeToggle } from '@mono/ui';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const menuItems = [
  { name: 'Home', href: '#home' }, 
  { name: 'Why Me?', href: '#why-me' },
  { name: 'Routine', href: '#routine' },
  { name: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false); // 메뉴 닫기
  };

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-colors duration-300',
          isScrolled || isMobileMenuOpen ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent' 
        )}
      >
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 z-50"> 
          <span className="font-semibold text-foreground">SH</span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              onClick={(e) => handleMenuClick(e, item.href)} 
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <Button
            variant="outline"
            size="sm"
            className="rounded-full px-4"
          >
            INVITE LINK <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>

        {/* 모바일 햄버거 버튼 */}
        <div className="md:hidden z-50 flex items-center gap-2"> {/* 모바일 메뉴 위에 보이도록 z-index 추가 */}
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-md transition-opacity duration-300 ease-in-out md:hidden',
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible' 
        )}
        onClick={() => setIsMobileMenuOpen(false)} 
        onKeyDown={(e) => e.key === 'Escape' && setIsMobileMenuOpen(false)}
        role="button"
        tabIndex={0}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
              onClick={(e) => handleMenuClick(e, item.href)}
            >
              {item.name}
            </Link>
          ))}
          <Button
            variant="outline"
            size="lg" // 모바일에서 더 크게
            className="rounded-full px-8 mt-4" // 마진 추가
          >
            INVITE LINK <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
      </div>
    </>
  );
}