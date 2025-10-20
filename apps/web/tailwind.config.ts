import type { Config } from 'tailwindcss';
import sharedConfig from '@mono/ui/tailwind.config'; // ui 패키지의 설정을 import 합니다.

const config: Pick<Config, "content" | "presets"> = {
  presets: [sharedConfig], // presets으로 ui 설정을 상속받습니다.
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // ui 패키지의 컴포넌트 경로를 추가하여 스타일을 감지하도록 합니다.
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}',
  ],
};

export default config;