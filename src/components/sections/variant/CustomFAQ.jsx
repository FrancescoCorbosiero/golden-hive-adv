import { Container } from '../../ui/Container';
import { Accordion } from '../../ui/Accordion';
import { ScrollReveal } from '../../animations/ScrollReveal';
import {
  HelpCircle,
  Calculator,
  Calendar,
  Percent,
  RefreshCw,
  FileText,
  Shield,
  Wrench,
} from 'lucide-react';

const faqs = [
  {
    icon: Calculator,
    question: 'Come viene determinato il prezzo del progetto?',
    answer: 'Durante la call gratuita analizziamo insieme le tue esigenze: numero di prodotti, integrazioni necessarie, personalizzazioni grafiche e funzionalità specifiche. Entro 48 ore ricevi un preventivo dettagliato con tutti i costi. Nessuna sorpresa.',
  },
  {
    icon: Calendar,
    question: 'Come funziona il pagamento?',
    answer: 'Il pagamento è diviso in due parti: 50% alla firma dell\'accordo per avviare lo sviluppo, e 50% al momento del lancio. Per progetti più grandi, possiamo concordare un piano personalizzato.',
  },
  {
    icon: Percent,
    question: 'Come funziona il revenue share per il supporto?',
    answer: 'Dopo il lancio, paghi una percentuale sul tuo fatturato (tipicamente 1.5-3%) che copre hosting, backup, aggiornamenti, sicurezza e supporto tecnico. Se non vendi, paghi solo un minimo di manutenzione concordato.',
  },
  {
    icon: Shield,
    question: 'Cosa include esattamente il supporto continuo?',
    answer: 'Il supporto include: hosting gestito su server veloci, backup giornalieri automatici, aggiornamenti di WordPress e plugin, monitoraggio sicurezza, supporto tecnico via email e chat, e piccole modifiche al sito.',
  },
  {
    icon: RefreshCw,
    question: 'Posso modificare il piano di supporto?',
    answer: 'Sì, il piano è flessibile. Possiamo aumentare o ridurre il livello di supporto in base alle tue esigenze. Richiediamo 30 giorni di preavviso per qualsiasi modifica.',
  },
  {
    icon: FileText,
    question: 'Il sito è mio?',
    answer: 'Assolutamente sì. Il sito, il codice e tutti i contenuti sono di tua proprietà. Se decidi di interrompere il supporto, puoi scaricare tutto e gestirlo autonomamente o con un altro fornitore.',
  },
  {
    icon: Wrench,
    question: 'Cosa succede se ho bisogno di modifiche importanti?',
    answer: 'Le piccole modifiche sono incluse nel supporto. Per modifiche sostanziali (nuove funzionalità, restyling completo), ti forniamo un preventivo separato a condizioni vantaggiose come cliente esistente.',
  },
  {
    icon: HelpCircle,
    question: 'Perché non offrite piani standard?',
    answer: 'Ogni business è diverso. Crediamo che un preventivo personalizzato ti dia più valore: paghi esattamente per quello che ti serve, senza funzionalità inutili o limitazioni arbitrarie.',
  },
];

export function CustomFAQ() {
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
            Domande <span className="text-accent-gold">Frequenti</span>
          </h2>
          <p className="text-text-secondary text-fluid-lg max-w-2xl mx-auto">
            Tutto quello che devi sapere sul nostro modello di lavoro
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
            Non hai trovato la risposta che cercavi?{' '}
            <a
              href="#final-cta"
              className="text-accent-gold hover:underline font-medium"
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

export default CustomFAQ;
