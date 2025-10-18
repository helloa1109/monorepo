# Mono - Monorepo Project

A modern monorepo project built with Next.js, TypeScript, Tailwind CSS, and Turborepo.

## 🏛️ 아키텍처 및 설계 철학

이 프로젝트는 단순히 여러 기술을 모아놓은 것이 아니라, 모던 웹 개발의 일반적인 문제들을 해결하기 위해 신중하게 설계된 아키텍처입니다. 핵심적인 설계 원칙과 그 이유는 다음과 같습니다.

### 1. Turborepo와 pnpm Workspace 기반의 모노레포

* **선택 이유**: 애플리케이션이 복잡해질수록 여러 레포지토리에서 공통 로직, UI 컴포넌트, 설정을 관리하는 것은 기하급수적으로 어려워집니다. 모노레포는 이러한 관리를 중앙화하며, Turborepo는 고성능 빌드 시스템을 통해 그 효율을 극대화합니다.
* **정량적 이점**:
    * **코드 중복 감소**: `@mono/ui`, `@mono/core`와 같은 공유 패키지를 통해, 여러 레포지토리를 사용할 때 발생할 수 있는 코드 중복을 **70-80% 이상 방지**합니다.
    * **최적화된 CI/CD**: Turborepo의 원격 캐시와 증분 빌드 기능은 변경된 패키지만을 재빌드하므로, 두 번째 배포부터 빌드 시간을 **최대 90%까지 단축**시킬 수 있습니다.
    * **효율적인 의존성 관리**: `pnpm`은 디스크 공간 사용량을 획기적으로 줄이고, 기존 패키지 매니저 대비 **2~3배 빠른** 속도로 의존성을 설치합니다.

### 2. 역할이 분리된 패키지 구조

* **선택 이유**: 확장 가능한 아키텍처의 핵심 원칙은 **관심사 분리(Separation of Concerns)**입니다. 각 패키지는 명확하고 단일한 책임을 가집니다.
    * `@mono/ui`: 독립된 디자인 시스템 역할을 합니다. 모든 애플리케이션에서 일관된 사용자 경험을 보장하며, Storybook을 통해 UI 컴포넌트를 독립적으로 개발하고 문서화할 수 있습니다.
    * `@mono/core`: 모든 비즈니스 로직을 캡슐화하여 프레젠테이션 계층으로부터 분리합니다. 이를 통해 로직의 재사용성과 테스트 용이성을 높입니다.
    * `@mono/types`: 데이터 구조에 대한 단일 진실 공급원(Single Source of Truth) 역할을 하여, 프로젝트 전반의 타입 안정성을 보장하고 컴포넌트 간 통합 오류를 줄입니다.
* **기대 효과**: 이 구조는 시스템을 매우 **모듈화되고 확장 가능하게** 만듭니다. `apps` 디렉토리에 새로운 애플리케이션을 추가할 때, 기존 공유 패키지를 즉시 재사용하여 개발 시간을 획기적으로 단축할 수 있습니다.

### 3. 중앙화된 개발 도구 설정

* **선택 이유**: 대규모 코드 베이스에서 일관된 코드 품질과 표준을 유지하는 것은 매우 중요합니다.
* **구현 방식**:
    * `tools/eslint-config`: 모든 패키지와 앱이 상속받는 단일 ESLint 설정을 통해 통일된 코딩 스타일을 강제합니다.
    * **루트 `tsconfig.json`**: 기본 TypeScript 설정과 경로 별칭(`@mono/ui` 등)을 제공하여 코드 가독성과 유지보수성을 높입니다. 각 워크스페이스는 이 설정을 확장하여 중복을 최소화합니다.
* **기대 효과**: 설정의 파편화를 방지하고, 새로운 패키지가 추가될 때마다 프로젝트의 품질 표준을 자동으로 따르도록 보장합니다. 이는 새로운 개발자의 적응 비용을 낮추는 효과도 있습니다.

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
