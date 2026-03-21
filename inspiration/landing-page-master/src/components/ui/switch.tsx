'use client';

import * as React from 'react';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const switchVariants = cva(
  'peer inline-flex h-[1.7rem] w-12 shrink-0 cursor-pointer items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80',
        secondary:
          'data-[state=checked]:bg-secondary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80',
        ternary:
          'data-[state=checked]:bg-accent data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

const switchThumbVariants = cva(
  'pointer-events-none block size-5 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[115%] data-[state=unchecked]:translate-x-[15%]',
  {
    variants: {
      variant: {
        primary:
          'bg-background data-[state=checked]:bg-primary-foreground dark:data-[state=unchecked]:bg-foreground',
        secondary:
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-secondary-foreground',
        ternary:
          'bg-background data-[state=checked]:bg-accent-foreground dark:data-[state=unchecked]:bg-foreground',
      },
    },
    defaultVariants: {
      variant: 'secondary',
    },
  },
);

interface SwitchProps
  extends React.ComponentProps<typeof SwitchPrimitive.Root>,
    VariantProps<typeof switchVariants> {}

function Switch({ className, variant, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(switchVariants({ variant }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(switchThumbVariants({ variant }))}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
