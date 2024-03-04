'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { tv } from 'tailwind-variants';

// Accordion

const Accordion = AccordionPrimitive.Root;

// AccordionItem

const accordionItem = tv({ base: 'border-b' });

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={accordionItem({ className })} {...props} />
));
AccordionItem.displayName = 'AccordionItem';

// AccordionTigger

const accordionTrigger = tv({
  slots: {
    base: 'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
    wrapper: 'flex',
    icon: 'h-4 w-4 shrink-0 transition-transform duration-200',
  },
});

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { base, wrapper, icon } = accordionTrigger();

  return (
    <AccordionPrimitive.Header className={wrapper()}>
      <AccordionPrimitive.Trigger ref={ref} className={base({ className })} {...props}>
        {children}
        <ChevronDown className={icon()} />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

// AccordionContent

const accordionContent = tv({
  slots: {
    base: 'pb-4 pt-0',
    wrapper:
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
  },
});

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { base, wrapper } = accordionContent();

  return (
    <AccordionPrimitive.Content ref={ref} className={wrapper()} {...props}>
      <div className={base({ className })}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  accordionItem,
  accordionTrigger,
  accordionContent,
};
