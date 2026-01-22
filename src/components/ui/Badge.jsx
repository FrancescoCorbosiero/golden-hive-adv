import { clsx } from 'clsx';

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-white/5 text-text-secondary border-white/10',
    gold: 'bg-accent-gold text-black border-accent-gold',
    'gold-outline': 'bg-accent-gold/10 text-accent-gold border-accent-gold/30',
    'gold-subtle': 'bg-accent-gold/5 text-accent-gold-light border-accent-gold/20',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    error: 'bg-error/10 text-error border-error/20',
    outline: 'bg-transparent text-text-secondary border-accent-gold/20',
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
