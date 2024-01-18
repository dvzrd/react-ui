import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Avatar, AvatarImage, AvatarFallback } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

// Default Story
export const Default: Story = {
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/withpulp.png" alt="@withpulp" />
      <AvatarFallback>DV</AvatarFallback>
    </Avatar>
  ),
  args: {},
};
