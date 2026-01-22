import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

const navLinks = [
  { label: 'Servizi', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Come Funziona', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-accent-gold/10'
          : 'bg-transparent'
        }
      `}
    >
      <Container>
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}
            className="flex items-center gap-3 group"
          >
            {/* Logo placeholder - replace with actual logo */}
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-gold to-accent-honey flex items-center justify-center">
              {/* Bee icon placeholder */}
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-black"
                fill="currentColor"
              >
                <path d="M12 2C10.34 2 9 3.34 9 5c0 .74.27 1.41.71 1.93C7.54 7.62 6 9.64 6 12c0 2.76 2.24 5 5 5h2c2.76 0 5-2.24 5-5 0-2.36-1.54-4.38-3.71-5.07.44-.52.71-1.19.71-1.93 0-1.66-1.34-3-3-3zm0 2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-1 5h2c1.66 0 3 1.34 3 3s-1.34 3-3 3h-2c-1.66 0-3-1.34-3-3s1.34-3 3-3zm-.5 2a.5.5 0 100 1 .5.5 0 000-1zm3 0a.5.5 0 100 1 .5.5 0 000-1zM8 17v2c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2v-2h-2v2h-4v-2H8z"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white group-hover:text-accent-gold transition-colors">
                Golden Hive
              </span>
              <span className="text-xs text-text-muted -mt-1">Commerce</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-text-secondary hover:text-accent-gold transition-colors text-sm font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              variant="primary"
              size="small"
              onClick={() => scrollToSection('#final-cta')}
            >
              Inizia Ora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-white transition-colors"
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-accent-gold/10"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="text-left text-lg text-text-secondary hover:text-accent-gold transition-colors py-2"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => scrollToSection('#final-cta')}
                  >
                    Inizia Ora
                  </Button>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
