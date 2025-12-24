
import React, { useMemo } from 'react';

interface SnowEffectProps {
  count: number;
}

const SnowEffect: React.FC<SnowEffectProps> = ({ count }) => {
  const snowflakes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 10 + 5}px`,
      duration: `${Math.random() * 10 + 5}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {snowflakes.map((snow) => (
        <div
          key={snow.id}
          className="snow-particle"
          style={{
            left: snow.left,
            width: snow.size,
            height: snow.size,
            animationDuration: snow.duration,
            animationDelay: snow.delay,
            opacity: snow.opacity,
            boxShadow: '0 0 10px white'
          }}
        />
      ))}
    </div>
  );
};

export default SnowEffect;
