'use client';

import * as React from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

// DropdownMenuSubTrigger

const dropdownMenuSubTrigger = tv({
  slots: {
    base: 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent',
    icon: 'ml-auto h-4 w-4',
  },
  variants: {
    inset: {
      true: {
        base: 'pl-8',
      },
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export interface DropdownMenuSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger>,
    VariantProps<typeof dropdownMenuSubTrigger> {}

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  DropdownMenuSubTriggerProps
>(({ className, inset, children, ...props }, ref) => {
  const { base, icon } = dropdownMenuSubTrigger({ inset });

  return (
    <DropdownMenuPrimitive.SubTrigger ref={ref} className={base({ className })} {...props}>
      {children}
      <ChevronRight className={icon()} />
    </DropdownMenuPrimitive.SubTrigger>
  );
});
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;

// DropdownMenuSubContent

const dropdownMenuSubContent = tv({
  base: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent ref={ref} className={dropdownMenuSubContent({ className })} {...props} />
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;

// DropdownMenu

const dropdownMenu = tv({
  base: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      ref={ref}
      sideOffset={sideOffset}
      className={dropdownMenu({ className })}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

// DropdownMenuItem

// Setting up base with tv created some inheritance issues - using a string for now
// const dropdownMenuItemBase = tv({
//   base: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
// });

const dropdownMenuItemBase =
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';

const dropdownMenuItem = tv({
  base: dropdownMenuItemBase,
  variants: {
    inset: {
      true: 'pl-8',
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export interface DropdownMenuItemProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item>,
    VariantProps<typeof dropdownMenuItem> {}

const DropdownMenuItem = React.forwardRef<React.ElementRef<typeof DropdownMenuPrimitive.Item>, DropdownMenuItemProps>(
  ({ className, inset, ...props }, ref) => (
    <DropdownMenuPrimitive.Item ref={ref} className={dropdownMenuItem({ inset, className })} {...props} />
  ),
);
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

// DropdownMenuCheckboxItem

const dropdownMenuActionItemBase = tv({
  base: dropdownMenuItemBase,
  slots: {
    iconWrapper: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    icon: 'h-4 w-4',
  },
});

const dropdownMenuCheckboxItem = tv({
  extend: dropdownMenuActionItemBase,
  base: 'pl-8',
});

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { base, iconWrapper, icon } = dropdownMenuCheckboxItem();

  return (
    <DropdownMenuPrimitive.CheckboxItem ref={ref} className={base({ className })} checked={checked} {...props}>
      <span className={iconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className={icon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
});
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;

// DropdownMenuRadioItem

const dropdownMenuRadioItem = tv({
  extend: dropdownMenuActionItemBase,
  base: 'pl-8',
  slots: {
    icon: 'h-2 w-2 fill-current',
  },
});

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { base, iconWrapper, icon } = dropdownMenuRadioItem();

  return (
    <DropdownMenuPrimitive.RadioItem ref={ref} className={base({ className })} {...props}>
      <span className={iconWrapper()}>
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className={icon()} />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
});
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

// DropdownMenuLabel

const dropdownMenuLabel = tv({
  base: 'px-2 py-1.5 text-sm font-semibold',
  variants: {
    inset: {
      true: 'pl-8',
    },
  },
  defaultVariants: {
    inset: false,
  },
});

export interface DropdownMenuLabelProps
  extends React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label>,
    VariantProps<typeof dropdownMenuLabel> {}

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  DropdownMenuLabelProps
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label ref={ref} className={dropdownMenuLabel({ inset, className })} {...props} />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

// DropdownMenuSeparator

const dropdownMenuSeparator = tv({
  base: '-mx-1 my-1 h-px bg-muted',
});

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator ref={ref} className={dropdownMenuSeparator({ className })} {...props} />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

// DropdownMenuShortcut

const dropdownMenuShortcut = tv({
  base: 'ml-auto text-xs tracking-widest opacity-60',
});

const DropdownMenuShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={dropdownMenuShortcut({ className })} {...props} />;
};
DropdownMenuShortcut.displayName = 'DropdownMenuShortcut';

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
