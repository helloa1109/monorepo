import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@mono/ui';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardContent>
        <p>This is a basic card with some content.</p>
      </CardContent>
    </Card>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card has a title.</p>
      </CardContent>
    </Card>
  ),
};

export const WithTitleAndSubtitle: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is a subtitle</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This card has both a title and subtitle.</p>
      </CardContent>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Contact Form</CardTitle>
        <CardDescription>Fill out the form below</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Submit
          </button>
        </div>
      </CardContent>
    </Card>
  ),
};
