import { cn } from "@/lib/utils";

interface ScreenCenterProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

const ScreenCenter: React.FC<ScreenCenterProps> = ({
  children,
  className,
  attr,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-screen px-4 mx-auto max-w-7xl sm:px-6 lg:px-8",
        className
      )}
      {...attr}
    >
      {children}
    </div>
  );
};
export default ScreenCenter;
