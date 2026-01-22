import { clsx } from 'clsx';

export function Badge({ children, variant = 'default', className, ...props }) {
  const variants = {
    default: 'bg-white/10 text-white/80 border-white/10',
    lime: 'bg-accent-lime text-black border-accent-lime',
    gold: 'bg-accent-gold text-black border-accent-gold',
    coral: 'bg-accent-coral text-white border-accent-coral',
    blue: 'bg-accent-blue text-black border-accent-blue',
    success: 'bg-success/20 text-success border-success/30',
    outline: 'bg-transparent text-white border-white/20',
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
