import React from "react";

interface FixedProps {
  children: React.ReactNode;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Fixed: React.FC<FixedProps> = ({
  children,
  top = 0,
  bottom = 0,
  left = 0,
  right = 0,
}) => {
  return (
    <div className="fixed" style={{ top, bottom, left, right }}>
      {children}
    </div>
  );
};

export default Fixed;

