import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { AspectRatioProps } from '@radix-ui/react-aspect-ratio';

import { AspectRatio } from '@/components/AspectRatio';

const meta: Meta<typeof AspectRatio> = {
  title: 'Components/AspectRatio',
  component: AspectRatio,
  tags: ['autodocs'],
  args: {
    ratio: 6 / 4,
    className: 'bg-muted',
  },
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

// Default Story
export const Default: Story = {
  args: {},
  render: (args: AspectRatioProps) => (
    <AspectRatio {...args}>
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
        alt="Placeholder by Drew Beamer"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  ),
};
