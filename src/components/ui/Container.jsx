import { clsx } from 'clsx';

export function Container({ children, className, narrow = false, ...props }) {
  return (
    <div
      className={clsx(
        'mx-auto px-4 md:px-8 lg:px-16',
        narrow ? 'max-w-[900px]' : 'max-w-[1400px]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;
