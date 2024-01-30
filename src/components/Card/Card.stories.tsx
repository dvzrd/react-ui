import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardProps } from '@/components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'disable',
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

// render Card with props
const render = (args: CardProps) => (
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
);

// Default Story
export const Default: Story = {
  args: {},
  render,
};

// Variant Stories
export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
  render,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  render,
};

export const Ghost: Story = {
  render,
  args: {
    variant: 'ghost',
  },
};

// Size Stories
export const SmallSize: Story = {
  args: {
    size: 'sm',
  },
  render,
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
  },
  render,
};
