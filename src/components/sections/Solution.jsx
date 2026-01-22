import { motion } from 'framer-motion';
import { Check, ArrowRight, Wallet, Users, Shield } from 'lucide-react';
import { Container } from '../ui/Container';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { FloatingShape } from '../animations/ParallaxLayer';

const valuePoints = [
  {
    text: 'Tu investi nel setup (una tantum)',
    icon: Wallet,
  },
  {
    text: 'Io investo nel tuo successo (guadagno solo se tu guadagni)',
    icon: Users,
  },
  {
    text: 'Entrambi protetti con min/max cap',
    icon: Shield,
  },
];

const flowSteps = ['Setup', 'Launch', 'Growth', 'Shared Success'];

export function Solution() {
  return (
    <section
      id="solution"
      className="relative section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #1a150a 50%, #0a0a0a 100%)',
        }}
      />

      {/* Floating shapes */}
      <FloatingShape
        className="top-[20%] right-[5%]"
        color="gold"
        size={200}
        blur={80}
        delay={1}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            La Logica del{' '}
            <span className="text-accent-gold text-shadow-glow">Revenue Share</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Un modello che allinea i nostri interessi. Quando tu vinci, vinco anch'io.
          </p>
        </ScrollReveal>

        {/* Value points */}
        <StaggerContainer className="max-w-3xl mx-auto mb-20">
          {valuePoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <StaggerItem key={index}>
                <motion.div
                  className="flex items-center gap-4 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] mb-4 last:mb-0"
                  whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    borderColor: 'rgba(212, 160, 18, 0.2)',
                    x: 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-accent-gold" />
                  </div>
                  <p className="text-lg text-white font-medium">{point.text}</p>
                  <motion.div
                    className="ml-auto"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  >
                    <div className="w-8 h-8 rounded-full bg-accent-gold/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-accent-gold" />
                    </div>
                  </motion.div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Flow diagram */}
        <ScrollReveal delay={0.2}>
          <div className="relative max-w-4xl mx-auto">
            {/* Connecting line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-gold/20 via-accent-gold to-accent-gold/20 -translate-y-1/2 hidden md:block"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              style={{ originX: 0 }}
            />

            {/* Flow steps */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
              {flowSteps.map((step, index) => (
                <motion.div
                  key={step}
                  className="relative flex flex-col items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  {/* Step circle */}
                  <motion.div
                    className={`
                      w-16 h-16 rounded-full flex items-center justify-center
                      font-bold text-lg relative z-10
                      ${
                        index === flowSteps.length - 1
                          ? 'bg-accent-gold text-black'
                          : 'bg-bg-elevated border-2 border-white/20 text-white'
                      }
                    `}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>

                  {/* Step label */}
                  <p
                    className={`
                      mt-4 font-medium text-center
                      ${
                        index === flowSteps.length - 1
                          ? 'text-accent-gold'
                          : 'text-text-secondary'
                      }
                    `}
                  >
                    {step}
                  </p>

                  {/* Arrow between steps (mobile) */}
                  {index < flowSteps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-text-muted mt-4 md:hidden" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom highlight */}
        <ScrollReveal delay={0.4} className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent-gold/10 border border-accent-gold/20">
            <span className="text-accent-gold font-semibold">Risultato</span>
            <span className="text-white">Crescita condivisa, rischio ridotto</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Solution;
