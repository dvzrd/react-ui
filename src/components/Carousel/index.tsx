'use client';

import * as React from 'react';
import useEmblaCarousel, { type UseEmblaCarouselType } from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { tv } from 'tailwind-variants';

import { Button } from '@/components/Button';

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: 'horizontal' | 'vertical';
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

// CarouselContext

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
};

// Carousel

const carousel = tv({ base: 'relative' });

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = 'horizontal', opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === 'horizontal' ? 'x' : 'y',
      },
      plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === 'ArrowRight') {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext],
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on('reInit', onSelect);
      api.on('select', onSelect);

      return () => {
        api?.off('select', onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={carousel({ className })}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  },
);
Carousel.displayName = 'Carousel';

// CarouselContent

const carouselContent = tv({
  slots: {
    base: 'flex',
    wrapper: 'overflow-hidden',
  },
  variants: {
    orientation: {
      horizontal: {
        base: '-ml-4',
      },
      vertical: {
        base: '-mt-4 flex-col',
      },
    },
  },
});

const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    const { base, wrapper } = carouselContent({ orientation });

    return (
      <div ref={carouselRef} className={wrapper()}>
        <div ref={ref} className={base({ className })} {...props} />
      </div>
    );
  },
);
CarouselContent.displayName = 'CarouselContent';

// CarouselItem

const carouselItem = tv({
  base: 'min-w-0 shrink-0 grow-0 basis-full',
  variants: {
    orientation: {
      horizontal: 'pl-4',
      vertical: 'pt-4',
    },
  },
});

const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={carouselItem({ orientation, className })}
        {...props}
      />
    );
  },
);
CarouselItem.displayName = 'CarouselItem';

// CarouselPrevious

const carouselDirection = tv({
  slots: {
    base: 'absolute h-8 w-8 rounded-full',
    icon: 'h-4 w-4',
  },
  variants: {
    orientation: {
      horizontal: {
        base: 'top-1/2 -translate-y-1/2',
      },
      vertical: {
        base: 'left-1/2 -translate-x-1/2 rotate-90',
      },
    },
  },
});

const carouselPrevious = tv({
  extend: carouselDirection,
  variants: {
    orientation: {
      horizontal: {
        base: '-left-12',
      },
      vertical: {
        base: '-top-12',
      },
    },
  },
});

const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    const { base, icon } = carouselPrevious({ orientation });

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={base({ className })}
        disabled={!canScrollPrev}
        onClick={scrollPrev}
        {...props}
      >
        <ArrowLeft className={icon()} />
        <span className="sr-only">Previous slide</span>
      </Button>
    );
  },
);
CarouselPrevious.displayName = 'CarouselPrevious';

// CarouselNext

const carouselNext = tv({
  extend: carouselDirection,
  variants: {
    orientation: {
      horizontal: {
        base: '-right-12',
      },
      vertical: {
        base: '-bottom-12',
      },
    },
  },
});

const CarouselNext = React.forwardRef<HTMLButtonElement, React.ComponentProps<typeof Button>>(
  ({ className, variant = 'outline', size = 'icon', ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    const { base, icon } = carouselNext({ orientation });

    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        className={base({ className })}
        disabled={!canScrollNext}
        onClick={scrollNext}
        {...props}
      >
        <ArrowRight className={icon()} />
        <span className="sr-only">Next slide</span>
      </Button>
    );
  },
);
CarouselNext.displayName = 'CarouselNext';

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  carousel,
  carouselContent,
  carouselItem,
  carouselNext,
  carouselPrevious,
};
