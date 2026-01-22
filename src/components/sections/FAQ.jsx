import { Container } from '../ui/Container';
import { Accordion } from '../ui/Accordion';
import { ScrollReveal } from '../animations/ScrollReveal';

const faqs = [
  {
    icon: '📊',
    question: 'Come viene calcolato il fatturato?',
    answer: 'Il fatturato è calcolato sulle vendite lorde del tuo store (prima dei costi). I resi vengono esclusi dal calcolo. Riceverai un report dettagliato ogni mese con il breakdown completo.',
  },
  {
    icon: '📅',
    question: 'Quando si paga?',
    answer: 'La fatturazione è mensile. Ricevi la fattura entro il primo giorno del mese successivo, con pagamento entro il 5. Il setup viene pagato 50% all\'accordo e 50% al lancio.',
  },
  {
    icon: '📈',
    question: 'Come monitoro i costi?',
    answer: 'Avrai accesso a una dashboard automatica che mostra vendite, fee calcolate e storico in tempo reale. Totale trasparenza, sempre.',
  },
  {
    icon: '⚠️',
    question: 'E se non vendo nulla?',
    answer: 'Si paga comunque il minimo garantito del tuo piano. Questo copre hosting, manutenzione, backup e supporto tecnico. È il costo base per mantenere il tuo store operativo.',
  },
  {
    icon: '🔄',
    question: 'Posso cambiare piano?',
    answer: 'Sì! Puoi fare upgrade o downgrade con 30 giorni di preavviso. L\'upgrade è immediato, il downgrade si attiva dal mese successivo al preavviso.',
  },
  {
    icon: '🚪',
    question: 'E se voglio cancellare?',
    answer: 'Richiediamo 60 giorni di preavviso. Il sito rimane tuo: puoi scaricarlo o trasferirlo. Ti aiutiamo con la migrazione se necessario.',
  },
  {
    icon: '🛠️',
    question: 'Cosa succede se ho un problema tecnico?',
    answer: 'Il supporto è incluso in tutti i piani. Per problemi critici interveniamo entro poche ore. Per richieste non urgenti, rispondiamo entro 24-48h.',
  },
  {
    icon: '💳',
    question: 'Quali metodi di pagamento accettate?',
    answer: 'Accettiamo bonifico bancario e carte di credito. Per il setup è possibile concordare piani di pagamento personalizzati.',
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative section-padding overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg-secondary" />

      <Container className="relative z-10">
        {/* Section header */}
        <ScrollReveal className="text-center mb-12">
          <h2 className="text-fluid-3xl md:text-fluid-4xl font-bold mb-6">
            Note <span className="text-accent-gold">Importanti</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Risposte alle domande più frequenti sul nostro servizio
          </p>
        </ScrollReveal>

        {/* FAQ accordion */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </ScrollReveal>

        {/* Additional help */}
        <ScrollReveal delay={0.3} className="text-center mt-12">
          <p className="text-text-secondary">
            Hai altre domande?{' '}
            <a
              href="#final-cta"
              className="text-accent-lime hover:underline font-medium"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contattaci
            </a>{' '}
            e ti risponderemo entro 24h.
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}

export default FAQ;
