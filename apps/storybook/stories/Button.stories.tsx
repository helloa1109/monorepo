import { Button } from '@mono/ui';
// import { Mail } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
    asChild: { 
      control: { type: 'boolean' },
      description: 'Render as a child component (e.g., wrap an anchor tag)',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    children: { 
       control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

// Destructive variant 스토리
export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
    size: 'default',
  },
};

// Secondary variant 스토리 (size 수정)
export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    size: 'default', // 'md' -> 'default'
  },
};

// Outline variant 스토리 (size 수정)
export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    size: 'default', // 'md' -> 'default'
  },
};

// Ghost variant 스토리
export const Ghost: Story = {
  args: {
    children: 'Ghost Button',
    variant: 'ghost',
    size: 'default',
  },
};

// Link variant 스토리
export const Link: Story = {
  args: {
    children: 'Link Button',
    variant: 'link',
    size: 'default',
  },
};

// Small size 스토리 (variant 수정)
export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    variant: 'default', // 'primary' -> 'default'
  },
};

// Large size 스토리 (variant 수정)
export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    variant: 'default', // 'primary' -> 'default'
  },
};

// Icon size 스토리
export const Icon: Story = {
  args: {
    variant: 'outline',
    size: 'icon',
    // 아이콘 컴포넌트를 children으로 전달하세요. 예: <Mail className="h-4 w-4" />
    // 아이콘 라이브러리(lucide-react)가 @mono/ui 또는 storybook에 설치되어 있어야 합니다.
    children: '📧', // 임시 텍스트 아이콘
    // children: <Mail className="h-4 w-4" />, // 실제 아이콘 사용 예시
  },
};

// Disabled 상태 스토리 (variant 수정)
export const Disabled: Story = {
  args: {
    children: 'Disabled',
    disabled: true,
    variant: 'default', // 'primary' -> 'default'
  },
};

// asChild prop 사용 예시 스토리
export const AsChild: Story = {
  args: {
    children: <a href="https://example.com" target="_blank" rel="noopener noreferrer">Link inside Button</a>,
    variant: 'link', // variant를 link 등으로 설정하여 스타일 적용 확인
    size: 'default',
    asChild: true,
  },
};