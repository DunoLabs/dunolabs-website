import React from 'react';
import { cn } from '@/lib/cn';

interface MarqueeProps {
  text: string | string[]; // Allow both single text and array of texts
  className?: string;
  separator?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  text,
  className = 'text-zinc-900',
  separator = '✦',
}) => {
  let repeatedText = '';

  if (typeof text === 'string') {
    repeatedText = text;
  } else if (Array.isArray(text)) {
    repeatedText = text.join(` ${separator} `);
  }

  repeatedText = `${repeatedText} ${separator} `.repeat(25).trim();

  return (
    <div className={cn('marquee', className)}>
      <div className="py-4 font-medium uppercase marquee__group">
        {repeatedText}
      </div>
    </div>
  );
};

export default Marquee;
