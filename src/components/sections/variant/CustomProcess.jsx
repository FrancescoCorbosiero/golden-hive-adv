import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { ScrollReveal } from '../../animations/ScrollReveal';
import { useInView } from '../../../hooks/useInView';
import {
  MessageCircle,
  FileText,
  CreditCard,
  Code,
  Rocket,
  HeartPulse,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Consulenza Gratuita',
    description: 'Parliamo del tuo progetto e delle tue esigenze',
    duration: '30 min',
    icon: MessageCircle,
  },
  {
    number: '02',
    title: 'Preventivo Dettagliato',
    description: 'Ricevi una proposta personalizzata entro 48h',
    duration: '48h',
    icon: FileText,
  },
  {
    number: '03',
    title: 'Accordo e Avvio',
    description: '50% anticipo per iniziare lo sviluppo',
    duration: '1 giorno',
    icon: CreditCard,
  },
  {
    number: '04',
    title: 'Sviluppo Su Misura',
    description: 'Costruiamo il tuo store con aggiornamenti regolari',
    duration: '10-21 giorni',
    icon: Code,
  },
  {
    number: '05',
    title: 'Lancio',
    description: 'Go live e saldo finale (50%)',
    duration: 'Giorno X',
    icon: Rocket,
  },
  {
    number: '06',
    title: 'Supporto Attivo',
    description: 'Manutenzione continua con revenue share',
    duration: 'Sempre',
    icon: HeartPulse,
  },
];

export function CustomProcess() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <section
      id="process"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Il Nostro <span className="text-accent-gold">Processo</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Dalla prima call al lancio, un percorso chiaro e trasparente
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div ref={ref} className="relative max-w-4xl mx-auto">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2">
            <motion.div
              className="w-full bg-gradient-to-b from-accent-gold via-accent-honey to-accent-gold/20"
              initial={{ height: 0 }}
              animate={isInView ? { height: '100%' } : { height: 0 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              const IconComponent = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className={`
                    relative md:flex md:items-center
                    ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                  `}
                >
                  {/* Content card */}
                  <div className={`md:w-[calc(50%-3rem)] ${isLeft ? 'md:pr-8' : 'md:pl-8'}`}>
                    <motion.div
                      className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5 hover:bg-white/[0.05] hover:border-white/[0.12] transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-accent-gold">
                          <IconComponent size={28} strokeWidth={1.5} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-accent-gold font-mono text-sm">
                              {step.number}
                            </span>
                            <h3 className="font-semibold text-white text-lg">
                              {step.title}
                            </h3>
                          </div>
                          <p className="text-text-secondary text-sm mb-2">
                            {step.description}
                          </p>
                          <span className="inline-block text-xs px-2 py-1 rounded bg-white/5 text-text-muted">
                            {step.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-bg-primary border-2 border-accent-gold flex items-center justify-center z-10"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.15 + 0.3, type: 'spring' }}
                    >
                      <span className="text-accent-gold font-bold text-sm">
                        {step.number}
                      </span>
                    </motion.div>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CustomProcess;
