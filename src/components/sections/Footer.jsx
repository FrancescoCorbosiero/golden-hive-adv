import { motion } from 'framer-motion';
import { Instagram, Linkedin, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import { Container } from '../ui/Container';

const footerLinks = {
  servizi: [
    { label: 'Store WooCommerce', href: '#pricing' },
    { label: 'SEO E-commerce', href: '#features' },
    { label: 'Sync Inventario', href: '#features' },
  ],
  risorse: [
    { label: 'FAQ', href: '#faq' },
    { label: 'Come Funziona', href: '#process' },
    { label: 'Esempi Reali', href: '#examples' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: MessageCircle, href: 'https://wa.me/39123456789', label: 'WhatsApp' },
];

export function Footer() {
  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-bg-primary border-t border-white/5">
      {/* Main footer content */}
      <Container className="py-16">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-1">
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-2xl font-bold text-white">
                Golden<span className="text-accent-lime">Hive</span>
              </span>
            </motion.div>
            <p className="text-text-secondary text-sm mb-6">
              Store e-commerce professionali con modello Revenue Share.
              Cresciamo insieme al tuo business.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-accent-lime hover:border-accent-lime/50 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Servizi column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Servizi</h3>
            <ul className="space-y-3">
              {footerLinks.servizi.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent-lime transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Risorse column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Risorse</h3>
            <ul className="space-y-3">
              {footerLinks.risorse.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-text-secondary hover:text-accent-lime transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contatti column */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contatti</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@goldenhive.it"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-lime transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@goldenhive.it
                </a>
              </li>
              <li>
                <a
                  href="tel:+39123456789"
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-lime transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +39 123 456 789
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-text-secondary text-sm">
                  <MapPin className="w-4 h-4" />
                  Italia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Legal links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="#"
                className="text-text-muted hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-text-muted hover:text-white transition-colors"
              >
                Termini e Condizioni
              </a>
              <span className="text-text-muted">
                P.IVA: IT12345678901
              </span>
            </div>

            {/* Copyright */}
            <p className="text-text-muted text-sm">
              © {new Date().getFullYear()} Golden Hive. Tutti i diritti riservati.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
