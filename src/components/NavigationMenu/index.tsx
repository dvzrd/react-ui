import * as React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import { tv } from 'tailwind-variants';
import { ChevronDown } from 'lucide-react';

// NavigationMenuViewport

const navigationMenuViewport = tv({
  slots: {
    base: 'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
    wrapper: 'absolute left-0 top-full flex justify-center',
  },
});

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => {
  const { base, wrapper } = navigationMenuViewport();

  return (
    <div className={wrapper()}>
      <NavigationMenuPrimitive.Viewport className={base({ className })} ref={ref} {...props} />
    </div>
  );
});
NavigationMenuViewport.displayName = NavigationMenuPrimitive.Viewport.displayName;

// NavigationMenu

const navigationMenu = tv({ base: 'relative z-10 flex max-w-max flex-1 items-center justify-center' });

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root ref={ref} className={navigationMenu({ className })} {...props}>
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

// NavigationMenuList

const navigationMenuList = tv({ base: 'group flex flex-1 list-none items-center justify-center space-x-1' });

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List ref={ref} className={navigationMenuList({ className })} {...props} />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

// NavigationMenuItem

const NavigationMenuItem = NavigationMenuPrimitive.Item;

// NavigationMenuTrigger

const navigationMenuTrigger = tv({
  base: 'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
});

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className={navigationMenuTrigger({ className })} {...props}>
    {children}{' '}
    <ChevronDown
      className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

// NavigationMenuContent

const navigationMenuContent = tv({
  base: 'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
});

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content ref={ref} className={navigationMenuContent({ className })} {...props} />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

// NavigationMenuLink

const NavigationMenuLink = NavigationMenuPrimitive.Link;

// NavigationMenuIndicator

const navigationMenuIndicator = tv({
  slots: {
    base: 'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
    inner: 'relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md',
  },
});

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => {
  const { base, inner } = navigationMenuIndicator();

  return (
    <NavigationMenuPrimitive.Indicator ref={ref} className={base({ className })} {...props}>
      <div className={inner()} />
    </NavigationMenuPrimitive.Indicator>
  );
});
NavigationMenuIndicator.displayName = NavigationMenuPrimitive.Indicator.displayName;

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuIndicator,
  navigationMenuViewport,
  navigationMenuTrigger,
};
