// shadcn/ui 표준 카드 컴포넌트 테스트용

import * as React from "react"

import { cn } from "../lib/utils" // @mono/ui 패키지 내부의 utils 사용

const Card2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm", // 기본 스타일 클래스
      className
    )}
    {...props}
  />
))
Card2.displayName = "Card2" // 컴포넌트 이름 변경

const CardHeader2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)} // 패딩 등 레이아웃 클래스
    {...props}
  />
))
CardHeader2.displayName = "CardHeader2" // 컴포넌트 이름 변경

const CardTitle2 = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => ( // children 추가
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  >
    {children} {/* children 렌더링 */}
  </h3>
))
CardTitle2.displayName = "CardTitle2"

const CardDescription2 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)} // 설명 텍스트 스타일
    {...props}
  />
))
CardDescription2.displayName = "CardDescription2" // 컴포넌트 이름 변경

const CardContent2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} /> // 콘텐츠 영역 패딩
))
CardContent2.displayName = "CardContent2" // 컴포넌트 이름 변경

const CardFooter2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)} // 푸터 영역 레이아웃
    {...props}
  />
))
CardFooter2.displayName = "CardFooter2" // 컴포넌트 이름 변경

export { Card2, CardHeader2, CardFooter2, CardTitle2, CardDescription2, CardContent2 }