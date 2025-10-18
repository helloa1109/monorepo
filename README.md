# Mono - Monorepo Project

A modern monorepo project built with Next.js, TypeScript, Tailwind CSS, and Turborepo.

## 🏗️ Project Structure

```
mono/
├── apps/
│   ├── web/                    # Next.js 웹 애플리케이션
│   │   ├── src/
│   │   │   ├── app/           # App Router 페이지
│   │   │   ├── components/    # 페이지별 컴포넌트
│   │   │   ├── lib/           # 유틸리티 함수
│   │   │   └── store/         # Zustand 스토어
│   │   └── package.json
│   └── storybook/             # Storybook 컴포넌트 문서화
│       ├── stories/           # 컴포넌트 스토리
│       ├── .storybook/        # Storybook 설정
│       └── package.json
├── packages/
│   ├── ui/                    # 공통 UI 컴포넌트
│   │   ├── src/
│   │   │   ├── components/    # Button, Card, Input 컴포넌트
│   │   │   └── index.ts
│   │   └── package.json
│   ├── core/                  # 비즈니스 로직
│   │   ├── src/
│   │   │   ├── api/           # API 클라이언트
│   │   │   ├── utils/         # 공통 유틸리티
│   │   │   └── index.ts
│   │   └── package.json
│   ├── types/                 # 공통 타입 정의
│   │   ├── src/
│   │   │   └── index.ts
│   │   └── package.json
│   └── config/                # 공통 설정
├── tools/
│   └── eslint-config/         # ESLint 설정
├── package.json               # 루트 패키지
├── pnpm-workspace.yaml        # pnpm 워크스페이스
├── turbo.json                 # Turborepo 설정
└── tsconfig.json              # 루트 TypeScript 설정
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components (Button, Card, Input)
- **State Management**: Zustand
- **Monorepo**: Turborepo + pnpm
- **Documentation**: Storybook
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm 8.0.0 or higher

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all packages
pnpm build

# Run linting
pnpm lint

# Run type checking
pnpm type-check
```

### Development

```bash
# Start web app (port 3001)
pnpm dev

# Start specific app
pnpm --filter web dev
pnpm --filter storybook storybook

# Build specific package
pnpm --filter @mono/ui build
```

## 📦 Packages

### @mono/ui
공통 UI 컴포넌트 패키지
- Button, Card, Input 컴포넌트
- Tailwind CSS 기반 스타일링
- TypeScript 타입 지원
- Storybook으로 문서화

### @mono/core
비즈니스 로직 및 유틸리티
- API 클라이언트
- 데이터 포맷팅 함수
- 유효성 검사 함수

### @mono/types
공통 타입 정의
- User, ApiResponse 등 공통 인터페이스
- 테마, 사이즈 등 공통 타입

## 🔧 Available Scripts

- `pnpm dev` - 모든 앱의 개발 서버 시작
- `pnpm build` - 모든 패키지 빌드
- `pnpm lint` - 모든 패키지 린팅
- `pnpm type-check` - 모든 패키지 타입 체크
- `pnpm clean` - 빌드 캐시 정리

## 🌐 Applications

### Web App
웹 애플리케이션은 `http://localhost:3001`에서 실행됩니다.

**Features:**
- Next.js 14 App Router
- Tailwind CSS 스타일링
- 공통 UI 컴포넌트 사용
- TypeScript 타입 안정성

### Storybook
컴포넌트 문서화는 `http://localhost:6006`에서 실행됩니다.

**Features:**
- UI 컴포넌트 시각화
- 인터랙티브 문서화
- 컴포넌트 테스트 환경

## 📝 Next Steps

1. **shadcn/ui 통합**: 고급 UI 컴포넌트 라이브러리
2. **테스트 설정**: Jest + Testing Library
3. **ESLint 설정**: 코드 품질 관리
4. **Vercel 배포**: 자동 배포 설정

## 🤝 Contributing

1. 새로운 기능은 별도 브랜치에서 개발
2. 패키지 간 의존성은 workspace 프로토콜 사용
3. 공통 로직은 packages에, 앱별 로직은 apps에 배치
4. TypeScript 타입은 @mono/types에서 관리

## 📄 License

MIT License
