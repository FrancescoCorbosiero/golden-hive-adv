import { motion } from 'framer-motion';
import { Sprout, Rocket, Gem } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { NumberCounter } from '../animations/NumberCounter';
import { PLANS } from '../../utils/calculatePrice';
import { formatCurrency } from '../../utils/formatCurrency';

const planOrder = ['starter', 'growth', 'pro'];

const planIcons = {
  starter: Sprout,
  growth: Rocket,
  pro: Gem,
};

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="pricing"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Radial gradient behind featured card */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 60%, rgba(212, 160, 18, 0.08) 0%, transparent 50%)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <Badge variant="gold" className="mb-6">
            Pricing Trasparente
          </Badge>
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Scegli Il Piano Perfetto Per Te
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Setup una tantum + revenue share mensile. Nessun costo nascosto.
          </p>
        </ScrollReveal>

        {/* Pricing cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {planOrder.map((planId, index) => {
            const plan = PLANS[planId];
            const isFeatured = plan.featured;
            const IconComponent = planIcons[planId];

            return (
              <StaggerItem key={planId} className="flex">
                <motion.div
                  className={`
                    relative flex flex-col w-full
                    ${isFeatured ? 'md:-my-4' : ''}
                  `}
                  whileHover={isFeatured ? {} : { y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Featured badge */}
                  {isFeatured && (
                    <motion.div
                      className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
                      initial={{ opacity: 0, y: -10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Badge variant="gold">{plan.badge}</Badge>
                    </motion.div>
                  )}

                  <Card
                    className={`
                      flex flex-col h-full p-6 md:p-8
                      ${
                        isFeatured
                          ? 'border-2 border-accent-gold/50 bg-gradient-to-br from-white/[0.08] to-white/[0.02]'
                          : ''
                      }
                    `}
                    tilt={isFeatured}
                    glow={isFeatured}
                    glowColor="gold"
                  >
                    {/* Plan header */}
                    <div className="text-center mb-6">
                      <div className="w-14 h-14 rounded-xl bg-accent-gold/10 flex items-center justify-center mx-auto mb-3">
                        <IconComponent className="w-7 h-7 text-accent-gold" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {plan.tagline}
                      </p>
                    </div>

                    {/* Setup price */}
                    <div className="text-center mb-6 pb-6 border-b border-white/10">
                      <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
                        Setup
                      </p>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-text-secondary text-xl">€</span>
                        <NumberCounter
                          value={plan.setup}
                          className="text-4xl md:text-5xl font-bold text-white"
                        />
                      </div>
                      <p className="text-text-muted text-sm mt-1">una tantum</p>
                    </div>

                    {/* Revenue share */}
                    <div className="text-center mb-6">
                      <p className="text-text-muted text-sm uppercase tracking-wide mb-2">
                        Revenue Share
                      </p>
                      <div
                        className={`
                          inline-block px-6 py-3 rounded-full
                          ${
                            isFeatured
                              ? 'bg-accent-gold/20 text-accent-gold'
                              : plan.accent === 'gold'
                              ? 'bg-accent-honey/20 text-accent-honey'
                              : 'bg-white/10 text-white'
                          }
                        `}
                      >
                        <span className="text-3xl font-bold">
                          {plan.revenueShareDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Min/Max range */}
                    <div className="flex justify-between items-center mb-6 px-4 py-3 rounded-lg bg-white/[0.03]">
                      <div className="text-center">
                        <p className="text-text-muted text-xs uppercase">Min</p>
                        <p className="text-white font-semibold">
                          {formatCurrency(plan.minMonthly)}/mese
                        </p>
                      </div>
                      <div className="w-px h-8 bg-white/10" />
                      <div className="text-center">
                        <p className="text-text-muted text-xs uppercase">Max</p>
                        <p className="text-white font-semibold">
                          {formatCurrency(plan.maxMonthly)}/mese
                        </p>
                      </div>
                    </div>

                    {/* Break-even info */}
                    <div className="text-center mb-8 text-sm text-text-secondary">
                      <span className="text-text-muted">Break-even:</span>{' '}
                      <span className="text-white font-medium">
                        {formatCurrency(plan.breakeven)}/mese
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button
                        variant={isFeatured ? 'primary' : 'secondary'}
                        className="w-full"
                        onClick={scrollToContact}
                      >
                        {isFeatured ? 'Inizia con Growth' : `Scegli ${plan.name}`}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="text-text-muted text-sm">
            Tutti i prezzi sono IVA esclusa. Il fatturato viene calcolato sulle vendite lorde (resi esclusi).
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Pricing;
