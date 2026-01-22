import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import {
  ShoppingCart,
  Palette,
  Shield,
  Cloud,
  Database,
  RefreshCw,
  Package,
  Search,
  Smartphone,
  CreditCard,
  Headphones,
} from 'lucide-react';

const features = [
  {
    icon: ShoppingCart,
    title: 'Store WooCommerce',
    description: 'Professionale e personalizzato',
    size: 'large',
  },
  {
    icon: Palette,
    title: 'Tema Premium',
    description: 'Ottimizzato per conversioni',
    size: 'medium',
  },
  {
    icon: Shield,
    title: 'SSL e Sicurezza',
    description: 'Certificato incluso',
    size: 'small',
  },
  {
    icon: Cloud,
    title: 'Hosting Gestito',
    description: 'Server veloci e affidabili',
    size: 'medium',
  },
  {
    icon: Database,
    title: 'Backup Giornalieri',
    description: 'I tuoi dati sempre al sicuro',
    size: 'small',
  },
  {
    icon: RefreshCw,
    title: 'Aggiornamenti Automatici',
    description: 'WordPress e plugin sempre aggiornati',
    size: 'medium',
  },
  {
    icon: Package,
    title: 'Sync Stock',
    description: 'Collegato al tuo feed prodotti',
    size: 'large',
  },
  {
    icon: Search,
    title: 'SEO Base',
    description: 'Configurato per farti trovare',
    size: 'medium',
  },
  {
    icon: Smartphone,
    title: 'Mobile Responsive',
    description: 'Perfetto su ogni dispositivo',
    size: 'small',
  },
  {
    icon: CreditCard,
    title: 'Pagamenti',
    description: 'Stripe e PayPal integrati',
    size: 'medium',
  },
  {
    icon: Headphones,
    title: 'Supporto Post-Lancio',
    description: 'Non ti lasciamo mai solo',
    size: 'large',
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Cosa È <span className="text-accent-gold-light">Incluso</span> In Tutti I Piani
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Ogni piano include tutto ciò di cui hai bisogno per lanciare e gestire il tuo store
          </p>
        </ScrollReveal>

        {/* Bento grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const sizeClasses = {
              small: '',
              medium: 'md:col-span-1',
              large: 'md:col-span-2 lg:col-span-1',
            };

            const IconComponent = feature.icon;

            return (
              <StaggerItem key={feature.title}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={sizeClasses[feature.size]}
                >
                  <Card className="p-5 md:p-6 h-full group">
                    {/* Icon */}
                    <motion.div
                      className="text-accent-gold mb-3"
                      whileHover={{ scale: 1.2, rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.3 }}
                    >
                      <IconComponent size={32} strokeWidth={1.5} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-semibold text-white mb-1 group-hover:text-accent-gold transition-colors">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-text-secondary text-sm">
                      {feature.description}
                    </p>

                    {/* Hover gradient border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-gold/20 via-transparent to-accent-honey/20 blur-sm" />
                    </div>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Bottom note */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <p className="text-text-muted">
            E molto altro ancora...{' '}
            <span className="text-white">Prenota una call</span> per scoprire tutti i dettagli.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default Features;
