import { CSSProperties } from "react";
import { cn } from "./utils";

interface FixedProps {
  children: React.ReactNode;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  zIndex?: number;
  style?: CSSProperties;
  className?: string;
}

const Fixed: React.FC<FixedProps> = ({
  children,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
  zIndex = 10,
  className,
  style,
}) => {
  const position = `${top ?? "auto"} ${right ?? "auto"} ${bottom ?? "auto"} ${
    left ?? "auto"
  }`;

  return (
    <div
      className={cn(
        `top-0 right-0 bottom-0 left-0 w-full ${position}`,
        className
      )}
      style={
        {
          position: "fixed",
          zIndex,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};

export default Fixed;
