import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/lib/cn';

const buttonVariants = cva(
  'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none dark:hover:bg-zinc-800 dark:hover:text-zinc-100 disabled:opacity-50 dark:focus:ring-zinc-400 disabled:pointer-events-none dark:focus:ring-offset-zinc-900 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800 transition duration-300 ease-in-out hover:scale-110 p-0 cursor-pointer',
  {
    variants: {
      variant: {
        transparent:
          'flex items-center justify-center gap-2 rounded-xl border-4 backdrop-blur-md bg-white/50 border-zinc-900 px-8 py-4 font-bold shadow-[6px_6px_0_0] shadow-zinc-900 transition duration-300 ease-in-out hover:scale-110 hover:border-800',
        default:
          'bg-zinc-900 text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900',
        destructive:
          'bg-red-500 text-zinc-50 hover:bg-red-600 dark:hover:bg-red-600',
        outline:
          'bg-transparent border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-100',
        subtle:
          'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100',
        ghost:
          'bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-800 dark:text-zinc-100 dark:hover:text-zinc-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
        linkDark:
          'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-zinc-900 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent px-0',
        linkLight:
          'bg-transparent dark:bg-transparent underline-offset-4 underline text-zinc-50 dark:text-zinc-100 hover:bg-transparent dark:hover:bg-transparent px-0',
        white: 'bg-white text-zinc-900 hover:bg-zinc-50 shadow-zinc-900',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-2 rounded-md',
        lg: 'h-11 px-8 rounded-md',
      },
      border: {
        default: 'border-2',
        borderDark: 'border-2 border-zinc-900',
        borderLight: 'border-2 border-white',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      border: 'none',
    },
  },
);

export interface ButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, asChild = false, size, border, ...props }, ref) => {
    const Component = asChild ? Slot : 'a';
    return (
      <Component
        className={cn(buttonVariants({ variant, size, border, className }))}
        ref={ref}
        target={asChild ? undefined : '_blank'}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
