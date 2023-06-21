import React, { useState, useEffect } from 'react';
import { cn } from './utils';

interface CustomCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  imageWidth?: string;
  imageHeight?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  children,
  image,
  imageWidth = '200px',
  imageHeight = '200px',
  ...attr
}) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [initialPosition, setInitialPosition] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setPosition({ x: e.clientX, y: e.clientY });
    setHidden(false);
  };

  // ON MOUSE WHEEL MOVE HIDE THE CURSOR
  const handleWheel = () => {
    setHidden(true);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  const handleMouseLeave = () => {
    setHidden(true);
  };

  const cursorStyle: React.CSSProperties = {
    position: 'fixed',
    left: position.x,
    top: position.y,
    zIndex: 9999,
    pointerEvents: 'none',
    width: imageWidth,
    height: imageHeight,
    backgroundImage: `url(${image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    transform: 'translate(-50%, -50%)', // Center the cursor on the mouse position
  };

  // this CSS to hide the default cursor for this element only
  const styles = `
    .custom-cursor-element {
      cursor: none;
    }
  `;

  return (
    <>
      {!hidden && <div style={cursorStyle} {...attr} />}
      <div
        className="custom-cursor-element"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}>
        {children}
      </div>
      <style>{styles}</style>
    </>
  );
};

export default CustomCursor;
