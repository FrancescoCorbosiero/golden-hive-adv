import { motion } from 'framer-motion';
import { Container } from '../../ui/Container';
import { Card } from '../../ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../../animations/ScrollReveal';
import {
  Target,
  Puzzle,
  TrendingUp,
  Shield,
  Users,
  Zap,
} from 'lucide-react';

const valueProps = [
  {
    icon: Puzzle,
    title: 'Su Misura',
    description: 'Ogni progetto è unico. Il tuo store viene costruito sulle tue esigenze specifiche, non su template generici.',
  },
  {
    icon: Target,
    title: 'Investimento Chiaro',
    description: 'Un prezzo definito per lo sviluppo. Sai esattamente quanto investire prima di iniziare.',
  },
  {
    icon: TrendingUp,
    title: 'Supporto Proporzionato',
    description: 'Il costo del supporto cresce con il tuo successo. Se fatturi poco, paghi poco.',
  },
  {
    icon: Shield,
    title: 'Nessun Vincolo',
    description: 'Il sito è tuo. Puoi gestirlo autonomamente quando vuoi, senza penali.',
  },
  {
    icon: Users,
    title: 'Partner, Non Fornitore',
    description: 'Lavoriamo insieme per il tuo successo. Il revenue share ci allinea ai tuoi obiettivi.',
  },
  {
    icon: Zap,
    title: 'Veloce e Professionale',
    description: 'Store pronto in 10-21 giorni. Qualità da agenzia a un prezzo accessibile.',
  },
];

export function CustomValue() {
  return (
    <section
      id="value"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 160, 18, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 160, 18, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Perché <span className="gradient-text">Sceglierci</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Un approccio diverso alla creazione di e-commerce. Personalizzato,
            trasparente, orientato ai risultati.
          </p>
        </ScrollReveal>

        {/* Value grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {valueProps.map((prop) => {
            const IconComponent = prop.icon;
            return (
              <StaggerItem key={prop.title}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="p-6 h-full group" hover>
                    <div className="w-12 h-12 rounded-xl bg-accent-gold/10 flex items-center justify-center mb-4 group-hover:bg-accent-gold/20 transition-colors">
                      <IconComponent className="w-6 h-6 text-accent-gold" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-accent-gold transition-colors">
                      {prop.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {prop.description}
                    </p>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}

export default CustomValue;
