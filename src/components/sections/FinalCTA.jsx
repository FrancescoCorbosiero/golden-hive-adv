import { motion } from 'framer-motion';
import { Mail, Clock } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../animations/ScrollReveal';
import { FloatingShape } from '../animations/ParallaxLayer';

export function FinalCTA() {
  return (
    <section
      id="final-cta"
      className="relative section-padding overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0f1f0a 50%, #0a0a0a 100%)',
        }}
      />

      {/* Gradient mesh overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 30% 30%, rgba(204, 255, 0, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 70%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)
          `,
          backgroundSize: '200% 200%',
        }}
      />

      {/* Floating shapes */}
      <FloatingShape
        className="top-[10%] left-[10%]"
        color="lime"
        size={250}
        blur={100}
        delay={0}
      />
      <FloatingShape
        className="bottom-[20%] right-[15%]"
        color="blue"
        size={200}
        blur={80}
        delay={2}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main headline */}
          <ScrollReveal>
            <motion.h2
              className="text-fluid-4xl md:text-fluid-5xl font-bold mb-6"
              animate={{ textShadow: ['0 0 20px rgba(204, 255, 0, 0.3)', '0 0 40px rgba(204, 255, 0, 0.5)', '0 0 20px rgba(204, 255, 0, 0.3)'] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Pronto a{' '}
              <span className="text-accent-lime">Crescere Insieme</span>?
            </motion.h2>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-fluid-lg mb-10 text-balance">
              Prenota una call gratuita di 30 minuti. Nessun impegno, solo una
              conversazione per capire se possiamo aiutarti.
            </p>
          </ScrollReveal>

          {/* Primary CTA */}
          <ScrollReveal delay={0.2}>
            <motion.div
              className="mb-8"
              whileHover={{ scale: 1.02 }}
            >
              <Button
                variant="primary"
                size="large"
                magnetic
                className="text-xl px-10 py-5 animate-glow-pulse"
                onClick={() => window.open('https://calendly.com', '_blank')}
              >
                Prenota La Tua Call Gratuita
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Alternative contact */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <p className="text-text-secondary">O scrivici direttamente:</p>
              <a
                href="mailto:info@goldenhive.it"
                className="flex items-center gap-2 text-white hover:text-accent-lime transition-colors group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">info@goldenhive.it</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Response time */}
          <ScrollReveal delay={0.4}>
            <div className="flex items-center justify-center gap-2 text-text-muted text-sm">
              <Clock className="w-4 h-4" />
              <span>Rispondiamo entro 24h</span>
            </div>
          </ScrollReveal>

          {/* Trust footer */}
          <ScrollReveal delay={0.5} className="mt-12 pt-8 border-t border-white/10">
            <p className="text-text-muted text-sm">
              Prezzi IVA esclusa • Validi da Gennaio 2025
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default FinalCTA;
