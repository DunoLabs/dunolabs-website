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
        "flex flex-col justify-center items-center h-screen",
        className
      )}
      {...attr}
    >
      {children}
    </div>
  );
};
export default ScreenCenter;

