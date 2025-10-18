# Mono - Monorepo Project

A modern monorepo project built with Next.js, TypeScript, Tailwind CSS, and Turborepo.

### 1. Monorepo with Turborepo + pnpm Workspaces

* **Why**: As applications grow, managing shared logic, UI components, and configurations across multiple repositories becomes exponentially complex. A monorepo architecture centralizes this management, and Turborepo enhances it with high-performance build tooling.
* **Quantitative Benefits**:
    * **Reduced Duplication**: By sharing packages like `@mono/ui` and `@mono/core`, we prevent an estimated **70-80% of code duplication** that would occur in separate repositories.
    * **Optimized CI/CD**: Turborepo's remote caching and incremental builds can reduce deployment times by **up to 90%** on subsequent builds, as it only rebuilds packages affected by a change.
    * **Efficient Dependency Management**: `pnpm` utilizes a content-addressable store for node_modules, significantly reducing disk space usage and speeding up dependency installation by **2-3x** compared to traditional package managers.

### 2. Decoupled Packages (`ui`, `core`, `types`)

* **Why**: A key principle of scalable architecture is **Separation of Concerns**. Each package has a single, clear responsibility.
    * `@mono/ui`: A dedicated design system. It ensures a consistent user experience across all applications and allows UI development to happen in isolation, documented and tested via Storybook.
    * `@mono/core`: Encapsulates all business logic, abstracting it away from the presentation layer. This makes the logic reusable and easily testable.
    * `@mono/types`: Provides a single source of truth for data structures, ensuring type safety and reducing integration errors between the frontend and backend.
* **Impact**: This structure makes the system highly **modular and scalable**. A new application (e.g., a mobile app or another web service) can be added to the `apps` directory and immediately leverage all the existing shared packages, drastically reducing development time.

### 3. Centralized Tooling Configuration

* **Why**: Maintaining consistent code quality and standards across a large codebase is crucial.
* **Implementation**:
    * `tools/eslint-config`: A single ESLint configuration is inherited by all packages and applications, enforcing a unified coding style.
    * **Root `tsconfig.json`**: A base TypeScript configuration provides shared compiler options and path aliases (e.g., `@/`, `@mono/ui`), improving code readability and maintainability. Each workspace extends this configuration, minimizing boilerplate.
* **Benefit**: This approach reduces configuration drift and ensures that any new package automatically adheres to the project's quality standards, lowering the barrier to entry for new developers.

## 🌐 Live Deployments

You can view the live deployments of this project on Vercel:

-   **Web Application**: [https://monorepo-web-weld.vercel.app/](https://monorepo-web-weld.vercel.app/)
-   **Storybook (UI Components)**: [https://your-storybook-deployment-url.vercel.app/](https://monorepo-storybook-seven.vercel.app/)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhelloa1109%2Fmonorepo)

## 🚀 Deployment on Vercel

This monorepo is optimized for Vercel deployment. You should create a separate Vercel project for each application in the `apps` directory.

### 1. Web Application (`apps/web`)

-   **Framework Preset**: `Next.js`
-   **Root Directory**: `apps/web`
-   **Environment Variables**: Set `NEXT_PUBLIC_API_URL` to your backend API endpoint.

### 2. Storybook (`apps/storybook`)

-   **Framework Preset**: `Storybook`
-   **Root Directory**: `apps/storybook`
-   **Build and Output Settings**:
    -   **Build Command**: `pnpm build-storybook`
    -   **Output Directory**: `storybook-static`

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

1. **테스트 설정**: Jest + Testing Library

## 🤝 Contributing

1. 새로운 기능은 별도 브랜치에서 개발
2. 패키지 간 의존성은 workspace 프로토콜 사용
3. 공통 로직은 packages에, 앱별 로직은 apps에 배치
4. TypeScript 타입은 @mono/types에서 관리

## 📄 License

MIT License
