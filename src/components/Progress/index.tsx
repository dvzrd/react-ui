'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { tv } from 'tailwind-variants';

const progress = tv({
  slots: {
    base: 'relative h-4 w-full overflow-hidden rounded-full bg-secondary',
    indicator: 'h-full w-full flex-1 bg-primary transition-all',
  },
});

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => {
  const { base, indicator } = progress();

  return (
    <ProgressPrimitive.Root ref={ref} className={base({ className })} {...props}>
      <ProgressPrimitive.Indicator
        className={indicator()}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
