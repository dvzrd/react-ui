import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardProps } from '@/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Sets the content of the Card with React children',
    },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'secondary', 'ghost'],
      description: 'Sets the Card variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
      description: 'Sets the Card size',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

// Default Story
export const Default: Story = {
  render: (args: CardProps) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content</p>
        <p>You can put whatever in here</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer works the same way</p>
      </CardFooter>
    </Card>
  ),
  args: {},
};

// Variant Stories
export const Destructive: Story = {
  render: (args: CardProps) => Default.render(args),
  args: {
    variant: 'destructive',
  },
};

export const Secondary: Story = {
  render: (args: CardProps) => Default.render(args),
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  render: (args: CardProps) => Default.render(args),
  args: {
    variant: 'ghost',
  },
};

// Size Stories
export const SmallSize: Story = {
  render: (args: CardProps) => Default.render(args),
  args: {
    size: 'sm',
  },
};

export const LargeSize: Story = {
  render: (args: CardProps) => Default.render(args),
  args: {
    size: 'lg',
  },
};
