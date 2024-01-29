import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '@/components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Default Story
export const Default: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/withpulp.png" alt="@withpulp" />
      <AvatarFallback>DV</AvatarFallback>
    </Avatar>
  ),
};
