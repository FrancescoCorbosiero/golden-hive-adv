import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Card({
  children,
  className,
  tilt = false,
  glow = false,
  glowColor = 'lime',
  elevated = false,
  ...props
}) {
  const ref = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!tilt || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const rotateX = (e.clientY - centerY) / 20;
    const rotateY = (centerX - e.clientX) / 20;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const glowColors = {
    lime: 'rgba(204, 255, 0, 0.15)',
    gold: 'rgba(245, 166, 35, 0.15)',
    blue: 'rgba(0, 212, 255, 0.15)',
    coral: 'rgba(255, 107, 107, 0.15)',
  };

  return (
    <motion.div
      ref={ref}
      className={clsx(
        'relative overflow-hidden',
        'bg-white/[0.03] backdrop-blur-xl',
        'border border-white/[0.08]',
        'rounded-2xl',
        'transition-colors duration-300',
        'hover:bg-white/[0.05] hover:border-white/[0.12]',
        elevated && 'shadow-xl',
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
      whileHover={tilt ? {} : { y: -8, scale: 1.02 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
