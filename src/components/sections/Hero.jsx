import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
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
        delay: i * 0.12,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const words = ['Pago', 'Solo', 'Se', 'Vendi'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Pure black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Subtle golden gradient mesh */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 20%, rgba(212, 160, 18, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(212, 160, 18, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating shapes - gold theme */}
      <FloatingShape
        className="top-[15%] left-[10%]"
        color="gold"
        size={350}
        blur={120}
        delay={0}
      />
      <FloatingShape
        className="bottom-[25%] right-[5%]"
        color="gold-light"
        size={280}
        blur={100}
        delay={3}
      />
      <FloatingShape
        className="top-[55%] left-[65%]"
        color="honey"
        size={220}
        blur={90}
        delay={5}
      />

      {/* Content */}
      <Container className="relative z-10 text-center py-24">
        {/* Pre-headline badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge variant="gold-outline" className="mb-8">
            Revenue Share Model
          </Badge>
        </motion.div>

        {/* Main headline with word animation */}
        <h1 className="text-fluid-5xl md:text-fluid-6xl font-bold mb-8 tracking-tight">
          {words.map((word, i) => (
            <motion.span
              key={word}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className={`inline-block mr-3 md:mr-5 ${
                word === 'Vendi' ? 'text-accent-gold text-shadow-gold' : 'text-white'
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
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-fluid-lg md:text-fluid-xl text-text-secondary max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
        >
          Store e-commerce professionali con un modello di pricing che si adatta
          al tuo business. Tu investi nel setup, noi investiamo nel tuo successo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            variant="primary"
            size="large"
            magnetic
            onClick={() => scrollToSection('final-cta')}
            className="group"
          >
            <span>Prenota Una Call Gratuita</span>
            <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
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
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {['Consegna in 7-14 giorni', 'SEO Ottimizzato', 'Supporto Dedicato'].map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-text-secondary text-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />
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
        transition={{ delay: 1.3, duration: 0.6 }}
      >
        <motion.button
          onClick={() => scrollToSection('problem')}
          className="text-text-muted hover:text-accent-gold transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scorri verso il basso"
        >
          <ChevronDown className="w-7 h-7" />
        </motion.button>
      </motion.div>
    </section>
  );
}

export default Hero;
