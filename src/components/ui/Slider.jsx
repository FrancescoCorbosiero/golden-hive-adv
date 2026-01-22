import { clsx } from 'clsx';

export function Slider({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className,
  ...props
}) {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className={clsx('relative w-full', className)}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-input w-full h-3 appearance-none bg-transparent cursor-pointer"
        style={{
          '--slider-progress': `${percentage}%`,
        }}
        {...props}
      />
      <style>{`
        .slider-input {
          -webkit-appearance: none;
          background: linear-gradient(
            to right,
            #D4A012 0%,
            #D4A012 var(--slider-progress),
            rgba(212, 160, 18, 0.15) var(--slider-progress),
            rgba(212, 160, 18, 0.15) 100%
          );
          border-radius: 9999px;
        }

        .slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F5C518 0%, #D4A012 100%);
          cursor: pointer;
          border: 3px solid #000000;
          box-shadow: 0 0 20px rgba(212, 160, 18, 0.5);
          transition: all 0.2s ease;
        }

        .slider-input::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(212, 160, 18, 0.7);
        }

        .slider-input::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: linear-gradient(135deg, #F5C518 0%, #D4A012 100%);
          cursor: pointer;
          border: 3px solid #000000;
          box-shadow: 0 0 20px rgba(212, 160, 18, 0.5);
          transition: all 0.2s ease;
        }

        .slider-input::-moz-range-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 30px rgba(212, 160, 18, 0.7);
        }

        .slider-input::-moz-range-track {
          background: transparent;
        }

        .slider-input:focus {
          outline: none;
        }

        .slider-input:focus-visible::-webkit-slider-thumb {
          box-shadow: 0 0 0 4px rgba(212, 160, 18, 0.3), 0 0 30px rgba(212, 160, 18, 0.7);
        }
      `}</style>
    </div>
  );
}

export default Slider;
