import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../animations/ScrollReveal';
import {
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Flame,
} from 'lucide-react';

const TOTAL_SLOTS = 5;
const TAKEN_SLOTS = 3;
const AVAILABLE_SLOTS = TOTAL_SLOTS - TAKEN_SLOTS;

const currentClients = [
  { name: 'M. Rossi', location: 'Milano', plan: 'Growth', daysAgo: 2 },
  { name: 'L. Bianchi', location: 'Roma', plan: 'Pro', daysAgo: 5 },
  { name: 'A. Verdi', location: 'Napoli', plan: 'Growth', daysAgo: 8 },
];

function SlotIndicator({ filled, index }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: index * 0.1, type: 'spring', stiffness: 200 }}
      className={`
        w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center
        ${filled
          ? 'bg-accent-gold/20 border border-accent-gold/50'
          : 'bg-white/5 border border-white/10 border-dashed'
        }
      `}
    >
      {filled ? (
        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-accent-gold" />
      ) : (
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      )}
    </motion.div>
  );
}

function RecentClient({ client, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.15 }}
      className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] border border-white/5"
    >
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold/30 to-accent-honey/20 flex items-center justify-center text-white font-semibold text-sm">
        {client.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{client.name}</p>
        <p className="text-text-muted text-xs">{client.location}</p>
      </div>
      <div className="text-right">
        <Badge variant="gold-subtle" size="sm">{client.plan}</Badge>
        <p className="text-text-muted text-xs mt-1">{client.daysAgo}g fa</p>
      </div>
    </motion.div>
  );
}

export function AvailableSlots() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-bg-primary" />

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-accent-gold/5 blur-[120px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-accent-honey/5 blur-[100px] -translate-y-1/2" />

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Slots visualization */}
            <ScrollReveal direction="left">
              <div className="text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Badge variant="gold" className="gap-2">
                    <Flame className="w-4 h-4" />
                    Alta Domanda
                  </Badge>
                </motion.div>

                {/* Headline */}
                <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-4">
                  Solo{' '}
                  <span className="text-accent-gold">{AVAILABLE_SLOTS} Posti</span>
                  <br />
                  Disponibili Questo Mese
                </h2>

                <p className="text-text-secondary mb-8 max-w-md mx-auto lg:mx-0">
                  Per garantire la massima qualità, accettiamo solo{' '}
                  <span className="text-white font-medium">{TOTAL_SLOTS} nuovi progetti</span>{' '}
                  al mese. Prenota ora per assicurarti un posto.
                </p>

                {/* Slots visual */}
                <div className="mb-8">
                  <div className="flex justify-center lg:justify-start gap-2 mb-3">
                    {Array.from({ length: TOTAL_SLOTS }).map((_, i) => (
                      <SlotIndicator key={i} filled={i < TAKEN_SLOTS} index={i} />
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start gap-6 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-accent-gold" />
                      <span className="text-text-muted">{TAKEN_SLOTS} Occupati</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-green-500" />
                      <span className="text-text-muted">{AVAILABLE_SLOTS} Liberi</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button size="lg" className="group">
                  <Calendar className="w-5 h-5 mr-2" />
                  Prenota Il Tuo Posto
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Right: Recent clients */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-white/[0.02] border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-gold/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-accent-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Clienti Recenti</h3>
                    <p className="text-text-muted text-sm">Chi ha già iniziato</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {currentClients.map((client, index) => (
                    <RecentClient key={client.name} client={client} index={index} />
                  ))}
                </div>

                {/* Social proof note */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-text-muted text-sm text-center">
                    <span className="text-accent-gold font-medium">+12 reseller</span>{' '}
                    hanno scelto Golden Hive negli ultimi 3 mesi
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AvailableSlots;
