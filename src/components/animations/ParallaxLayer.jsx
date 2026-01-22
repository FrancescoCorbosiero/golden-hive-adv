import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { clsx } from 'clsx';

export function ParallaxLayer({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  ...props
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const multiplier = direction === 'up' ? -1 : 1;
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * speed * multiplier, -100 * speed * multiplier]
  );

  return (
    <motion.div
      ref={ref}
      className={clsx('will-change-transform', className)}
      style={{ y }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FloatingShape({
  className,
  color = 'gold',
  size = 200,
  blur = 80,
  delay = 0,
  ...props
}) {
  const colors = {
    gold: 'rgba(212, 160, 18, 0.12)',
    'gold-light': 'rgba(245, 197, 24, 0.10)',
    honey: 'rgba(255, 184, 0, 0.10)',
    amber: 'rgba(255, 191, 0, 0.08)',
    white: 'rgba(255, 255, 255, 0.03)',
  };

  return (
    <motion.div
      className={clsx('absolute rounded-full pointer-events-none', className)}
      style={{
        width: size,
        height: size,
        background: colors[color],
        filter: `blur(${blur}px)`,
      }}
      animate={{
        y: [0, -25, 0],
        x: [0, 12, 0],
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 10,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    />
  );
}

export default ParallaxLayer;
