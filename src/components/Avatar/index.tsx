'use client';

import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { tv } from 'tailwind-variants';

// Avatar

const avatar = tv({
  base: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
});

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => <AvatarPrimitive.Root ref={ref} className={avatar({ className })} {...props} />);
Avatar.displayName = AvatarPrimitive.Root.displayName;

// AvatarImage

const avatarImage = tv({ base: 'aspect-square h-full w-full' });

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={avatarImage({ className })} {...props} />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

// AvatarFallback

const avatarFallback = tv({ base: 'flex h-full w-full items-center justify-center rounded-full bg-muted' });

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback ref={ref} className={avatarFallback({ className })} {...props} />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { Avatar, AvatarImage, AvatarFallback };
