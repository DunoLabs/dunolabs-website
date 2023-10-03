import { cn } from '@/lib/cn';
import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const LinkVariant = cva(' border-b-2 ', {
  variants: {
    variant: {
      linkLight: 'text-zinc-50 hover:text-zinc-50 ',
      linkDark: 'text-zinc-900 hover:text-zinc-900 ',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-xl',
    },
  },
  defaultVariants: {
    variant: 'linkLight',
    size: 'md',
  },
});

interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof LinkVariant> {
  children: React.ReactNode;
  variant?: 'linkLight' | 'linkDark';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  className?: string;
  external?: boolean;
}

const CustomLink: React.FC<LinkProps> = ({
  children,
  className,
  variant,
  size,
  href,
  target,
  external,
  ...attr
}: LinkProps) => {
  if (external) {
    return (
      <a
        className={cn(LinkVariant({ variant, size, className }))}
        href={href}
        rel="noopener noreferrer"
        target={target}
        {...attr}>
        <span className="link-text-content-wrapper">
          {children}
          <ArrowUpRight className="inline-block w-5 align-middle" />
        </span>
      </a>
    );
  } else {
    return (
      <Link
        href={href || ''}
        className={cn(LinkVariant({ variant, size, className }))}
        {...attr}>
        {children}
      </Link>
    );
  }
};

export default CustomLink;
