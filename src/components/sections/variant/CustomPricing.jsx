import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';
import { Badge } from '../../ui/Badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../animations/ScrollReveal';
import {
  Package,
  Wrench,
  Headphones,
  ArrowRight,
  Check,
  Percent,
  CreditCard,
  MessageSquare,
} from 'lucide-react';

const pricingStructure = [
  {
    phase: 'Fase 1',
    title: 'Investimento Iniziale',
    subtitle: 'Pagamento unico per la realizzazione',
    icon: CreditCard,
    description:
      'Un preventivo chiaro e personalizzato basato sulle tue esigenze specifiche. Nessun costo nascosto.',
    points: [
      'Analisi completa del progetto',
      'Sviluppo store WooCommerce',
      'Tema e design personalizzato',
      'Configurazione SEO e pagamenti',
      'Training e documentazione',
    ],
    pricing: 'Da €799',
    note: 'Prezzo finale dopo la call di analisi',
    accent: 'gold',
  },
  {
    phase: 'Fase 2',
    title: 'Supporto Continuo',
    subtitle: 'Revenue share per manutenzione e assistenza',
    icon: Headphones,
    description:
      'Dopo il lancio, paghi una piccola percentuale sul fatturato per garantirti supporto tecnico continuo e manutenzione.',
    points: [
      'Hosting gestito incluso',
      'Backup giornalieri automatici',
      'Aggiornamenti WordPress e plugin',
      'Supporto tecnico prioritario',
      'Monitoraggio sicurezza 24/7',
    ],
    pricing: '1.5% - 3%',
    note: 'Percentuale basata sul piano concordato',
    accent: 'honey',
  },
];

const benefits = [
  {
    icon: Package,
    title: 'Preventivo Trasparente',
    description: 'Sai esattamente quanto investi prima di iniziare',
  },
  {
    icon: Wrench,
    title: 'Niente Sorprese',
    description: 'Il costo di sviluppo è fisso e concordato',
  },
  {
    icon: Percent,
    title: 'Supporto Sostenibile',
    description: 'Paghi il supporto solo in proporzione al tuo successo',
  },
  {
    icon: MessageSquare,
    title: 'Sempre Al Tuo Fianco',
    description: 'Assistenza continua senza costi mensili fissi elevati',
  },
];

export function CustomPricing() {
  return (
    <section
      id="custom-pricing"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 100% 50% at 50% 0%, rgba(212, 160, 18, 0.05), transparent)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="gold-subtle" className="mb-6">
            Modello Personalizzato
          </Badge>
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Come <span className="gradient-text">Funziona</span> Il Pricing
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Due fasi semplici e trasparenti. Un investimento iniziale per
            costruire il tuo store, poi un supporto continuo legato al tuo
            successo.
          </p>
        </ScrollReveal>

        {/* Pricing phases */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          {pricingStructure.map((phase, index) => {
            const IconComponent = phase.icon;
            return (
              <ScrollReveal
                key={phase.phase}
                direction={index === 0 ? 'left' : 'right'}
                delay={index * 0.1}
              >
                <Card
                  className={`p-6 md:p-8 h-full border-accent-${phase.accent}/30`}
                  hover
                >
                  {/* Phase badge */}
                  <Badge
                    variant={phase.accent === 'gold' ? 'gold' : 'gold-outline'}
                    className="mb-4"
                  >
                    {phase.phase}
                  </Badge>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-accent-${phase.accent}/10 flex items-center justify-center flex-shrink-0`}
                    >
                      <IconComponent
                        className={`w-7 h-7 text-accent-${phase.accent}`}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {phase.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {phase.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-text-secondary mb-6">{phase.description}</p>

                  {/* Points */}
                  <ul className="space-y-3 mb-8">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-accent-gold flex-shrink-0 mt-0.5" />
                        <span className="text-text-secondary text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Pricing */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span
                        className={`text-3xl font-bold text-accent-${phase.accent}`}
                      >
                        {phase.pricing}
                      </span>
                      {phase.pricing.includes('%') && (
                        <span className="text-text-muted text-sm">
                          del fatturato
                        </span>
                      )}
                    </div>
                    <p className="text-text-muted text-sm">{phase.note}</p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Benefits grid */}
        <ScrollReveal delay={0.2}>
          <h3 className="text-center text-2xl font-bold text-white mb-10">
            Perché Questo Modello
          </h3>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
          {benefits.map((benefit) => {
            const IconComponent = benefit.icon;
            return (
              <StaggerItem key={benefit.title}>
                <motion.div
                  className="text-center p-4"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-accent-gold" />
                  </div>
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {benefit.title}
                  </h4>
                  <p className="text-text-muted text-xs">{benefit.description}</p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal delay={0.3} className="text-center">
          <Button size="lg" className="group">
            Richiedi Il Tuo Preventivo
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="mt-4 text-text-muted text-sm">
            Call gratuita di 30 minuti per capire le tue esigenze
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default CustomPricing;
