import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Icon } from '@/components/Icon';
import { Button, type ButtonProps } from '@/components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'ghost', 'link', 'outline', 'secondary'],
      description: 'Sets the Button variant',
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
      description: 'Sets the Button size',
    },
    asChild: {
      control: 'boolean',
      description: 'Renders the Button as a child element',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Default Story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variant Stories
export const Outline: Story = {
  args: {
    ...Default.args,
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    ...Default.args,
    variant: 'ghost',
  },
};

export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: 'secondary',
  },
};

export const LinkAsChild: Story = {
  render: (args: ButtonProps) => (
    <Button {...args}>
      <a href="https://withpulp.com" target="_blank" rel="noopener noreferrer">
        Button
      </a>
    </Button>
  ),
  args: {
    asChild: true,
    variant: 'link',
  },
};

export const WithLoading: Story = {
  render: (args: ButtonProps) => (
    <Button {...args}>
      <Icon.spinner className="mr-2 h-4 w-4 animate-spin" />
      Button With Loading
    </Button>
  ),
  args: {
    variant: 'outline',
  },
};

export const WithIcon: Story = {
  render: (args: ButtonProps) => (
    <Button {...args}>
      <Icon.media className="mr-2 h-4 w-4" />
      Button With Icon
    </Button>
  ),
  args: {
    variant: 'secondary',
  },
};
