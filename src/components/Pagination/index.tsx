import * as React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { tv } from 'tailwind-variants';

import { ButtonProps, button } from '@/components/Button';

// Pagination

const pagination = tv({
  base: 'mx-auto flex w-full justify-center',
});

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <nav role="navigation" aria-label="pagination" className={pagination({ className })} {...props} />
);
Pagination.displayName = 'Pagination';

// PaginationContent

const paginationContent = tv({
  base: 'flex flex-row items-center gap-1',
});

const PaginationContent = React.forwardRef<HTMLUListElement, React.ComponentProps<'ul'>>(
  ({ className, ...props }, ref) => <ul ref={ref} className={paginationContent({ className })} {...props} />,
);
PaginationContent.displayName = 'PaginationContent';

// PaginationItem

const PaginationItem = React.forwardRef<HTMLLIElement, React.ComponentProps<'li'>>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
));
PaginationItem.displayName = 'PaginationItem';

// PaginationLink

const paginationLink = tv({
  slots: {
    base: 'gap-1 pl-2.5',
    icon: 'h-4 w-4',
  },
});

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ButtonProps, 'size'> &
  React.ComponentProps<'a'>;

const PaginationLink = ({ children, className, isActive, size = 'icon', ...props }: PaginationLinkProps) => (
  <a
    aria-current={isActive ? 'page' : undefined}
    className={button({
      variant: isActive ? 'outline' : 'ghost',
      size,
      className,
    })}
    {...props}
  >
    {children}
  </a>
);
PaginationLink.displayName = 'PaginationLink';

// PaginationPrevious

const PaginationPrevious = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => {
  const { base, icon } = paginationLink();

  return (
    <PaginationLink aria-label="Go to previous page" size="default" className={base({ className })} {...props}>
      <ChevronLeft className={icon()} />
      <span>Previous</span>
    </PaginationLink>
  );
};
PaginationPrevious.displayName = 'PaginationPrevious';

// PaginationNext

const PaginationNext = ({ className, ...props }: React.ComponentProps<typeof PaginationLink>) => {
  const { base, icon } = paginationLink();

  return (
    <PaginationLink aria-label="Go to next page" size="default" className={base({ className })} {...props}>
      <span>Next</span>
      <ChevronRight className={icon()} />
    </PaginationLink>
  );
};
PaginationNext.displayName = 'PaginationNext';

const paginationEllipsis = tv({
  slots: {
    base: 'flex h-9 w-9 items-center justify-center',
    icon: 'h-4 w-4',
  },
});

const PaginationEllipsis = ({ className, ...props }: React.ComponentProps<'span'>) => {
  const { base, icon } = paginationEllipsis();

  return (
    <span aria-hidden className={base({ className })} {...props}>
      <MoreHorizontal className={icon()} />
      <span className="sr-only">More pages</span>
    </span>
  );
};
PaginationEllipsis.displayName = 'PaginationEllipsis';

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
