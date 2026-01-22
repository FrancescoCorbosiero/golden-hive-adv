import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';

const clientBenefits = [
  {
    title: 'Rischio Ridotto',
    description: 'Se vendi poco, paghi poco',
    icon: '🛡️',
  },
  {
    title: 'Allineamento Interessi',
    description: 'Io voglio che tu venda',
    icon: '🎯',
  },
  {
    title: 'Cap Garantito',
    description: 'Mai sorprese, conosci il massimo',
    icon: '🔒',
  },
  {
    title: 'Flessibilità',
    description: 'Si adatta al tuo business',
    icon: '🔄',
  },
];

const providerBenefits = [
  {
    title: 'Upside Potential',
    description: 'Se hai successo, cresco con te',
    icon: '📈',
  },
  {
    title: 'Relazione Duratura',
    description: "Non 'faccio e sparisco'",
    icon: '🤝',
  },
  {
    title: 'Incentivo a Fare Bene',
    description: 'Il mio guadagno dipende dalla qualità',
    icon: '⭐',
  },
  {
    title: 'Clienti Seri',
    description: 'Chi paga revenue share è committed',
    icon: '💎',
  },
];

export function WhyRevenueShare() {
  return (
    <section
      id="why-revenue-share"
      className="relative section-padding overflow-hidden"
    >
      {/* Background with split effect */}
      <div className="absolute inset-0 bg-bg-secondary" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(204, 255, 0, 0.03) 0%, transparent 50%, rgba(0, 212, 255, 0.03) 100%)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Perché <span className="gradient-text">Revenue Share</span>?
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Un modello che allinea i nostri interessi. Vinciamo insieme o non vinciamo affatto.
          </p>
        </ScrollReveal>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Client benefits */}
          <ScrollReveal direction="left" delay={0.1}>
            <Card className="p-6 md:p-8 h-full border-accent-lime/20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">👤</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Per Te (Cliente)</h3>
                  <p className="text-text-secondary text-sm">I vantaggi del revenue share</p>
                </div>
              </div>

              <StaggerContainer className="space-y-4">
                {clientBenefits.map((benefit, index) => (
                  <StaggerItem key={benefit.title}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] hover:bg-accent-lime/[0.05] transition-colors"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Card>
          </ScrollReveal>

          {/* Provider benefits */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card className="p-6 md:p-8 h-full border-accent-blue/20">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">🤝</span>
                <div>
                  <h3 className="text-xl font-bold text-white">Per Me (Fornitore)</h3>
                  <p className="text-text-secondary text-sm">Perché scelgo questo modello</p>
                </div>
              </div>

              <StaggerContainer className="space-y-4">
                {providerBenefits.map((benefit, index) => (
                  <StaggerItem key={benefit.title}>
                    <motion.div
                      className="flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] hover:bg-accent-blue/[0.05] transition-colors"
                      whileHover={{ x: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <h4 className="font-semibold text-white mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </Card>
          </ScrollReveal>
        </div>

        {/* Connection visual */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="flex items-center justify-center gap-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-accent-lime/20 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-accent-lime text-xl">👤</span>
            </motion.div>

            <motion.div
              className="flex-1 max-w-32 h-1 relative"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent-lime via-white to-accent-blue rounded-full" />
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"
                animate={{ x: [-30, 30, -30] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>

            <motion.div
              className="w-12 h-12 rounded-full bg-accent-blue/20 flex items-center justify-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
              <span className="text-accent-blue text-xl">🤝</span>
            </motion.div>
          </div>

          <p className="text-center text-text-secondary mt-6">
            <span className="text-white font-medium">Crescita condivisa</span> —
            il successo di uno è il successo di entrambi
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default WhyRevenueShare;
