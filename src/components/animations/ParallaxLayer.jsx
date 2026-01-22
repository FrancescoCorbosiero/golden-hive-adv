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
  color = 'lime',
  size = 200,
  blur = 80,
  delay = 0,
  ...props
}) {
  const colors = {
    lime: 'rgba(204, 255, 0, 0.15)',
    blue: 'rgba(0, 212, 255, 0.15)',
    coral: 'rgba(255, 107, 107, 0.15)',
    gold: 'rgba(245, 166, 35, 0.15)',
    purple: 'rgba(139, 92, 246, 0.15)',
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
        y: [0, -30, 0],
        x: [0, 15, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      {...props}
    />
  );
}

export default ParallaxLayer;
