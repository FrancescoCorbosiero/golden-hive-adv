import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import { calculateMonthlyFee, PLANS } from '../../utils/calculatePrice';
import { formatCurrency } from '../../utils/formatCurrency';

const revenueRows = [
  { revenue: 0, label: '€0 - €1,975' },
  { revenue: 2000, label: '€2,000' },
  { revenue: 3000, label: '€3,000' },
  { revenue: 5000, label: '€5,000' },
  { revenue: 7500, label: '€7,500' },
  { revenue: 10000, label: '€10,000' },
  { revenue: 15000, label: '€15,000' },
  { revenue: 25000, label: '€25,000+' },
];

export function CostTable() {
  const planOrder = ['starter', 'growth', 'pro'];

  const getCellData = (revenue, planId) => {
    const plan = PLANS[planId];
    const result = calculateMonthlyFee(revenue, plan);
    return result;
  };

  return (
    <section
      id="cost-table"
      className="relative section-padding overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #111111 0%, #0a0a0a 50%, #111111 100%)',
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Simulazione Costi <span className="text-accent-blue">Dettagliata</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Vedi esattamente quanto pagheresti a diversi livelli di fatturato
          </p>
        </ScrollReveal>

        {/* Table card */}
        <ScrollReveal delay={0.2}>
          <Card className="overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                {/* Header */}
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left p-4 md:p-6 text-text-secondary font-medium text-sm uppercase tracking-wide">
                      Fatturato Mensile
                    </th>
                    {planOrder.map((planId) => {
                      const plan = PLANS[planId];
                      return (
                        <th
                          key={planId}
                          className={`
                            text-center p-4 md:p-6 font-medium text-sm uppercase tracking-wide
                            ${plan.featured ? 'text-accent-lime' : 'text-text-secondary'}
                          `}
                        >
                          <div className="flex items-center justify-center gap-2">
                            <span>{plan.emoji}</span>
                            <span>{plan.name}</span>
                            <span className="text-xs opacity-70">({plan.revenueShareDisplay})</span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                {/* Body */}
                <tbody>
                  {revenueRows.map((row, rowIndex) => (
                    <motion.tr
                      key={row.revenue}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: rowIndex * 0.05, duration: 0.4 }}
                      className="border-b border-white/5 hover:bg-white/[0.02] transition-colors group"
                    >
                      {/* Revenue label */}
                      <td className="p-4 md:p-6 font-medium text-white">
                        {row.label}
                      </td>

                      {/* Plan cells */}
                      {planOrder.map((planId) => {
                        const cellData = getCellData(row.revenue, planId);
                        const plan = PLANS[planId];

                        return (
                          <td
                            key={planId}
                            className={`
                              text-center p-4 md:p-6
                              ${plan.featured ? 'bg-accent-lime/[0.03]' : ''}
                            `}
                          >
                            <div className="flex flex-col items-center gap-1">
                              <span
                                className={`
                                  font-semibold
                                  ${
                                    cellData.status === 'max'
                                      ? 'text-accent-lime'
                                      : cellData.status === 'min'
                                      ? 'text-accent-blue'
                                      : 'text-white'
                                  }
                                `}
                              >
                                {formatCurrency(cellData.amount)}
                              </span>
                              {cellData.status === 'min' && (
                                <Badge variant="outline" className="text-[10px] px-2 py-0.5">
                                  min
                                </Badge>
                              )}
                              {cellData.status === 'max' && (
                                <motion.div
                                  animate={{ scale: [1, 1.05, 1] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  <Badge variant="lime" className="text-[10px] px-2 py-0.5">
                                    MAX
                                  </Badge>
                                </motion.div>
                              )}
                            </div>
                          </td>
                        );
                      })}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </ScrollReveal>

        {/* Legend */}
        <ScrollReveal delay={0.3} className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-[10px] px-2 py-0.5">
              min
            </Badge>
            <span className="text-text-secondary">Minimo garantito</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="lime" className="text-[10px] px-2 py-0.5">
              MAX
            </Badge>
            <span className="text-text-secondary">Cap raggiunto — non paghi di più</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default CostTable;
