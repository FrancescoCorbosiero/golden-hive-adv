import { motion } from 'framer-motion';
import { Sprout, Rocket, Gem, Check } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { NumberCounter } from '../animations/NumberCounter';
import { PLANS } from '../../utils/calculatePrice';
import { formatCurrency } from '../../utils/formatCurrency';

const planIcons = {
  starter: Sprout,
  growth: Rocket,
  pro: Gem,
};

const examples = [
  {
    persona: 'Reseller Piccolo',
    planId: 'starter',
    revenue: 3000,
    margin: 0.2,
    benefits: [
      'Paghi €120 per avere tutto automatizzato',
      'Risparmi 10+ ore/settimana',
    ],
  },
  {
    persona: 'Reseller Medio',
    planId: 'growth',
    revenue: 8000,
    margin: 0.2,
    benefits: [
      'SEO ti porta traffico gratuito',
      'Zero errori di stock',
    ],
    highlight: true,
  },
  {
    persona: 'Reseller Grande',
    planId: 'pro',
    revenue: 25000,
    margin: 0.2,
    benefits: [
      'Paghi €599 MAX anche se fatturi €50k',
      'Economia di scala a tuo favore',
    ],
  },
];

export function Examples() {
  return (
    <section
      id="examples"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)',
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Esempi <span className="text-accent-honey">Reali</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Vedi quanto pagheresti in situazioni concrete
          </p>
        </ScrollReveal>

        {/* Example cards */}
        <StaggerContainer className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {examples.map((example, index) => {
            const plan = PLANS[example.planId];
            const profit = example.revenue * example.margin;
            const serviceCost =
              example.planId === 'pro' && example.revenue >= 25000
                ? plan.maxMonthly
                : Math.min(
                    Math.max(example.revenue * plan.revenueShare, plan.minMonthly),
                    plan.maxMonthly
                  );
            const profitPercentage = Math.round((serviceCost / profit) * 100);
            const isAtCap = serviceCost === plan.maxMonthly;
            const Icon = planIcons[example.planId];

            return (
              <StaggerItem key={example.persona}>
                <Card
                  className={`
                    p-6 md:p-8 h-full
                    ${example.highlight ? 'border-accent-gold/30' : ''}
                  `}
                  tilt
                  glow={example.highlight}
                  glowColor="gold"
                >
                  {/* Header */}
                  <div className="text-center mb-6">
                    <motion.div
                      className="w-16 h-16 mx-auto mb-3 rounded-2xl bg-accent-gold/10 flex items-center justify-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Icon className="w-8 h-8 text-accent-gold" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {example.persona}
                    </h3>
                    <Badge
                      variant={example.highlight ? 'gold' : 'outline'}
                      className="text-xs"
                    >
                      {plan.name}
                    </Badge>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4 mb-6">
                    {/* Revenue */}
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-text-secondary text-sm">Fatturato</span>
                      <span className="text-white font-semibold">
                        <NumberCounter value={example.revenue} format="currency" />/mese
                      </span>
                    </div>

                    {/* Profit */}
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-text-secondary text-sm">
                        Margine ({example.margin * 100}%)
                      </span>
                      <span className="text-white font-semibold">
                        {formatCurrency(profit)} profitto
                      </span>
                    </div>

                    {/* Service cost */}
                    <div className="flex justify-between items-center py-2 border-b border-white/5">
                      <span className="text-text-secondary text-sm">Costo servizio</span>
                      <div className="text-right">
                        <span
                          className={`
                            font-semibold
                            ${isAtCap ? 'text-accent-gold' : 'text-white'}
                          `}
                        >
                          {formatCurrency(serviceCost)}/mese
                        </span>
                        {isAtCap && (
                          <span className="block text-xs text-accent-gold">CAP!</span>
                        )}
                      </div>
                    </div>

                    {/* Percentage of profit */}
                    <div className="flex justify-between items-center py-2">
                      <span className="text-text-secondary text-sm">% del profitto</span>
                      <span className="text-white font-semibold">{profitPercentage}%</span>
                    </div>
                  </div>

                  {/* Profit retention bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-xs text-text-muted mb-2">
                      <span>Profitto trattenuto</span>
                      <span>{100 - profitPercentage}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        className={`
                          h-full rounded-full
                          ${
                            example.highlight
                              ? 'bg-accent-gold'
                              : example.planId === 'pro'
                              ? 'bg-accent-honey'
                              : 'bg-white'
                          }
                        `}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${100 - profitPercentage}%` }}
                        transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="space-y-2">
                    {example.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-text-secondary"
                      >
                        <Check className="w-4 h-4 text-accent-gold flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="text-text-muted text-sm">
            I calcoli assumono un margine del 20%. Il tuo margine reale potrebbe variare.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Examples;
