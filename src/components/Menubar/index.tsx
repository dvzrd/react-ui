'use client';

import * as React from 'react';
import * as MenubarPrimitive from '@radix-ui/react-menubar';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { tv, type VariantProps } from 'tailwind-variants';

const MenubarMenu = MenubarPrimitive.Menu;

const MenubarGroup = MenubarPrimitive.Group;

const MenubarPortal = MenubarPrimitive.Portal;

const MenubarSub = MenubarPrimitive.Sub;

const MenubarRadioGroup = MenubarPrimitive.RadioGroup;

// Menubar

const menubar = tv({
  base: 'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
});

const Menubar = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Root>
>(({ className, ...props }, ref) => <MenubarPrimitive.Root ref={ref} className={menubar({ className })} {...props} />);
Menubar.displayName = MenubarPrimitive.Root.displayName;

// MenubarTrigger

const menubarTrigger = tv({
  base: 'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
});

const MenubarTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Trigger ref={ref} className={menubarTrigger({ className })} {...props} />
));
MenubarTrigger.displayName = MenubarPrimitive.Trigger.displayName;

// MenubarSubTrigger

const menubarSubTrigger = tv({
  slots: {
    base: 'flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
    icon: 'ml-auto h-4 w-4',
  },
  variants: {
    inset: {
      true: {
        base: 'pl-8',
      },
    },
  },
});

export interface MenubarSubTriggerProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubTrigger>,
    VariantProps<typeof menubarSubTrigger> {}

const MenubarSubTrigger = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubTrigger>,
  MenubarSubTriggerProps
>(({ className, inset, children, ...props }, ref) => {
  const { base, icon } = menubarSubTrigger({ inset });

  return (
    <MenubarPrimitive.SubTrigger ref={ref} className={base({ className })} {...props}>
      {children}
      <ChevronRight className={icon()} />
    </MenubarPrimitive.SubTrigger>
  );
});
MenubarSubTrigger.displayName = MenubarPrimitive.SubTrigger.displayName;

// MenubarSubContent

const menubarSubContent = tv({
  base: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

const MenubarSubContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.SubContent ref={ref} className={menubarSubContent({ className })} {...props} />
));
MenubarSubContent.displayName = MenubarPrimitive.SubContent.displayName;

// MenubarContent

const menubarContent = tv({
  base: 'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
});

const MenubarContent = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Content>
>(({ className, align = 'start', alignOffset = -4, sideOffset = 8, ...props }, ref) => (
  <MenubarPrimitive.Portal>
    <MenubarPrimitive.Content
      ref={ref}
      align={align}
      alignOffset={alignOffset}
      sideOffset={sideOffset}
      className={menubarContent({ className })}
      {...props}
    />
  </MenubarPrimitive.Portal>
));
MenubarContent.displayName = MenubarPrimitive.Content.displayName;

//  MenubarItem

const menubarItemBase =
  'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50';

const menubarItem = tv({
  base: menubarItemBase,
  variants: {
    inset: {
      true: 'pl-8',
    },
  },
});

const MenubarItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <MenubarPrimitive.Item ref={ref} className={menubarItem({ inset, className })} {...props} />
));
MenubarItem.displayName = MenubarPrimitive.Item.displayName;

// MenubarCheckboxItem

const menubarActionItemBase = tv({
  base: menubarItemBase,
  slots: {
    iconWrapper: 'absolute left-2 flex h-3.5 w-3.5 items-center justify-center',
    icon: 'h-4 w-4',
  },
});

const menubarCheckboxItem = tv({
  extend: menubarActionItemBase,
  base: 'pl-8',
});

const MenubarCheckboxItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => {
  const { base, iconWrapper, icon } = menubarCheckboxItem();

  return (
    <MenubarPrimitive.CheckboxItem ref={ref} className={base({ className })} checked={checked} {...props}>
      <span className={iconWrapper()}>
        <MenubarPrimitive.ItemIndicator>
          <Check className={icon()} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  );
});
MenubarCheckboxItem.displayName = MenubarPrimitive.CheckboxItem.displayName;

// MenubarRadioItem

const menubarRadioItem = tv({
  extend: menubarActionItemBase,
  base: 'pl-8',
  slots: {
    icon: 'h-2 w-2 fill-current',
  },
});

const MenubarRadioItem = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => {
  const { base, iconWrapper, icon } = menubarRadioItem();

  return (
    <MenubarPrimitive.RadioItem ref={ref} className={base({ className })} {...props}>
      <span className={iconWrapper()}>
        <MenubarPrimitive.ItemIndicator>
          <Circle className={icon()} />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  );
});
MenubarRadioItem.displayName = MenubarPrimitive.RadioItem.displayName;

// MenubarLabel

const menubarLabel = tv({
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

export interface MenubarLabelProps
  extends React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Label>,
    VariantProps<typeof menubarLabel> {}

const MenubarLabel = React.forwardRef<React.ElementRef<typeof MenubarPrimitive.Label>, MenubarLabelProps>(
  ({ className, inset, ...props }, ref) => (
    <MenubarPrimitive.Label ref={ref} className={menubarLabel({ inset, className })} {...props} />
  ),
);
MenubarLabel.displayName = MenubarPrimitive.Label.displayName;

// MenubarSeparator

const menubarSeparator = tv({
  base: '-mx-1 my-1 h-px bg-muted',
});

const MenubarSeparator = React.forwardRef<
  React.ElementRef<typeof MenubarPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof MenubarPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <MenubarPrimitive.Separator ref={ref} className={menubarSeparator({ className })} {...props} />
));
MenubarSeparator.displayName = MenubarPrimitive.Separator.displayName;

// MenubarShortcut

const menubarShortcut = tv({
  base: 'ml-auto text-xs tracking-widest text-muted-foreground',
});

const MenubarShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={menubarShortcut({ className })} {...props} />;
};
MenubarShortcut.displayname = 'MenubarShortcut';

export {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarPortal,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarGroup,
  MenubarSub,
  MenubarShortcut,
};
