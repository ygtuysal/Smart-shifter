import React from 'react';
import { motion } from 'framer-motion';

interface DotLoaderProps {
  colors?: string[];
  size?: number;
  duration?: number;
}

const DotLoader: React.FC<DotLoaderProps> = ({
  colors = ['#FF0000', '#00FF00', '#0000FF'],
  size = 8,
  duration = 0.4,
}) => {
  const bounceTransition = {
    y: {
      duration,
      yoyo: Infinity,
      ease: 'easeInOut',
    },
  };

  const dotStyle: React.CSSProperties = {
    width: size,
    height: size,
    marginRight: 4,
    borderRadius: '50%',
    display: 'inline-block',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      {colors.map((color, index) => (
        <motion.span
          key={index}
          style={{ ...dotStyle, backgroundColor: color }}
          animate={{ y: ['100%', '-100%'] }}
          transition={{ ...bounceTransition, delay: index * 0.2 }}
        />
      ))}
    </div>
  );
};

export default DotLoader;
