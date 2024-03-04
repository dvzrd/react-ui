'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

// SelectTrigger

const selectTrigger = tv({
  slots: {
    base: 'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
    icon: 'h-4 w-4 opacity-50',
  },
});

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
  const { base, icon } = selectTrigger();

  return (
    <SelectPrimitive.Trigger ref={ref} className={base({ className })} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className={icon()} />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
});
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

// SelectScrollButton

const selectScrollButton = tv({
  slots: {
    base: 'flex cursor-default items-center justify-center py-1',
    icon: 'h-4 w-4',
  },
});

// SelectScrollUpButton

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => {
  const { base, icon } = selectScrollButton();

  return (
    <SelectPrimitive.ScrollUpButton ref={ref} className={base({ className })} {...props}>
      <ChevronUp className={icon()} />
    </SelectPrimitive.ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

// SelectScrollDownButton

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => {
  const { base, icon } = selectScrollButton();

  return (
    <SelectPrimitive.ScrollDownButton ref={ref} className={base({ className })} {...props}>
      <ChevronDown className={icon()} />
    </SelectPrimitive.ScrollDownButton>
  );
});
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

// SelectContent

const selectContent = tv({
  slots: {
    base: 'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    viewport: 'p-1',
  },
  variants: {
    position: {
      popper: {
        base: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        viewport: 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
      },
      'item-aligned': {
        base: '',
        viewport: '',
      },
    },
  },
});

export interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>,
    VariantProps<typeof selectContent> {}

const SelectContent = React.forwardRef<React.ElementRef<typeof SelectPrimitive.Content>, SelectContentProps>(
  ({ className, children, position = 'popper', ...props }, ref) => {
    const { base, viewport } = selectContent({ position });

    return (
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content ref={ref} className={base({ className })} position={position} {...props}>
          <SelectScrollUpButton />
          <SelectPrimitive.Viewport className={viewport()}>{children}</SelectPrimitive.Viewport>
          <SelectScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    );
  },
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

// SelectLabel

const selectLabel = tv({
  base: 'py-1.5 pl-8 pr-2 text-sm font-semibold',
});

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label ref={ref} className={selectLabel({ className })} {...props} />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

// SelectItem

const selectItem = tv({
  slots: {
    base: 'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    iconWrapper: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    icon: 'h-4 w-4',
  },
});

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => {
  const { base, iconWrapper, icon } = selectItem();

  return (
    <SelectPrimitive.Item ref={ref} className={base({ className })} {...props}>
      <span className={iconWrapper()}>
        <SelectPrimitive.ItemIndicator>
          <Check className={icon()} />
        </SelectPrimitive.ItemIndicator>
      </span>

      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
});
SelectItem.displayName = SelectPrimitive.Item.displayName;

// SelectSeparator

const selectSeparator = tv({
  base: '-mx-1 my-1 h-px bg-muted',
});

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator ref={ref} className={selectSeparator({ className })} {...props} />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
