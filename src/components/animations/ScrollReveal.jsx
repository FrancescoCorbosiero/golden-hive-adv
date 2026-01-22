import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { clsx } from 'clsx';

export function ScrollReveal({
  children,
  className,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  distance = 60,
  once = true,
  ...props
}) {
  const [ref, isInView] = useInView({ triggerOnce: once });

  const directions = {
    up: { y: distance, x: 0 },
    down: { y: -distance, x: 0 },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };

  const initial = {
    opacity: 0,
    ...directions[direction],
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    x: isInView ? 0 : directions[direction].x,
    y: isInView ? 0 : directions[direction].y,
  };

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial={initial}
      animate={animate}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 0.1,
  delayChildren = 0.1,
  ...props
}) {
  const [ref, isInView] = useInView();

  return (
    <motion.div
      ref={ref}
      className={clsx(className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
            delayChildren,
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, ...props }) {
  return (
    <motion.div
      className={clsx(className)}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default ScrollReveal;
