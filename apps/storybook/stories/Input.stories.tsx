import { Input } from '@mono/ui';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
    },
    disabled: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
    size: 'md',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'Enter your email',
    size: 'md',
    maxLength: 50,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    error: 'Password must be at least 8 characters',
    size: 'md',
    maxLength: 20,
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    placeholder: 'Small size',
    size: 'sm',
    maxLength: 10,
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    placeholder: 'Large size',
    size: 'lg',
    maxLength: 100,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    size: 'md',
    maxLength: 30,
  },
};

// Interactive example with state
export const Interactive: Story = {
  render: function InteractiveRender(args) {
    const [value, setValue] = useState('');
    return (
      <div className="w-80">
        <Input
          {...args}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          label="Interactive Input"
          placeholder="Type something..."
        />
        <p className="mt-2 text-sm text-gray-600">
          Value: {value || 'Empty'}
        </p>
      </div>
    );
  },
};
