import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail, Clock } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { ScrollReveal } from '../../animations/ScrollReveal';

export function CustomCTA() {
  return (
    <section
      id="final-cta"
      className="relative section-padding overflow-hidden"
    >
      {/* Background with animated gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 100%, rgba(212, 160, 18, 0.15), transparent),
            radial-gradient(ellipse 50% 30% at 20% 80%, rgba(245, 197, 24, 0.08), transparent),
            linear-gradient(180deg, #0a0a0a 0%, #000000 100%)
          `,
        }}
      />

      {/* Animated glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full blur-[120px]"
        style={{ background: 'rgba(212, 160, 18, 0.1)' }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <ScrollReveal>
            <h2 className="text-fluid-3xl md:text-fluid-4xl lg:text-fluid-5xl font-bold mb-6">
              Pronto a Creare{' '}
              <span className="gradient-text">Il Tuo Store?</span>
            </h2>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={0.1}>
            <p className="text-text-secondary text-fluid-lg mb-10 max-w-2xl mx-auto">
              Prenota una consulenza gratuita di 30 minuti. Parliamo del tuo
              progetto e ti preparo un preventivo personalizzato senza impegno.
            </p>
          </ScrollReveal>

          {/* Main CTA */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="xl" className="group mb-8">
                <Phone className="w-5 h-5 mr-2" />
                Prenota La Tua Consulenza Gratuita
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Alternative contact */}
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-text-secondary">
              <a
                href="mailto:info@goldenhivecommerce.it"
                className="flex items-center gap-2 hover:text-accent-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@goldenhivecommerce.it
              </a>
              <div className="hidden sm:block w-px h-4 bg-white/20" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Rispondiamo entro 24h
              </div>
            </div>
          </ScrollReveal>

          {/* Trust badges */}
          <ScrollReveal delay={0.4} className="mt-12">
            <div className="flex flex-wrap justify-center gap-4 text-text-muted text-sm">
              <span>Nessun impegno</span>
              <span className="text-white/20">•</span>
              <span>Preventivo gratuito</span>
              <span className="text-white/20">•</span>
              <span>100% trasparenza</span>
            </div>
          </ScrollReveal>

          {/* Legal note */}
          <ScrollReveal delay={0.5} className="mt-8">
            <p className="text-text-muted text-xs">
              Prezzi IVA esclusa | Golden Hive Commerce
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default CustomCTA;
