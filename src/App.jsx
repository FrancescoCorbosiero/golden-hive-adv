import { useState, useEffect } from 'react';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { Problem } from './components/sections/Problem';
import { Solution } from './components/sections/Solution';
import { Pricing } from './components/sections/Pricing';
import { Calculator } from './components/sections/Calculator';
import { CostTable } from './components/sections/CostTable';
import { PlanGuide } from './components/sections/PlanGuide';
import { Examples } from './components/sections/Examples';
import { Comparison } from './components/sections/Comparison';
import { Features } from './components/sections/Features';
import { WhyRevenueShare } from './components/sections/WhyRevenueShare';
import { Process } from './components/sections/Process';
import { FAQ } from './components/sections/FAQ';
import { FinalCTA } from './components/sections/FinalCTA';
import { Footer } from './components/sections/Footer';
import { CustomPage } from './pages/CustomPage';

function MainPage() {
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
      <Header />

      <main>
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Problem / Agitation */}
        <Problem />

        {/* Section 3: Solution / Value Proposition */}
        <Solution />

        {/* Section 4: Pricing Cards */}
        <Pricing />

        {/* Section 5: Interactive Cost Calculator */}
        <Calculator />

        {/* Section 6: Cost Simulation Table */}
        <CostTable />

        {/* Section 7: Plan Selector Guide */}
        <PlanGuide />

        {/* Section 8: Real Examples / Case Studies */}
        <Examples />

        {/* Section 9: Competitor Comparison */}
        <Comparison />

        {/* Section 10: What's Included (Features) */}
        <Features />

        {/* Section 11: Why Revenue Share */}
        <WhyRevenueShare />

        {/* Section 12: Process / Timeline */}
        <Process />

        {/* Section 13: FAQ */}
        <FAQ />

        {/* Section 14: Final CTA */}
        <FinalCTA />
      </main>

      {/* Section 15: Footer */}
      <Footer />
    </div>
  );
}

function App() {
  const [currentPage, setCurrentPage] = useState('main');

  useEffect(() => {
    // Check hash on mount and on hash change
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#custom' || hash === '#personalizzato') {
        setCurrentPage('custom');
      } else {
        setCurrentPage('main');
      }
    };

    // Initial check
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return currentPage === 'custom' ? <CustomPage /> : <MainPage />;
}

export default App;
