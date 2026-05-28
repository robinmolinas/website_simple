import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');

  return (
    <p
      ref={ref}
      className={`relative flex flex-wrap justify-center text-center ${className}`}
      style={style}
    >
      {words.map((word, i) => (
        <AnimatedWord
          key={i}
          word={word}
          index={i}
          total={words.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </p>
  );
}

interface AnimatedWordProps {
  word: string;
  index: number;
  total: number;
  scrollYProgress: any;
}

function AnimatedWord({ word, index, total, scrollYProgress }: AnimatedWordProps) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <motion.span
      className="inline-block mx-[0.15em] my-[0.05em]"
      style={{ opacity }}
    >
      {word}
    </motion.span>
  );
}
