import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  magnetic = false,
  className,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!magnetic || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    setPosition({
      x: distX * 0.3,
      y: distY * 0.3,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      'bg-accent-gold text-black hover:bg-accent-gold-light hover:shadow-[0_0_40px_rgba(212,160,18,0.4)]',
    secondary:
      'bg-transparent text-white border border-accent-gold/30 hover:bg-accent-gold/10 hover:border-accent-gold/50',
    ghost: 'bg-transparent text-text-secondary hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm font-medium',
    md: 'px-6 py-3 text-base font-semibold',
    lg: 'px-8 py-4 text-lg font-semibold',
    xl: 'px-10 py-5 text-xl font-bold',
  };

  return (
    <motion.button
      ref={ref}
      className={clsx(
        'relative inline-flex items-center justify-center overflow-hidden rounded-full transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black',
        'active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
        variants[variant],
        sizes[size] || sizes.md,
        className
      )}
      animate={magnetic ? { x: position.x, y: position.y } : {}}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: magnetic ? 1 : 1.03 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
