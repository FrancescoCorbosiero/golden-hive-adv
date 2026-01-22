import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Slider } from '../ui/Slider';
import { ScrollReveal } from '../animations/ScrollReveal';
import { calculateAllPlans, PLANS, getBestValue } from '../../utils/calculatePrice';
import { formatCurrency } from '../../utils/formatCurrency';

export function Calculator() {
  const [revenue, setRevenue] = useState(8000);
  const [fees, setFees] = useState(calculateAllPlans(8000));
  const [bestPlan, setBestPlan] = useState('growth');

  useEffect(() => {
    setFees(calculateAllPlans(revenue));
    setBestPlan(getBestValue(revenue));
  }, [revenue]);

  const planOrder = ['starter', 'growth', 'pro'];

  return (
    <section
      id="calculator"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Quanto Pagheresti <span className="text-accent-lime">Tu</span>?
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Muovi lo slider per vedere il costo in base al tuo fatturato mensile
          </p>
        </ScrollReveal>

        {/* Calculator card */}
        <ScrollReveal delay={0.2}>
          <Card className="max-w-4xl mx-auto p-8 md:p-12">
            {/* Revenue input */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-text-muted text-sm uppercase tracking-wide mb-1">
                    Fatturato Mensile
                  </p>
                  <motion.div
                    key={revenue}
                    initial={{ scale: 0.95, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-4xl md:text-5xl font-bold text-white"
                  >
                    {formatCurrency(revenue)}
                  </motion.div>
                </div>
                <div className="text-right">
                  <p className="text-text-muted text-xs">
                    {revenue === 0 ? 'Nessuna vendita' : revenue >= 50000 ? 'Alto volume' : ''}
                  </p>
                </div>
              </div>

              <Slider
                value={revenue}
                onChange={setRevenue}
                min={0}
                max={50000}
                step={500}
              />

              <div className="flex justify-between text-text-muted text-sm mt-3">
                <span>€0</span>
                <span>€50.000</span>
              </div>
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-4">
              {planOrder.map((planId) => {
                const plan = PLANS[planId];
                const fee = fees[planId];
                const isBest = bestPlan === planId && revenue > 0;
                const isAtCap = fee.status === 'max';

                return (
                  <motion.div
                    key={planId}
                    layout
                    className={`
                      relative p-5 rounded-xl border transition-all duration-300
                      ${
                        isBest
                          ? 'bg-accent-lime/10 border-accent-lime/50'
                          : 'bg-white/[0.02] border-white/10'
                      }
                    `}
                  >
                    {/* Best value indicator */}
                    <AnimatePresence>
                      {isBest && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-lime text-black text-xs font-bold px-3 py-1 rounded-full"
                        >
                          Miglior Valore
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Plan name */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xl">{plan.emoji}</span>
                      <span className="font-semibold text-white">{plan.name}</span>
                      <span className="text-text-muted text-sm">
                        ({plan.revenueShareDisplay})
                      </span>
                    </div>

                    {/* Fee amount */}
                    <motion.div
                      key={`${planId}-${fee.amount}`}
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      className="mb-2"
                    >
                      <span
                        className={`
                          text-3xl font-bold
                          ${isBest ? 'text-accent-lime' : 'text-white'}
                        `}
                      >
                        {formatCurrency(fee.amount)}
                      </span>
                      <span className="text-text-muted text-sm">/mese</span>
                    </motion.div>

                    {/* Status badge */}
                    <AnimatePresence mode="wait">
                      {fee.status === 'min' && (
                        <motion.span
                          key="min"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="inline-block text-xs px-2 py-1 rounded bg-white/10 text-text-secondary"
                        >
                          Minimo garantito
                        </motion.span>
                      )}
                      {fee.status === 'max' && (
                        <motion.span
                          key="max"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-accent-lime/20 text-accent-lime font-medium"
                        >
                          <span>🎉</span> CAP raggiunto!
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Explanation text */}
            <motion.div
              key={revenue}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8 text-center text-text-secondary"
            >
              {revenue === 0 ? (
                <p>
                  Anche senza vendite, paghi solo il minimo garantito per mantenere il tuo store attivo.
                </p>
              ) : (
                <p>
                  Con <span className="text-white font-medium">{formatCurrency(revenue)}</span> di fatturato,
                  il piano <span className="text-accent-lime font-medium">{PLANS[bestPlan].name}</span> ti costa{' '}
                  <span className="text-white font-medium">{formatCurrency(fees[bestPlan].amount)}/mese</span>
                  {fees[bestPlan].status === 'max' && (
                    <span className="text-accent-lime"> — hai raggiunto il cap!</span>
                  )}
                </p>
              )}
            </motion.div>
          </Card>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Calculator;
