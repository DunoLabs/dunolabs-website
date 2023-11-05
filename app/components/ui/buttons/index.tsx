import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none dark:hover:bg-neutral-800 dark:hover:text-neutral-100 disabled:opacity-50 dark:focus:ring-neutral-400 disabled:pointer-events-none dark:focus:ring-offset-neutral-900 data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800 transition duration-300 ease-in-out hover:scale-110 p-0 cursor-pointer',
  {
    variants: {
      variant: {
        transparent:
          'flex items-center justify-center gap-2 rounded-xl border-4 backdrop-blur-md bg-white/50 border-neutral-900 px-8 py-4 font-bold shadow-[6px_6px_0_0] shadow-neutral-900 transition duration-300 ease-in-out hover:scale-110 hover:border-800',
        default: 'bg-neutral-900 text-neutral-50 hover:bg-neutral-800',
        destructive:
          'bg-red-500 text-neutral-50 hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-neutral-200 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100',
        subtle:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-200 dark:bg-neutral-700 dark:text-neutral-100',
        ghost:
          'bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-800 dark:text-neutral-100 dark:hover:text-neutral-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        linkDark:
          'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-neutral-900 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent px-0',
        linkLight:
          'bg-transparent dark:bg-transparent underline-offset-4 underline text-neutral-50 dark:text-neutral-100 hover:bg-transparent dark:hover:bg-transparent px-0',
        white:
          'bg-white text-neutral-900 hover:bg-neutral-50 shadow-neutral-900',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        xl: 'h-12 px-8 rounded-md',
        xxl: 'h-16 px-8 rounded-md',
      },
      border: {
        default: 'border-2',
        borderDark: 'border-2 border-neutral-900',
        borderLight: 'border-2 border-white',
        none: '',
      },
      width: {
        default: 'w-auto',
        full: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      border: 'none',
      width: 'default',
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  (
    {
      className,
      variant,
      asChild = false,
      size,
      border,
      width,
      onClick,
      ...props
    },
    ref,
  ) => {
    const Component = asChild ? Slot : 'a';
    return (
      <Component
        className={cn(
          buttonVariants({ variant, size, border, width, className }),
        )}
        ref={ref}
        target={asChild ? undefined : '_blank'}
        onClick={onClick}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';

export default Button;
