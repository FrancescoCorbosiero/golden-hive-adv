import { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { formatCurrency } from '../../utils/formatCurrency';

export function NumberCounter({
  value,
  duration = 1.5,
  format = 'number',
  prefix = '',
  suffix = '',
  decimals = 0,
  className,
  ...props
}) {
  const [ref, isInView] = useInView({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (current) => {
    const rounded = decimals > 0
      ? current.toFixed(decimals)
      : Math.round(current);

    if (format === 'currency') {
      return formatCurrency(rounded, { decimals });
    }
    if (format === 'percentage') {
      return `${rounded}%`;
    }
    return new Intl.NumberFormat('it-IT').format(rounded);
  });

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, value, spring, hasAnimated]);

  return (
    <span ref={ref} className={className} {...props}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function AnimatedPrice({
  value,
  className,
  size = 'default',
  ...props
}) {
  const sizes = {
    small: 'text-2xl md:text-3xl',
    default: 'text-4xl md:text-5xl',
    large: 'text-5xl md:text-6xl',
  };

  return (
    <div className={className} {...props}>
      <span className="text-text-secondary text-lg">€</span>
      <NumberCounter
        value={value}
        format="number"
        className={`font-bold ${sizes[size]}`}
      />
    </div>
  );
}

export default NumberCounter;
