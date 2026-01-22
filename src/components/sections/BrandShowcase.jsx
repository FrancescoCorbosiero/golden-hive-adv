import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { ScrollReveal } from '../animations/ScrollReveal';

// Stylized bee SVG logo
function BeeLogo({ className = '', animate = true }) {
  return (
    <motion.svg
      viewBox="0 0 120 120"
      className={className}
      initial={animate ? { scale: 0.8, opacity: 0 } : false}
      whileInView={animate ? { scale: 1, opacity: 1 } : false}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Glow filter */}
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5C518" />
          <stop offset="50%" stopColor="#D4A012" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(245, 197, 24, 0.6)" />
          <stop offset="100%" stopColor="rgba(245, 197, 24, 0.1)" />
        </linearGradient>
      </defs>

      {/* Wings */}
      <motion.ellipse
        cx="35"
        cy="45"
        rx="20"
        ry="28"
        fill="url(#wingGradient)"
        stroke="#D4A012"
        strokeWidth="1"
        opacity="0.8"
        animate={animate ? {
          rotate: [0, -5, 0],
          scale: [1, 1.02, 1]
        } : false}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
        style={{ transformOrigin: '45px 50px' }}
      />
      <motion.ellipse
        cx="85"
        cy="45"
        rx="20"
        ry="28"
        fill="url(#wingGradient)"
        stroke="#D4A012"
        strokeWidth="1"
        opacity="0.8"
        animate={animate ? {
          rotate: [0, 5, 0],
          scale: [1, 1.02, 1]
        } : false}
        transition={{ duration: 0.3, repeat: Infinity, repeatType: 'reverse' }}
        style={{ transformOrigin: '75px 50px' }}
      />

      {/* Body */}
      <ellipse cx="60" cy="65" rx="22" ry="30" fill="url(#goldGradient)" filter="url(#glow)" />

      {/* Stripes */}
      <rect x="40" y="55" width="40" height="6" rx="3" fill="#1a1a1a" opacity="0.8" />
      <rect x="42" y="67" width="36" height="5" rx="2.5" fill="#1a1a1a" opacity="0.8" />
      <rect x="44" y="78" width="32" height="4" rx="2" fill="#1a1a1a" opacity="0.7" />

      {/* Head */}
      <circle cx="60" cy="32" r="14" fill="url(#goldGradient)" />

      {/* Eyes */}
      <circle cx="54" cy="30" r="4" fill="#1a1a1a" />
      <circle cx="66" cy="30" r="4" fill="#1a1a1a" />
      <circle cx="55" cy="29" r="1.5" fill="white" opacity="0.8" />
      <circle cx="67" cy="29" r="1.5" fill="white" opacity="0.8" />

      {/* Antennae */}
      <motion.path
        d="M52 20 Q48 10 44 8"
        stroke="#D4A012"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={animate ? { d: ['M52 20 Q48 10 44 8', 'M52 20 Q50 12 46 10', 'M52 20 Q48 10 44 8'] } : false}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.path
        d="M68 20 Q72 10 76 8"
        stroke="#D4A012"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        animate={animate ? { d: ['M68 20 Q72 10 76 8', 'M68 20 Q70 12 74 10', 'M68 20 Q72 10 76 8'] } : false}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <circle cx="44" cy="8" r="3" fill="#F5C518" />
      <circle cx="76" cy="8" r="3" fill="#F5C518" />

      {/* Stinger */}
      <path d="M60 95 L56 102 L60 108 L64 102 Z" fill="#B8860B" />
    </motion.svg>
  );
}

// Honeycomb pattern
function HoneycombPattern() {
  const hexagons = [];
  const rows = 4;
  const cols = 8;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const x = col * 52 + (row % 2) * 26;
      const y = row * 45;
      const delay = (row + col) * 0.05;

      hexagons.push(
        <motion.path
          key={`${row}-${col}`}
          d="M26 0 L52 15 L52 45 L26 60 L0 45 L0 15 Z"
          transform={`translate(${x}, ${y})`}
          fill="none"
          stroke="rgba(212, 160, 18, 0.15)"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay, duration: 0.5 }}
        />
      );
    }
  }

  return (
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
      <g transform="translate(-20, -20)">
        {hexagons}
      </g>
    </svg>
  );
}

export function BrandShowcase() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />

      {/* Honeycomb pattern */}
      <div className="absolute inset-0 opacity-50">
        <HoneycombPattern />
      </div>

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-gold/5 blur-[100px]" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo showcase */}
          <ScrollReveal>
            <div className="mb-12">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <BeeLogo className="w-32 h-32 md:w-40 md:h-40 mx-auto" />
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Brand name */}
          <ScrollReveal delay={0.2}>
            <motion.h2
              className="text-fluid-4xl md:text-fluid-5xl font-black tracking-tight mb-4"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              <span className="text-white">Golden</span>{' '}
              <span className="gradient-text">Hive</span>
            </motion.h2>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-text-secondary text-fluid-lg tracking-wide uppercase mb-8">
              Commerce
            </p>
          </ScrollReveal>

          {/* Tagline */}
          <ScrollReveal delay={0.4}>
            <div className="relative inline-block">
              <p className="text-fluid-xl md:text-fluid-2xl text-white font-medium mb-2">
                "Costruiamo Il Tuo Alveare Digitale"
              </p>
              <p className="text-text-secondary">
                Dove ogni vendita è dolce come il miele
              </p>
            </div>
          </ScrollReveal>

          {/* Brand values */}
          <ScrollReveal delay={0.5}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-12">
              {[
                { label: 'Qualità', sublabel: 'Premium' },
                { label: 'Trasparenza', sublabel: 'Totale' },
                { label: 'Crescita', sublabel: 'Condivisa' },
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  className="text-center px-6 py-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-accent-gold font-semibold text-lg">{value.label}</p>
                  <p className="text-text-muted text-sm">{value.sublabel}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default BrandShowcase;
