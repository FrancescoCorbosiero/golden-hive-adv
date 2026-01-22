import { motion } from 'framer-motion';
import { Banknote, Link2, Ghost, Frown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const painPoints = [
  {
    icon: Banknote,
    title: 'Agenzie Tradizionali',
    description: '€500-1,500/mese fissi, anche quando vendi zero',
    highlight: '€500-1,500/mese',
  },
  {
    icon: Link2,
    title: 'Shopify + App + Temi',
    description: 'Costi nascosti che crescono senza controllo',
    highlight: 'Costi nascosti',
  },
  {
    icon: Ghost,
    title: 'Freelancer',
    description: 'Nessun supporto dopo il lancio, problemi irrisolti',
    highlight: 'Nessun supporto',
  },
  {
    icon: Frown,
    title: 'Fai Da Te',
    description: 'Settimane di lavoro, risultati mediocri, SEO inesistente',
    highlight: 'Settimane di lavoro',
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative section-padding overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
      }}
    >
      {/* Subtle warm gradient overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 50%, rgba(212, 160, 18, 0.1) 0%, transparent 60%)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Il Problema Con Le{' '}
            <span className="text-accent-gold">Soluzioni Tradizionali</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Ogni opzione ha i suoi limiti. Eccoti perché nessuna funziona davvero per chi vuole crescere.
          </p>
        </ScrollReveal>

        {/* Pain point cards grid */}
        <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <StaggerItem key={point.title}>
                <Card
                  className="p-6 md:p-8 h-full group border-accent-gold/20 hover:border-accent-gold/40"
                  tilt
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <IconComponent className="w-6 h-6 text-accent-gold" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {point.title}
                      </h3>
                      <p className="text-text-secondary">
                        {point.description.split(point.highlight).map((part, i, arr) => (
                          <span key={i}>
                            {part}
                            {i < arr.length - 1 && (
                              <span className="text-accent-gold font-medium">
                                {point.highlight}
                              </span>
                            )}
                          </span>
                        ))}
                      </p>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute top-3 right-3 w-2 h-2 bg-accent-gold rounded-full" />
                  </div>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom callout */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="text-text-muted text-lg italic">
            "Il problema non è trovare una soluzione.{' '}
            <span className="text-white">È trovare quella giusta.</span>"
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Problem;
