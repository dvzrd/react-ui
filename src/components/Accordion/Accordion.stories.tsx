import { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Sets the content of the Accordion with React children',
    },
    type: {
      control: 'select',
      options: ['single', 'multiple'],
      description: 'Sets the Accordion type',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Default Story
export const Default: Story = {
  args: {
    children: (
      <>
        <AccordionItem value="item1">
          <AccordionTrigger>Accordion Item 1</AccordionTrigger>
          <AccordionContent>
            Content for the first item. This is an example of how content can be structured within an accordion.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item2">
          <AccordionTrigger>Accordion Item 2</AccordionTrigger>
          <AccordionContent>Content for the second item. Add more details or components as needed.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item3">
          <AccordionTrigger>Accordion Item 3</AccordionTrigger>
          <AccordionContent>
            Content for the third item. You can include any type of content within the accordion.
          </AccordionContent>
        </AccordionItem>
      </>
    ),
  },
};
