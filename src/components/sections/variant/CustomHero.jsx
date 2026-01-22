import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Phone } from 'lucide-react';
import { Container } from '../../ui/Container';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';

export function CustomHero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212, 160, 18, 0.15), transparent),
            radial-gradient(ellipse 60% 40% at 80% 60%, rgba(184, 134, 11, 0.08), transparent),
            linear-gradient(180deg, #000000 0%, #080808 100%)
          `,
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent-gold/30"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <Badge variant="gold-outline" size="lg">
            <Sparkles className="w-4 h-4 mr-2" />
            Soluzioni Su Misura
          </Badge>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-fluid-4xl md:text-fluid-5xl lg:text-fluid-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="text-white">Il Tuo Store,</span>
          <br />
          <span className="gradient-text">Su Misura Per Te</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-text-secondary text-fluid-lg md:text-fluid-xl max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Niente piani preconfezionati. Analizziamo insieme le tue esigenze e
          creiamo una{' '}
          <span className="text-white font-medium">soluzione personalizzata</span>{' '}
          con un investimento chiaro e un supporto continuo.
        </motion.p>

        {/* Key points */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {[
            'Preventivo Personalizzato',
            'Pagamento Unico',
            'Supporto Continuo',
          ].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center gap-2 text-text-secondary"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <CheckCircle2 className="w-5 h-5 text-accent-gold" />
              <span>{item}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Button size="lg" className="group min-w-[280px]">
            <Phone className="w-5 h-5 mr-2" />
            Richiedi Un Preventivo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg">
            Scopri Il Processo
          </Button>
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="mt-8 text-text-muted text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          Consulenza gratuita, senza impegno
        </motion.p>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-accent-gold"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default CustomHero;
