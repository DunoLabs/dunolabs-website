import ViewContainer from "@/components/layouts/ViewContainer";
import Button from "../Buttons";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "@/components/ui/Link";

interface LinkType {
  href: string;
  text: string;
  linkVariant?: "linkLight" | "linkDark";
}

interface HeadingBannerProps {
  title: string;
  color?: "text-zinc-900" | "text-zinc-50";
  description?: string;
  links?: LinkType[];
  className?: string;
  children?: React.ReactNode;
}

const HeadingBanner: React.FC<HeadingBannerProps> = ({
  title,
  color = "text-zinc-900",
  description,
  links,
  className,
  children,
}) => {
  return (
    <div className={cn(color, className)}>
      <h2 className="my-5 text-6xl font-extrabold sm:text-7xl">{title}</h2>
      <p className="mt-10">
        <span className="text-lg sm:text-xl text-gray">{description}</span>
      </p>
      {children}
      {links &&
        links.map((link) => (
          <div className="mt-10">
            <Link
              key={link.href}
              href={link.href}
              size={"lg"}
              variant={link.linkVariant}
            >
              {link.text}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HeadingBanner;
