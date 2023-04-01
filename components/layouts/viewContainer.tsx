import { cn } from "@/lib/utils";

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  className,
  attr,
}) => (
  <div
    className={cn("px-4 mx-auto max-w-7xl sm:px-6 lg:px-8", className)}
    {...attr}
  >
    {children}
  </div>
);

export default ViewContainer;

