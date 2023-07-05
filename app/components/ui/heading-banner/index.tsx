import { cn } from '@/lib/cn';
import Link from '@/components/ui/link';

interface LinkType {
  href?: string;
  text: string;
  linkVariant?: 'linkLight' | 'linkDark';
}

interface HeadingBannerProps {
  title: string;
  color?: 'text-zinc-900' | 'text-zinc-50';
  description?: string;
  links?: LinkType[];
  className?: string;
  children?: React.ReactNode;
}

const HeadingBanner: React.FC<HeadingBannerProps> = ({
  title,
  color = 'text-zinc-900',
  description,
  links,
  className,
  children,
}) => {
  return (
    <div className={cn(color, className)}>
      <h2 className="my-5 text-5xl font-extrabold sm:text-7xl loading-text">
        {title}
      </h2>
      <p className="mt-10">
        <span className="text-lg sm:text-xl text-gray "> {description}</span>
      </p>
      {children}
      {links &&
        links.map((link, index) => (
          <div className="mt-10" key={index}>
            <Link
              key={link.href}
              href={link.href}
              size={'lg'}
              variant={link.linkVariant}>
              {link.text}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HeadingBanner;
