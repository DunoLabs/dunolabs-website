import { cn } from "@/lib/utils";

interface ViewContainerProps {
  children: React.ReactNode;
}

const ViewContainer: React.FC<ViewContainerProps> = ({ children, ...attr }) => (
  <div className={cn("px-4 mx-auto max-w-7xl sm:px-6 lg:px-8")} {...attr}>
    {children}
  </div>
);

export default ViewContainer;

