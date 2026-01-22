import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Sprout, Rocket, Gem } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ScrollReveal } from '../animations/ScrollReveal';
import { PLANS } from '../../utils/calculatePrice';

const planGuides = {
  starter: {
    title: 'Scegli STARTER se:',
    points: [
      'Stai iniziando (0-50 vendite/mese)',
      'Budget limitato per il setup',
      'Fatturi meno di €5,000/mese',
      'Non hai bisogno di sync bidirezionale',
    ],
    highlight: false,
  },
  growth: {
    title: 'Scegli GROWTH se:',
    points: [
      'Hai gia un business attivo',
      'Fatturi €5,000-€15,000/mese',
      'Vuoi scalare senza limiti',
      'Hai bisogno di automazione completa',
    ],
    highlight: true,
  },
  pro: {
    title: 'Scegli PRO se:',
    points: [
      'Fatturi €15,000+/mese',
      'Vuoi il massimo controllo',
      'Hai bisogno di sviluppo custom',
      'Vuoi supporto prioritario',
    ],
    highlight: false,
  },
};

const planOrder = ['starter', 'growth', 'pro'];

const planIcons = {
  starter: Sprout,
  growth: Rocket,
  pro: Gem,
};

export function PlanGuide() {
  const [activePlan, setActivePlan] = useState('growth');

  const scrollToContact = () => {
    document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="plan-guide"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Quale Piano <span className="text-accent-gold">Fa Per Te</span>?
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Rispondi a queste domande per trovare il piano perfetto
          </p>
        </ScrollReveal>

        {/* Tab buttons */}
        <ScrollReveal delay={0.1} className="flex justify-center gap-2 md:gap-4 mb-10">
          {planOrder.map((planId) => {
            const plan = PLANS[planId];
            const isActive = activePlan === planId;
            const Icon = planIcons[planId];

            return (
              <button
                key={planId}
                onClick={() => setActivePlan(planId)}
                className={`
                  relative px-4 md:px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${
                    isActive
                      ? 'text-black'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className={`
                      absolute inset-0 rounded-full
                      ${
                        plan.featured
                          ? 'bg-accent-gold'
                          : plan.accent === 'gold'
                          ? 'bg-accent-gold'
                          : 'bg-white'
                      }
                    `}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="hidden md:inline">{plan.name}</span>
                </span>
              </button>
            );
          })}
        </ScrollReveal>

        {/* Content cards */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePlan}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className={`
                  p-8 md:p-10
                  ${
                    planGuides[activePlan].highlight
                      ? 'border-accent-gold/30'
                      : ''
                  }
                `}
                glow={planGuides[activePlan].highlight}
                glowColor="gold"
              >
                {/* Plan header */}
                <div className="flex items-center gap-4 mb-8">
                  {(() => {
                    const Icon = planIcons[activePlan];
                    return (
                      <div className="w-16 h-16 rounded-2xl bg-accent-gold/10 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-accent-gold" />
                      </div>
                    );
                  })()}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {planGuides[activePlan].title}
                    </h3>
                    <p className="text-text-secondary">
                      {PLANS[activePlan].tagline}
                    </p>
                  </div>
                </div>

                {/* Checklist */}
                <ul className="space-y-4 mb-8">
                  {planGuides[activePlan].points.map((point, index) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, type: 'spring' }}
                        className={`
                          w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                          ${
                            planGuides[activePlan].highlight
                              ? 'bg-accent-gold/20'
                              : 'bg-white/10'
                          }
                        `}
                      >
                        <Check
                          className={`
                            w-4 h-4
                            ${
                              planGuides[activePlan].highlight
                                ? 'text-accent-gold'
                                : 'text-white'
                            }
                          `}
                        />
                      </motion.div>
                      <span className="text-white text-lg">{point}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={planGuides[activePlan].highlight ? 'primary' : 'secondary'}
                  className="w-full md:w-auto"
                  onClick={scrollToContact}
                >
                  Scegli {PLANS[activePlan].name} — {PLANS[activePlan].revenueShareDisplay} Revenue Share
                </Button>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick comparison */}
        <ScrollReveal delay={0.3} className="mt-12 text-center">
          <p className="text-text-muted">
            Non sei sicuro?{' '}
            <button
              onClick={scrollToContact}
              className="text-accent-gold hover:underline"
            >
              Prenota una call gratuita
            </button>{' '}
            e ti aiutiamo a scegliere.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default PlanGuide;
