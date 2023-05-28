import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";

const LinkVarient = cva(" border-b-2 ", {
  variants: {
    variant: {
      linkLight: "text-zinc-50 hover:text-zinc-50 ",
      linkDark: "text-zinc-900 hover:text-zinc-900 ",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-xl",
    },
  },

  defaultVariants: {
    variant: "linkLight",
    size: "md",
  },
});
interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof LinkVarient> {
  children: React.ReactNode;
  variant?: "linkLight" | "linkDark";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  className?: string;
}

const Link = ({
  children,
  className,
  variant,
  size,
  href,
  target,
  ...attr
}: LinkProps) => {
  return (
    <a
      className={cn(LinkVarient({ variant, size, className }))}
      href={href}
      rel="noopener noreferrer"
      target={target}
      {...attr}
    >
      {children}
    </a>
  );
};

export default Link;
