import React from 'react';

import { cn } from "../../../lib/utils" 

interface DecorativeElementProps extends React.SVGProps<SVGSVGElement> {}

export function DecorativeElement({ className, ...props }: DecorativeElementProps) {
  return (
    <svg
      width="200" // 기본 크기 설정
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)} 
      {...props}
    >
      <g clipPath="url(#clip0_104_26_decorative)"> 
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M107.143 0H92.8571V82.7556L34.3401 24.2385L24.2386 34.3401L82.7556 92.8571H0V107.143H82.7555L24.2386 165.66L34.3401 175.761L92.8571 117.244V200H107.143V117.244L165.66 175.761L175.761 165.66L117.244 107.143H200V92.8571H117.244L175.761 34.34L165.66 24.2385L107.143 82.7555V0Z"
          fill="url(#paint0_linear_104_26_decorative)" 
        />
      </g>
      <defs>
        <linearGradient id="paint0_linear_104_26_decorative" x1="20.5" y1="16" x2="100" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ACAAFF"/>
          <stop offset="1" stopColor="#C0E8FF"/>
        </linearGradient>
        <clipPath id="clip0_104_26_decorative"> 
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}