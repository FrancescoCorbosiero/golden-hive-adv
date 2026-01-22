import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Container } from '../ui/Container';
import { FloatingShape } from '../animations/ParallaxLayer';

export function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const words = ['Pago', 'Solo', 'Se', 'Vendi'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Gradient mesh overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(204, 255, 0, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 80% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating shapes */}
      <FloatingShape
        className="top-[10%] left-[5%]"
        color="lime"
        size={300}
        blur={100}
        delay={0}
      />
      <FloatingShape
        className="bottom-[20%] right-[10%]"
        color="blue"
        size={250}
        blur={90}
        delay={2}
      />
      <FloatingShape
        className="top-[60%] left-[60%]"
        color="purple"
        size={200}
        blur={80}
        delay={4}
      />

      {/* Content */}
      <Container className="relative z-10 text-center py-24">
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="outline" className="mb-8">
            Revenue Share Model
          </Badge>
        </motion.div>

        {/* Main headline with word animation */}
        <h1 className="text-fluid-5xl md:text-fluid-6xl font-bold mb-6 tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className={`inline-block mr-4 ${
                word === 'Vendi' ? 'text-accent-lime text-shadow-glow' : ''
              }`}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-fluid-lg md:text-fluid-xl text-text-secondary max-w-2xl mx-auto mb-12 text-balance"
        >
          Store WooCommerce professionali con pricing che si adatta al tuo business.
          Tu investi nel setup, io investo nel tuo successo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="large"
            magnetic
            onClick={() => scrollToSection('final-cta')}
          >
            Prenota Una Call Gratuita
          </Button>
          <Button
            variant="secondary"
            size="large"
            onClick={() => scrollToSection('pricing')}
          >
            Scopri I Piani
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {['7-14 giorni', 'SEO Incluso', 'Zero Sorprese'].map((badge, i) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-text-secondary text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-lime" />
              {badge}
            </div>
          ))}
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection('problem')}
          className="text-text-secondary hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scorri verso il basso"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
