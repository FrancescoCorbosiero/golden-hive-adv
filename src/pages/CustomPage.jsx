import { Header } from '../components/sections/Header';
import { CustomHero } from '../components/sections/variant/CustomHero';
import { CustomValue } from '../components/sections/variant/CustomValue';
import { CustomPricing } from '../components/sections/variant/CustomPricing';
import { Features } from '../components/sections/Features';
import { CustomProcess } from '../components/sections/variant/CustomProcess';
import { CustomFAQ } from '../components/sections/variant/CustomFAQ';
import { CustomCTA } from '../components/sections/variant/CustomCTA';
import { Footer } from '../components/sections/Footer';

export function CustomPage() {
  return (
    <div className="relative min-h-screen bg-black text-text-primary noise-overlay">
      {/* Skip to main content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-gold focus:text-black focus:rounded-lg"
      >
        Vai al contenuto principale
      </a>

      {/* Fixed Header */}
      <Header variant="custom" />

      <main>
        {/* Hero - Custom messaging */}
        <CustomHero />

        {/* Why choose us */}
        <CustomValue />

        {/* Custom Pricing Model */}
        <CustomPricing />

        {/* What's Included (reuse from main) */}
        <Features />

        {/* Process Timeline */}
        <CustomProcess />

        {/* FAQ - Custom questions */}
        <CustomFAQ />

        {/* Final CTA */}
        <CustomCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default CustomPage;
