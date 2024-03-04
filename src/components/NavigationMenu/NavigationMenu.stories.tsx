import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu';
import { Github } from 'lucide-react';
import { tv } from 'tailwind-variants';

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuLink,
  navigationMenuTrigger,
} from '@/components/NavigationMenu';

const meta: Meta<typeof NavigationMenu> = {
  title: 'Components/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  argTypes: {
    defaultValue: {
      control: 'text',
      description: 'Sets the default value of the NavigationMenu',
    },
    value: {
      control: 'text',
      description: 'Sets the value of the NavigationMenu',
    },
    delayDuration: {
      control: 'number',
      description: 'Sets the delay duration from when the pointer enters the trigger until the tooltip gets opened',
      table: {
        defaultValue: { summary: 200 },
      },
    },
    skipDelayDuration: {
      control: 'number',
      description: 'Sets how much time a user has to enter another trigger without incurring a delay again',
      table: {
        defaultValue: { summary: 300 },
      },
    },
    dir: {
      control: 'select',
      options: ['ltr', 'rtl'],
      description: 'Sets the text direction of the NavigationMenu content',
      table: {
        defaultValue: { summary: 'ltr' },
      },
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Sets the orientation of the NavigationMenu items',
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    onValueChange: {
      control: 'disable',
      description: 'Callback for when the NavigationMenu value state changes',
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavigationMenu>;

const defaultArgs: Partial<NavigationMenuProps> = {
  dir: 'ltr',
};

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Accordion',
    href: 'http://localhost:6006/?path=/docs/components-accordion--docs',
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
  },
  {
    title: 'Aspect Ratio',
    href: 'http://localhost:6006/?path=/docs/components-aspectratio--docs',
    description: 'Displays content within a desired ratio.',
  },
  {
    title: 'Avatar',
    href: 'http://localhost:6006/?path=/docs/components-avatar--docs',
    description: 'An image element with a fallback for representing the user.',
  },
  {
    title: 'Button',
    href: 'http://localhost:6006/?path=/docs/components-button--docs',
    description: 'Displays a button or a component that looks like a button.',
  },
  {
    title: 'Card',
    href: 'http://localhost:6006/?path=/docs/components-card--docs',
    description: 'Displays a card with header, content, and footer.',
  },
  {
    title: 'Carousel',
    href: 'http://localhost:6006/?path=/docs/components-carousel--docs',
    description: 'A carousel with motion and swipe built using Embla.',
  },
];

const listItem = tv({
  base: 'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
});

const ListItem = React.forwardRef<React.ElementRef<'a'>, React.ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => (
    <li>
      <NavigationMenuLink asChild>
        <a ref={ref} className={listItem({ className })} {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  ),
);
ListItem.displayName = 'ListItem';

export const Default: Story = {
  args: defaultArgs,
  render: (args: NavigationMenuProps) => (
    <div className="min-h-[380px]">
      <NavigationMenu {...args}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="http://localhost:6006/?path=/docs/components-navigationmenu--docs"
                    >
                      <Github className="h-6 w-6" />
                      <div className="mb-2 mt-4 text-lg font-medium">React UI</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Beautifully designed UI components library. Accessible. Customizable. Open Source.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="http://localhost:6006/?path=/docs/components-navigationmenu--docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="http://localhost:6006/?path=/docs/components-navigationmenu--docs" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="http://localhost:6006/?path=/docs/components-navigationmenu--docs" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem key={component.title} title={component.title} href={component.href}>
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <a
                href="http://localhost:6006/?path=/docs/components-navigationmenu--docs"
                className={navigationMenuTrigger()}
              >
                Documentation
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  ),
};
