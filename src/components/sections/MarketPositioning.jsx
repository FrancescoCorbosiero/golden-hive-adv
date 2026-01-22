import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ScrollReveal, StaggerContainer, StaggerItem } from '../animations/ScrollReveal';
import {
  Store,
  Globe,
  TrendingUp,
  ArrowRight,
  Check,
  Crown,
  Package,
  Shield,
  Percent,
  Sparkles,
} from 'lucide-react';

const pillars = [
  {
    id: 'ecommerce',
    icon: Store,
    number: '01',
    title: 'E-Commerce Solido',
    subtitle: 'Golden Hive Commerce',
    description: 'Uno store professionale, ottimizzato per conversioni, veloce e affidabile. La base tecnica su cui costruire il tuo successo.',
    features: [
      'Store WooCommerce professionale',
      'SEO ottimizzato per visibilità',
      'Checkout conversione-ottimizzato',
      'Mobile-first design',
    ],
    color: 'gold',
  },
  {
    id: 'positioning',
    icon: Globe,
    number: '02',
    title: 'Market Positioning',
    subtitle: 'Partnership B2B Esclusiva',
    description: 'Accesso privilegiato al nostro network di wholesaler internazionali. Margini garantiti sui prodotti più richiesti del mercato.',
    features: [
      'Accesso a catalogo esclusivo',
      'Margini garantiti dal 25% al 40%',
      'Stock verificato e autentico',
      'Prezzi B2B competitivi',
    ],
    color: 'honey',
    featured: true,
  },
  {
    id: 'marketing',
    icon: TrendingUp,
    number: '03',
    title: 'Marketing Sicuro',
    subtitle: 'ROI Potenziato',
    description: 'Con margini garantiti e un e-commerce solido, ogni euro investito in marketing lavora di più. ROI più prevedibile e scalabile.',
    features: [
      'Margini che coprono i costi ADV',
      'ROI più prevedibile',
      'Scaling più sicuro',
      'Strategia sostenibile',
    ],
    color: 'gold',
  },
];

const partnerBenefits = [
  { icon: Package, label: 'Sneakers & Streetwear', description: 'I brand più richiesti' },
  { icon: Shield, label: '100% Autenticità', description: 'Solo prodotti originali' },
  { icon: Percent, label: 'Margini 25-40%', description: 'Garantiti su catalogo' },
  { icon: Crown, label: 'Accesso Esclusivo', description: 'Solo per clienti Golden Hive' },
];

function PillarCard({ pillar, index }) {
  const IconComponent = pillar.icon;
  const isFeatured = pillar.featured;

  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
    >
      {isFeatured && (
        <motion.div
          className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent-gold/50 via-accent-honey/30 to-transparent"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      )}

      <Card
        className={`relative h-full p-6 md:p-8 ${isFeatured ? 'border-accent-gold/50' : ''}`}
        hover
      >
        {isFeatured && (
          <Badge variant="gold" size="sm" className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Sparkles className="w-3 h-3 mr-1" />
            Vantaggio Esclusivo
          </Badge>
        )}

        {/* Number */}
        <span className="text-5xl font-black text-white/5 absolute top-4 right-4">
          {pillar.number}
        </span>

        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-accent-${pillar.color}/10 flex items-center justify-center mb-6`}>
          <IconComponent className={`w-7 h-7 text-accent-${pillar.color}`} />
        </div>

        {/* Content */}
        <div className="mb-6">
          <p className={`text-accent-${pillar.color} text-sm font-medium mb-1`}>
            {pillar.subtitle}
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
            {pillar.title}
          </h3>
          <p className="text-text-secondary text-sm">
            {pillar.description}
          </p>
        </div>

        {/* Features */}
        <ul className="space-y-2">
          {pillar.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <Check className={`w-4 h-4 text-accent-${pillar.color} flex-shrink-0 mt-0.5`} />
              <span className="text-text-secondary text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}

export function MarketPositioning() {
  return (
    <section
      id="market-positioning"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />

      {/* Decorative gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 40% at 50% 0%, rgba(212, 160, 18, 0.08), transparent),
            radial-gradient(ellipse 60% 30% at 80% 100%, rgba(245, 197, 24, 0.05), transparent)
          `,
        }}
      />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-6">
          <Badge variant="gold-outline" size="lg" className="mb-6">
            <Crown className="w-4 h-4 mr-2" />
            Il Vantaggio Competitivo
          </Badge>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="text-center mb-16">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            I <span className="gradient-text">3 Pilastri</span> Del Successo
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-3xl mx-auto">
            Non ti diamo solo un e-commerce. Ti diamo accesso a un{' '}
            <span className="text-white font-medium">ecosistema completo</span>{' '}
            per dominare il mercato del reselling.
          </p>
        </ScrollReveal>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Connection arrows (desktop) */}
        <div className="hidden md:flex justify-center items-center gap-4 -mt-16 mb-16">
          <div className="flex items-center gap-2 text-text-muted">
            <ArrowRight className="w-5 h-5 text-accent-gold" />
            <span className="text-sm">Sinergia</span>
            <ArrowRight className="w-5 h-5 text-accent-gold" />
          </div>
        </div>

        {/* B2B Partner highlight */}
        <ScrollReveal delay={0.3}>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-accent-gold/20 via-accent-honey/10 to-accent-gold/20 blur-xl" />

            <div className="relative bg-bg-elevated border border-accent-gold/20 rounded-2xl p-8 md:p-10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Content */}
                <div>
                  <Badge variant="gold" className="mb-4">
                    Partnership Esclusiva
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    Accesso al Network B2B Globale
                  </h3>
                  <p className="text-text-secondary mb-6">
                    Come cliente Golden Hive Commerce, ottieni accesso privilegiato
                    al nostro network di wholesaler verificati. Sneakers, streetwear
                    e accessori dei brand più richiesti, con{' '}
                    <span className="text-accent-gold font-semibold">
                      margini garantiti dal 25% al 40%
                    </span>.
                  </p>
                  <p className="text-text-muted text-sm">
                    *L'accesso al network B2B è incluso in tutti i piani e soggetto a verifica.
                  </p>
                </div>

                {/* Right: Benefits */}
                <div className="grid grid-cols-2 gap-4">
                  {partnerBenefits.map((benefit, index) => {
                    const IconComponent = benefit.icon;
                    return (
                      <motion.div
                        key={benefit.label}
                        className="bg-white/[0.03] border border-white/5 rounded-xl p-4 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.03, borderColor: 'rgba(212, 160, 18, 0.3)' }}
                      >
                        <div className="w-10 h-10 rounded-lg bg-accent-gold/10 flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-5 h-5 text-accent-gold" />
                        </div>
                        <p className="font-semibold text-white text-sm mb-1">
                          {benefit.label}
                        </p>
                        <p className="text-text-muted text-xs">
                          {benefit.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Result formula */}
        <ScrollReveal delay={0.5} className="text-center mt-16">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 md:gap-4 px-6 py-4 rounded-2xl bg-white/[0.02] border border-white/10">
            <span className="text-white font-medium">E-Commerce</span>
            <span className="text-accent-gold text-xl">+</span>
            <span className="text-white font-medium">Margini B2B</span>
            <span className="text-accent-gold text-xl">+</span>
            <span className="text-white font-medium">Marketing</span>
            <span className="text-accent-gold text-xl">=</span>
            <span className="gradient-text font-bold text-lg">Successo Garantito</span>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default MarketPositioning;
