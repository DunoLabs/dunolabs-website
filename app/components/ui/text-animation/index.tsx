'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, Variants } from 'framer-motion';

type TextAnimationProps = {
  children: string | string[] | React.ReactNode;
  threshold?: number;
};

const TextAnimation: React.FC<TextAnimationProps> = ({
  children,
  threshold = 0.2,
}) => {
  const textRef = useRef<HTMLSpanElement>(null);
  const controls = useAnimation();
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animationTriggered) {
            controls.start('visible');
            setAnimationTriggered(true);
          }
        });
      },
      { threshold },
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(textRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls, animationTriggered, threshold]);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  let text: React.ReactNode[];

  if (typeof children === 'string') {
    text = children.trim().split('');
  } else {
    text = React.Children.toArray(children);
  }

  return (
    <span ref={textRef} className="fade">
      {text.map((character, index) => (
        <motion.span
          key={index}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
          transition={{
            duration: 0.5,
            delay: index * 0.01,
          }}>
          {character}
        </motion.span>
      ))}
    </span>
  );
};

export default TextAnimation;
