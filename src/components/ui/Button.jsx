import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

export function Button({
  children,
  variant = 'primary',
  size = 'default',
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
    primary: 'bg-accent-lime text-black font-semibold hover:bg-accent-lime-hover hover:shadow-[0_0_40px_rgba(204,255,0,0.3)]',
    secondary: 'bg-transparent text-white border border-white/20 hover:bg-white/5 hover:border-white/40',
    ghost: 'bg-transparent text-white hover:bg-white/5',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      ref={ref}
      className={clsx(
        'relative overflow-hidden rounded-full font-medium transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-lime focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary',
        'active:scale-95',
        variants[variant],
        sizes[size],
        className
      )}
      animate={magnetic ? { x: position.x, y: position.y } : {}}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: magnetic ? 1 : 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
