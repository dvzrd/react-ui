import { tv, type VariantProps } from 'tailwind-variants';
import * as React from 'react';

// Card

const card = tv({
  base: 'border',
  variants: {
    variant: {
      default: 'bg-card text-card-foreground',
      destructive: 'bg-destructive text-destructive-foreground',
      secondary: 'bg-secondary text-secondary-foreground',
      ghost: 'bg-transparent border-transparent text-card-foreground !shadow-none',
    },
    size: {
      default: 'p-4 rounded-md shadow-md',
      sm: 'p-2 rounded-sm shadow-sm',
      lg: 'p-8 rounded-lg shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof card> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, variant, size, ...props }, ref) => (
  <div ref={ref} className={card({ variant, size, className })} {...props} />
));
Card.displayName = 'Card';

// CardHeader

const cardHeader = tv({ base: 'flex flex-col gap-2 p-6' });

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardHeader> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <header ref={ref} className={cardHeader({ className })} {...props} />
));
CardHeader.displayName = 'CardHeader';

// CardTitle

const cardTitle = tv({ base: 'text-2xl font-semibold leading-none tracking-tight' });

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof cardTitle> {}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({ children, className, ...props }, ref) => (
  <h3 ref={ref} className={cardTitle({ className })} {...props}>
    {children}
  </h3>
));
CardTitle.displayName = 'CardTitle';

// Card Description

const cardDescription = tv({ base: 'text-sm' });

export interface CardDescriptionProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof cardDescription> {}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => (
  <p ref={ref} className={cardDescription({ className })} {...props} />
));
CardDescription.displayName = 'CardDescription';

// CardContent

const cardContent = tv({ base: 'px-6 py-0' });

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardContent> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <div ref={ref} className={cardContent({ className })} {...props} />
));
CardContent.displayName = 'CardContent';

// CardFooter

const cardFooter = tv({ base: 'flex items-center p-6' });

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardFooter> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <footer ref={ref} className={cardFooter({ className })} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, card };
