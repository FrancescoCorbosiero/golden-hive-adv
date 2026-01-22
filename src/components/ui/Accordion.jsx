import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export function Accordion({ items, className }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={clsx('space-y-3', className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => toggle(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden bg-white/[0.02]">
      <button
        onClick={onToggle}
        className={clsx(
          'w-full flex items-center justify-between p-5 text-left',
          'hover:bg-white/[0.03] transition-colors duration-200',
          'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold focus-visible:ring-inset'
        )}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          {item.icon && (() => {
            const IconComponent = item.icon;
            return <IconComponent className="w-5 h-5 text-accent-gold" />;
          })()}
          <span className="font-medium text-white">{item.question}</span>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-text-secondary" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 pb-5 text-text-secondary">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
