import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../animations/ScrollReveal';
import { Clock, Zap, ArrowRight, AlertTriangle } from 'lucide-react';

// Set the target date (e.g., end of promotional period)
const getTargetDate = () => {
  // Set to 7 days from now for demo, adjust as needed
  const target = new Date();
  target.setDate(target.getDate() + 7);
  target.setHours(23, 59, 59, 999);
  return target;
};

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/5 border border-accent-gold/30 flex items-center justify-center backdrop-blur-sm">
          <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-mono">
            {String(value).padStart(2, '0')}
          </span>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-accent-gold/10 blur-xl -z-10" />
      </motion.div>
      <span className="mt-2 text-xs sm:text-sm text-text-muted uppercase tracking-wider">
        {label}
      </span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const targetDate = getTargetDate();

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        setIsExpired(true);
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background with urgency gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, rgba(212, 160, 18, 0.1) 0%, transparent 50%),
            linear-gradient(225deg, rgba(255, 107, 107, 0.05) 0%, transparent 50%),
            #080808
          `,
        }}
      />

      {/* Animated border glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent-gold/50 to-transparent" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Alert badge */}
          <ScrollReveal>
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-6"
            >
              <Badge variant="gold" size="lg" className="gap-2">
                <AlertTriangle className="w-4 h-4" />
                Offerta A Tempo Limitato
              </Badge>
            </motion.div>
          </ScrollReveal>

          {/* Headline */}
          <ScrollReveal delay={0.1}>
            <h2 className="text-fluid-2xl md:text-fluid-3xl font-bold mb-4">
              <span className="text-white">Prezzi Bloccati Solo Per</span>
            </h2>
          </ScrollReveal>

          {/* Countdown timer */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6 my-8">
              <CountdownUnit value={timeLeft.days} label="Giorni" />
              <span className="text-2xl md:text-3xl text-accent-gold font-bold mt-[-1rem]">:</span>
              <CountdownUnit value={timeLeft.hours} label="Ore" />
              <span className="text-2xl md:text-3xl text-accent-gold font-bold mt-[-1rem]">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Minuti" />
              <span className="text-2xl md:text-3xl text-accent-gold font-bold mt-[-1rem] hidden sm:block">:</span>
              <div className="hidden sm:block">
                <CountdownUnit value={timeLeft.seconds} label="Secondi" />
              </div>
            </div>
          </ScrollReveal>

          {/* Urgency message */}
          <ScrollReveal delay={0.3}>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Dopo questa data, i prezzi di setup aumenteranno del{' '}
              <span className="text-accent-gold font-semibold">20%</span>.
              Blocca il prezzo attuale prenotando ora la tua call gratuita.
            </p>
          </ScrollReveal>

          {/* CTA */}
          <ScrollReveal delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button size="lg" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Blocca Il Prezzo Ora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </ScrollReveal>

          {/* Trust note */}
          <ScrollReveal delay={0.5}>
            <p className="mt-6 text-text-muted text-sm flex items-center justify-center gap-2">
              <Clock className="w-4 h-4" />
              Nessun pagamento richiesto per prenotare
            </p>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}

export default Countdown;
