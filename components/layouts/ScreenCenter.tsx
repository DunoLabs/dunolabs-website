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
        "flex flex-col items-center justify-center min-h-screen mx-auto max-w-7xl ",
        className
      )}
      {...attr}
    >
      {children}
    </div>
  );
};
export default ScreenCenter;
