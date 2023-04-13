import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 disabled:opacity-50 dark:focus:ring-zinc-400 disabled:pointer-events-none dark:focus:ring-offset-zinc-900 data-[state=open]:bg-zinc-100 dark:data-[state=open]:bg-zinc-800",
  {
    variants: {
      variant: {
        transparent:
          "flex items-center justify-center gap-2 rounded-xl border-4 backdrop-blur-md bg-white/50 border-zinc-900 px-8 py-4 font-bold shadow-[6px_6px_0_0] shadow-zinc-900 transition duration-300 ease-in-out hover:scale-110 hover:border-800",
        default:
          "flex items-center justify-center gap-2 rounded-xl border-4 bg-white  border-zinc-900 px-8 py-4 font-bold shadow-[6px_6px_0_0] shadow-zinc-900 transition duration-300 ease-in-out hover:scale-110 hover:border-800",
        dark: "bg-zinc-900 text-white hover:bg-zinc-800 shadow-zinc-900",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

export default Button;
