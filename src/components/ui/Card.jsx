import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Card({
  children,
  className,
  tilt = false,
  glow = false,
  glowColor = 'gold',
  elevated = false,
  variant = 'default',
  ...props
}) {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!tilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) / 25;
    const rotateY = (centerX - e.clientX) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const glowColors = {
    gold: 'rgba(212, 160, 18, 0.15)',
    honey: 'rgba(255, 184, 0, 0.15)',
    white: 'rgba(255, 255, 255, 0.08)',
  };

  const variants = {
    default: 'bg-bg-card border-accent-gold/10 hover:border-accent-gold/20',
    elevated: 'bg-bg-elevated border-accent-gold/15 hover:border-accent-gold/30',
    featured: 'bg-gradient-to-br from-accent-gold/10 to-transparent border-accent-gold/30 hover:border-accent-gold/50',
  };

  return (
    <motion.div
      ref={ref}
      className={clsx(
        'relative overflow-hidden',
        'backdrop-blur-xl',
        'border',
        'rounded-2xl',
        'transition-all duration-300',
        variants[variant],
        elevated && 'shadow-xl shadow-black/50',
        className
      )}
      style={{
        transformStyle: tilt ? 'preserve-3d' : undefined,
        boxShadow: glow ? `0 0 60px ${glowColors[glowColor]}` : undefined,
      }}
      animate={
        tilt
          ? {
              rotateX: rotate.x,
              rotateY: rotate.y,
              scale: rotate.x !== 0 || rotate.y !== 0 ? 1.02 : 1,
            }
          : {}
      }
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={tilt ? {} : { y: -6 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
