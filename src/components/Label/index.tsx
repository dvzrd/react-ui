'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, type VariantProps } from 'tailwind-variants';

const label = tv({
  base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
});

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof label> {}

const Label = React.forwardRef<React.ElementRef<typeof LabelPrimitive.Root>, LabelProps>(
  ({ className, ...props }, ref) => <LabelPrimitive.Root ref={ref} className={label({ className })} {...props} />,
);
Label.displayName = LabelPrimitive.Root.displayName;

export { Label, label };
