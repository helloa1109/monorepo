// apps/storybook/stories/Accordion.stories.tsx
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from '@mono/ui';
  import type { Meta, StoryObj } from '@storybook/react';
  
  const meta: Meta<typeof Accordion> = {
    title: 'UI/Accordion',
    component: Accordion,
    parameters: {
      layout: 'centered',
      docs: {
        description: {
          component: 'Radix UI 기반의 접근 가능하고 애니메이션이 적용된 아코디언 컴포넌트입니다.',
        },
      },
    },
    tags: ['autodocs'],
    decorators: [
      (Story) => (
        <div className="w-[600px]">
          <Story />
        </div>
      ),
    ],
  };
  
  export default meta;
  type Story = any;
  
  /**
   * 기본 아코디언 예시
   * 한 번에 하나의 항목만 열 수 있습니다 (type="single").
   */
  export const Default: Story = {
    args: {},
    render: () => (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern and uses proper ARIA attributes.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that are customizable using Tailwind CSS.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It uses smooth CSS animations for opening and closing transitions.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };
  
  /**
   * 여러 항목을 동시에 열 수 있는 아코디언
   * type="multiple"을 사용합니다.
   */
  export const Multiple: Story = {
    args: {},
    render: () => (
      <Accordion type="multiple" className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Features</AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc list-inside space-y-1">
              <li>Accessible by default</li>
              <li>Keyboard navigation support</li>
              <li>Smooth animations</li>
            </ul>
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-2">
          <AccordionTrigger>Pricing</AccordionTrigger>
          <AccordionContent>
            Our pricing is flexible and scales with your needs. Contact us for details.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-3">
          <AccordionTrigger>Support</AccordionTrigger>
          <AccordionContent>
            We offer 24/7 customer support via email and live chat.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };
  
  /**
   * 기본적으로 첫 번째 항목이 열린 상태
   * defaultValue prop을 사용합니다.
   */
  export const DefaultOpen: Story = {
    args: {},
    render: () => (
      <Accordion type="single" defaultValue="item-1" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>Getting Started</AccordionTrigger>
          <AccordionContent>
            Welcome! This section is open by default. You can start by exploring our features.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-2">
          <AccordionTrigger>Installation</AccordionTrigger>
          <AccordionContent>
            Run <code className="bg-gray-100 dark:bg-gray-800 px-1 py-0.5 rounded">npm install @mono/ui</code> to get started.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-3">
          <AccordionTrigger>Usage</AccordionTrigger>
          <AccordionContent>
            Import the components and use them in your React application.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };
  
  /**
   * FAQ 스타일 예시
   * 실제 사용 사례를 보여줍니다.
   */
  export const FAQ: Story = {
    args: {},
    render: () => (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">자주 묻는 질문</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>배송은 얼마나 걸리나요?</AccordionTrigger>
            <AccordionContent>
              일반적으로 주문 후 2-3 영업일 내에 배송됩니다. 
              지역에 따라 배송 기간이 다를 수 있습니다.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="q2">
            <AccordionTrigger>환불 정책은 어떻게 되나요?</AccordionTrigger>
            <AccordionContent>
              제품 수령 후 14일 이내에 반품 및 환불이 가능합니다. 
              단, 제품이 미사용 상태여야 합니다.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="q3">
            <AccordionTrigger>고객 지원은 어떻게 받나요?</AccordionTrigger>
            <AccordionContent>
              이메일(support@example.com)이나 라이브 챗을 통해 
              24시간 고객 지원을 받으실 수 있습니다.
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="q4">
            <AccordionTrigger>결제 방법은 무엇이 있나요?</AccordionTrigger>
            <AccordionContent>
              신용카드, 체크카드, 계좌이체, 간편결제(카카오페이, 네이버페이) 등 
              다양한 결제 방법을 지원합니다.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    ),
  };
  
  /**
   * 커스텀 스타일 예시
   * className을 통해 스타일을 변경할 수 있습니다.
   */
  export const CustomStyled: Story = {
    args: {},
    render: () => (
      <Accordion type="single" collapsible className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
        <AccordionItem value="item-1" className="border-b-0 mb-2">
          <AccordionTrigger className="bg-white dark:bg-gray-800 px-4 rounded-lg hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-700">
            Custom Style 1
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2">
            This accordion has custom styling applied.
          </AccordionContent>
        </AccordionItem>
  
        <AccordionItem value="item-2" className="border-b-0 mb-2">
          <AccordionTrigger className="bg-white dark:bg-gray-800 px-4 rounded-lg hover:no-underline hover:bg-gray-100 dark:hover:bg-gray-700">
            Custom Style 2
          </AccordionTrigger>
          <AccordionContent className="px-4 pt-2">
            You can customize the appearance using Tailwind classes.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    ),
  };