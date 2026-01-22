import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ScrollReveal } from '../animations/ScrollReveal';

const competitors = [
  {
    solution: 'Shopify + App + Tema',
    monthly: '€100-150/mese',
    yearly: '€1,200-1,800',
    support: { text: 'Limitato', good: false },
    highlighted: false,
  },
  {
    solution: 'Agenzia tradizionale',
    monthly: '€500-1,500/mese',
    yearly: '€6,000-18,000',
    support: { text: 'Variabile', good: false },
    highlighted: false,
  },
  {
    solution: 'Freelancer',
    monthly: '€200-500/progetto',
    yearly: 'N/A',
    support: { text: 'Nessuno', good: false },
    highlighted: false,
  },
  {
    solution: 'Nostro Growth (€8k fat.)',
    monthly: '~€240/mese',
    yearly: '~€2,880',
    support: { text: 'Incluso', good: true },
    highlighted: true,
  },
];

export function Comparison() {
  return (
    <section
      id="comparison"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Confronto Con Le <span className="text-accent-gold">Alternative</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Vedi come si posiziona il nostro servizio rispetto alle altre opzioni
          </p>
        </ScrollReveal>

        {/* Comparison table */}
        <ScrollReveal delay={0.2}>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 md:p-6 text-text-secondary font-medium text-sm uppercase tracking-wide">
                      Soluzione
                    </th>
                    <th className="text-center p-4 md:p-6 text-text-secondary font-medium text-sm uppercase tracking-wide">
                      Costo Mensile
                    </th>
                    <th className="text-center p-4 md:p-6 text-text-secondary font-medium text-sm uppercase tracking-wide hidden sm:table-cell">
                      Costo Annuale
                    </th>
                    <th className="text-center p-4 md:p-6 text-text-secondary font-medium text-sm uppercase tracking-wide">
                      Supporto
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitors.map((comp, index) => (
                    <motion.tr
                      key={comp.solution}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                      className={`
                        border-b border-white/5 transition-colors
                        ${
                          comp.highlighted
                            ? 'bg-accent-gold/[0.08]'
                            : 'hover:bg-white/[0.02]'
                        }
                      `}
                    >
                      {/* Solution name */}
                      <td className="p-4 md:p-6">
                        <div className="flex items-center gap-3">
                          {comp.highlighted && (
                            <motion.div
                              className="w-2 h-2 rounded-full bg-accent-gold"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            />
                          )}
                          <span
                            className={`
                              font-medium
                              ${comp.highlighted ? 'text-accent-gold' : 'text-white'}
                            `}
                          >
                            {comp.solution}
                          </span>
                        </div>
                      </td>

                      {/* Monthly cost */}
                      <td className="text-center p-4 md:p-6">
                        <span
                          className={`
                            ${comp.highlighted ? 'text-white font-semibold' : 'text-text-secondary'}
                          `}
                        >
                          {comp.monthly}
                        </span>
                      </td>

                      {/* Yearly cost */}
                      <td className="text-center p-4 md:p-6 hidden sm:table-cell">
                        <span
                          className={`
                            ${comp.highlighted ? 'text-white font-semibold' : 'text-text-secondary'}
                          `}
                        >
                          {comp.yearly}
                        </span>
                      </td>

                      {/* Support */}
                      <td className="text-center p-4 md:p-6">
                        <div className="flex items-center justify-center gap-2">
                          {comp.support.good ? (
                            <Check className="w-4 h-4 text-accent-gold" />
                          ) : (
                            <X className="w-4 h-4 text-error" />
                          )}
                          <span
                            className={`
                              text-sm
                              ${
                                comp.support.good
                                  ? 'text-accent-gold font-medium'
                                  : 'text-text-muted'
                              }
                            `}
                          >
                            {comp.support.text}
                          </span>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom highlight */}
            <div className="p-4 md:p-6 bg-accent-gold/[0.05] border-t border-accent-gold/20">
              <p className="text-center text-text-secondary">
                Con il nostro modello Revenue Share, paghi in proporzione al tuo successo.{' '}
                <span className="text-accent-gold font-medium">
                  Piu vendi, piu cresciamo insieme.
                </span>
              </p>
            </div>
          </Card>
        </ScrollReveal>

        {/* Additional note */}
        <ScrollReveal delay={0.3} className="text-center mt-8">
          <p className="text-text-muted text-sm max-w-2xl mx-auto">
            * I costi delle alternative sono stime basate su prezzi di mercato medi.
            Il costo del nostro servizio varia in base al tuo fatturato effettivo.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Comparison;
