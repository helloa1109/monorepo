import { ScrollReveal } from '@mono/ui';
import type { Meta, StoryObj } from '@storybook/react';

const Placeholder = ({ text = 'Scroll to reveal this content.' }: { text?: string }) => (
  <div className="p-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-xl w-64 h-32 flex items-center justify-center border border-gray-200 dark:border-gray-700" >
    <p className="text-sm font-semibold">{text}</p>
  </div>
);

const meta: Meta<typeof ScrollReveal> = {
  title: 'UI/ScrollReveal',
  component: ScrollReveal,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: '스크롤 시 부드러운 애니메이션 효과를 제공하는 컴포넌트입니다. IntersectionObserver를 활용하여 성능 최적화되어 있습니다.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: 'select',
      options: ['up', 'down', 'left', 'right', 'fade'],
      description: '애니메이션 방향을 설정합니다.',
      table: {
        type: { summary: "'up' | 'down' | 'left' | 'right' | 'fade'" },
        defaultValue: { summary: 'up' },
      },
    },
    delay: {
      control: { type: 'number', min: 0, max: 2, step: 0.1 },
      description: '애니메이션 시작 딜레이 (초)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0' },
      },
    },
    threshold: {
      control: { type: 'number', min: 0, max: 1, step: 0.1 },
      description: '요소가 보여야 하는 비율 (0-1)',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '0.1' },
      },
    },
    rootMargin: {
      control: 'text',
      description: 'IntersectionObserver의 rootMargin 값',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '50px' },
      },
    },
    once: {
      control: 'boolean',
      description: '애니메이션을 한 번만 재생할지 (true), 스크롤 아웃/인 시 반복할지 (false) 설정합니다.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    className: {
      control: 'text',
      description: '추가 CSS 클래스',
      table: {
        type: { summary: 'string' },
      },
    },
    children: { control: false },
  },

  decorators: [
    (Story) => (
      <div className="h-[500px] flex justify-center items-center flex-col">
        <p className="mb-8 text-gray-500 dark:text-gray-400">아래로 스크롤하여 컴포넌트가 나타나는 것을 확인하세요.</p>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// --- 스토리 예시 ---

/**
 * 아래에서 위로 올라오는 기본 애니메이션
 */
export const Up: Story = {
  args: {
    children: <Placeholder text="Fade In Up" />,
    direction: 'up',
  },
};

/** 왼쪽에서 오른쪽으로 나타나는 애니메이션 */
export const Left: Story = {
  args: {
    children: <Placeholder text="Fade In Left" />,
    direction: 'left',
  },
};

/** 오른쪽에서 왼쪽으로 나타나는 애니메이션 */
export const Right: Story = {
  args: {
    children: <Placeholder text="Fade In Right" />,
    direction: 'right',
  },
};

/** 위에서 아래로 내려오는 애니메이션 */
export const Down: Story = {
  args: {
    children: <Placeholder text="Fade In Down" />,
    direction: 'down',
  },
};

/** 방향 없이 투명도만 변경되는 페이드 인 */
export const Fade: Story = {
  args: {
    children: <Placeholder text="Fade In" />,
    direction: 'fade',
  },
};

/** 1초 지연 후 나타나는 애니메이션 */
export const Delayed: Story = {
  args: {
    children: <Placeholder text="Delayed Fade In (1s)" />,
    direction: 'fade',
    delay: 1,
  },
};

/**반복 재생 기능을 시연하는 스토리
   스크롤 아웃/인 시 애니메이션이 반복됩니다. */
export const Repeatable: Story = {
  args: {
    children: <Placeholder text="Repeatable (Scroll Out/In)" />,
    direction: 'down',
    once: false,
  },
};

/**커스텀 임계값 설정 (70%)
   요소의 70%가 보일 때 애니메이션이 시작됩니다.*/
export const CustomThreshold: Story = {
  args: {
    children: <Placeholder text="Custom Threshold (Visible at 70%)" />,
    direction: 'right',
    threshold: 0.7,
  },
};

/**rootMargin을 조정한 예시
   뷰포트 경계에서 200px 전에 미리 애니메이션을 시작합니다.*/
export const CustomRootMargin: Story = {
  args: {
    children: <Placeholder text="Early Detection (rootMargin: 200px)" />,
    direction: 'up',
    rootMargin: '200px',
  },
};

/**여러 요소를 순차적으로 표시*/
export const SequentialReveal: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <ScrollReveal direction="left" delay={0}>
        <Placeholder text="First (0s)" />
      </ScrollReveal>
      <ScrollReveal direction="up" delay={0.2}>
        <Placeholder text="Second (0.2s)" />
      </ScrollReveal>
      <ScrollReveal direction="right" delay={0.4}>
        <Placeholder text="Third (0.4s)" />
      </ScrollReveal>
    </div>
  ),
};