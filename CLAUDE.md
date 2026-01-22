# CLAUDE.md — E-Commerce Services Landing Page

> **Project:** Premium single-scroll landing page for e-commerce development services
> **Model:** Revenue Share + Setup pricing
> **Language:** Italian (IT)
> **Quality Target:** €10,000+ agency-level design and UX

---

## 🎯 PROJECT OVERVIEW

Build a high-converting, visually stunning single-page website for an e-commerce development service targeting Italian resellers (sneakers, streetwear). The page must deliver a "wow effect" with bold typography, fluid animations, and unconventional layouts that break from generic SaaS templates.

### Core Value Proposition
"Pago Solo Se Vendi" — A revenue share model where clients pay a one-time setup fee plus a percentage of their revenue (with min/max caps), aligning provider and client interests.

---

## 🎨 DESIGN SYSTEM

### Color Palette

```css
:root {
  /* Base */
  --color-bg-primary: #0a0a0a;
  --color-bg-secondary: #111111;
  --color-bg-tertiary: #1a1a1a;
  --color-bg-elevated: #222222;
  
  /* Text */
  --color-text-primary: #ffffff;
  --color-text-secondary: #a1a1a1;
  --color-text-muted: #666666;
  
  /* Accent - Primary (CTAs, highlights) */
  --color-accent-lime: #CCFF00;
  --color-accent-lime-hover: #b8e600;
  --color-accent-lime-glow: rgba(204, 255, 0, 0.3);
  
  /* Accent - Secondary */
  --color-accent-coral: #FF6B6B;      /* Warnings, urgency */
  --color-accent-blue: #00D4FF;       /* Trust, technology */
  --color-accent-gold: #F5A623;       /* Premium, value */
  --color-accent-purple: #8B5CF6;     /* Special highlights */
  
  /* Semantic */
  --color-success: #22C55E;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  
  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f1f0a 100%);
  --gradient-card: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
  --gradient-accent: linear-gradient(135deg, #CCFF00 0%, #00D4FF 100%);
  --gradient-premium: linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%);
}
```

### Typography

```css
:root {
  /* Font Families */
  --font-display: 'Space Grotesk', 'Arial Black', sans-serif;
  --font-body: 'Inter', 'Helvetica Neue', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes (fluid, clamp-based) */
  --text-xs: clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem);
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.2rem + 1.5vw, 2rem);
  --text-3xl: clamp(1.875rem, 1.4rem + 2.375vw, 3rem);
  --text-4xl: clamp(2.25rem, 1.5rem + 3.75vw, 4rem);
  --text-5xl: clamp(3rem, 1.8rem + 6vw, 6rem);
  --text-6xl: clamp(3.75rem, 2rem + 8.75vw, 8rem);
  
  /* Font Weights */
  --font-normal: 400;
  --font-medium: 500;
  --font-semibold: 600;
  --font-bold: 700;
  --font-black: 900;
  
  /* Line Heights */
  --leading-none: 1;
  --leading-tight: 1.1;
  --leading-snug: 1.25;
  --leading-normal: 1.5;
  --leading-relaxed: 1.75;
  
  /* Letter Spacing */
  --tracking-tighter: -0.05em;
  --tracking-tight: -0.025em;
  --tracking-normal: 0;
  --tracking-wide: 0.025em;
  --tracking-wider: 0.05em;
}
```

### Spacing Scale

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */
  --space-40: 10rem;    /* 160px */
  
  /* Section Padding */
  --section-padding-y: clamp(4rem, 8vw, 8rem);
  --section-padding-x: clamp(1rem, 5vw, 3rem);
  
  /* Container */
  --container-max: 1400px;
  --container-narrow: 900px;
}
```

### Border Radius

```css
:root {
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-full: 9999px;
}
```

### Shadows & Effects

```css
:root {
  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.5);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.5);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.5);
  --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5);
  --shadow-glow-lime: 0 0 40px rgba(204, 255, 0, 0.3);
  --shadow-glow-blue: 0 0 40px rgba(0, 212, 255, 0.3);
  
  /* Glassmorphism */
  --glass-bg: rgba(255, 255, 255, 0.03);
  --glass-border: rgba(255, 255, 255, 0.08);
  --glass-blur: blur(20px);
  
  /* Grain Texture (apply as pseudo-element) */
  --grain-opacity: 0.03;
}
```

---

## 🎬 ANIMATION SPECIFICATIONS

### Timing & Easing

```css
:root {
  /* Durations */
  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  --duration-slower: 800ms;
  --duration-slowest: 1200ms;
  
  /* Easings */
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-in-out-quart: cubic-bezier(0.76, 0, 0.24, 1);
  --ease-spring: cubic-bezier(0.22, 1.2, 0.36, 1);
}
```

### Scroll Reveal Animations

```javascript
// Default reveal animation
const revealConfig = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.8,
    ease: [0.16, 1, 0.3, 1] // ease-out-expo
  }
};

// Staggered children
const staggerConfig = {
  staggerChildren: 0.1,
  delayChildren: 0.1
};

// Intersection Observer settings
const observerConfig = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};
```

### Hover Effects

```javascript
// Card hover
const cardHover = {
  scale: 1.02,
  y: -8,
  transition: { duration: 0.3, ease: "easeOut" }
};

// Button hover
const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2, ease: "easeOut" }
};

// 3D tilt (on mouse move)
const tiltConfig = {
  maxTilt: 10,        // degrees
  perspective: 1000,  // px
  scale: 1.02,
  speed: 500          // ms
};
```

### Number Counter Animation

```javascript
const counterConfig = {
  duration: 1500,           // ms
  easing: "easeOutQuart",
  startOnView: true,
  threshold: 0.5,
  formatOptions: {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0
  }
};
```

### Magnetic Button Effect

```javascript
const magneticConfig = {
  radius: 100,      // px - activation radius
  strength: 0.3,    // 0-1 - pull strength
  ease: 0.15        // lerp factor
};
```

### Background Animations

```javascript
// Gradient mesh morph
const gradientMorph = {
  duration: 15000,  // ms per cycle
  keyframes: [
    { backgroundPosition: "0% 50%" },
    { backgroundPosition: "100% 50%" },
    { backgroundPosition: "0% 50%" }
  ]
};

// Floating shapes
const floatAnimation = {
  y: [0, -20, 0],
  x: [0, 10, 0],
  rotate: [0, 5, 0],
  duration: 6,
  repeat: Infinity,
  ease: "easeInOut"
};
```

---

## 📐 RESPONSIVE BREAKPOINTS

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Large phones */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large screens */
```

### Responsive Behavior
- **Mobile (< 768px):** Single column, stacked layouts, larger touch targets (min 44px), simplified animations
- **Tablet (768px - 1024px):** Two-column grids where appropriate, adjusted spacing
- **Desktop (> 1024px):** Full layouts, all animations, hover effects enabled

---

## 📦 COMPONENT PATTERNS

### Card Component (Glassmorphism)

```jsx
// Base card with glass effect
<div className="
  relative overflow-hidden
  bg-white/[0.03] 
  backdrop-blur-xl 
  border border-white/[0.08]
  rounded-2xl
  p-6 md:p-8
  transition-all duration-300
  hover:bg-white/[0.05]
  hover:border-white/[0.12]
  hover:shadow-xl
  hover:-translate-y-2
">
  {children}
</div>
```

### Button Components

```jsx
// Primary CTA (Electric Lime)
<button className="
  relative overflow-hidden
  bg-[#CCFF00] text-black
  font-semibold text-lg
  px-8 py-4
  rounded-full
  transition-all duration-200
  hover:bg-[#b8e600]
  hover:shadow-[0_0_40px_rgba(204,255,0,0.3)]
  hover:scale-105
  active:scale-95
">
  {children}
</button>

// Secondary / Ghost Button
<button className="
  relative
  bg-transparent
  text-white
  font-medium
  px-6 py-3
  rounded-full
  border border-white/20
  transition-all duration-200
  hover:bg-white/5
  hover:border-white/40
">
  {children}
</button>
```

### Section Container

```jsx
<section className="
  relative
  min-h-screen
  py-24 md:py-32 lg:py-40
  px-4 md:px-8 lg:px-16
  overflow-hidden
">
  <div className="max-w-[1400px] mx-auto">
    {children}
  </div>
</section>
```

### Pricing Card (Featured)

```jsx
// Featured plan card (Growth)
<div className="
  relative
  bg-gradient-to-br from-white/[0.08] to-white/[0.02]
  backdrop-blur-xl
  border-2 border-[#CCFF00]/50
  rounded-3xl
  p-8 md:p-10
  transform scale-105
  shadow-[0_0_60px_rgba(204,255,0,0.15)]
">
  {/* "CONSIGLIATO" badge */}
  <div className="
    absolute -top-4 left-1/2 -translate-x-1/2
    bg-[#CCFF00] text-black
    text-xs font-bold uppercase tracking-wider
    px-4 py-1.5
    rounded-full
  ">
    Consigliato
  </div>
  {children}
</div>
```

---

## 📄 SECTION CONTENT & STRUCTURE

### Section 1: HERO

```yaml
layout: Full viewport, centered content
background: Animated gradient mesh + subtle grain

content:
  preheadline: "Revenue Share Model"
  headline: "Pago Solo Se Vendi"
  subheadline: "Store WooCommerce professionali con pricing che si adatta al tuo business. Tu investi nel setup, io investo nel tuo successo."
  
  cta_primary:
    text: "Prenota Una Call Gratuita"
    action: Link to Calendly or contact form
    style: Electric lime, magnetic hover effect
    
  cta_secondary:
    text: "Scopri I Piani"
    action: Smooth scroll to pricing section
    style: Ghost button
    
  trust_badges:
    - "7-14 giorni"
    - "SEO Incluso"
    - "Zero Sorprese"

animations:
  - Staggered text reveal (word by word)
  - Background gradient morphing continuously
  - Floating decorative shapes with parallax
  - Scroll indicator bounce at bottom
```

### Section 2: PROBLEM / AGITATION

```yaml
layout: Centered headline + grid of pain point cards
background: Subtle shift to warmer tones

content:
  headline: "Il Problema Con Le Soluzioni Tradizionali"
  
  pain_points:
    - icon: "💸"
      title: "Agenzie Tradizionali"
      description: "€500-1,500/mese fissi, anche quando vendi zero"
      accent: coral
      
    - icon: "🔗"
      title: "Shopify + App + Temi"
      description: "Costi nascosti che crescono senza controllo"
      accent: coral
      
    - icon: "👻"
      title: "Freelancer"
      description: "Nessun supporto dopo il lancio, problemi irrisolti"
      accent: coral
      
    - icon: "😫"
      title: "Fai Da Te"
      description: "Settimane di lavoro, risultati mediocri, SEO inesistente"
      accent: coral

animations:
  - Cards slide in from different directions
  - Numbers with strikethrough effect
  - Subtle shake on hover (frustration feeling)
```

### Section 3: SOLUTION / VALUE PROPOSITION

```yaml
layout: Split or diagonal, visual flow diagram
background: Return to dark with lime accents

content:
  headline: "La Logica del Revenue Share"
  
  value_points:
    - "Tu investi nel setup (una tantum)"
    - "Io investo nel tuo successo (guadagno solo se tu guadagni)"
    - "Entrambi protetti con min/max cap"
    
  flow_diagram:
    steps:
      - "Setup" → "Launch" → "Growth" → "Shared Success"
    visual: Animated connecting line

animations:
  - Flow diagram draws on scroll
  - Checkmarks bounce in
  - Text highlights sequentially
```

### Section 4: PRICING CARDS

```yaml
layout: Three cards horizontal, center elevated
background: Dark with subtle radial gradient behind featured card

plans:
  starter:
    emoji: "🌱"
    name: "Starter"
    tagline: "Per chi inizia | <100 prodotti"
    setup: "€499"
    setup_label: "una tantum"
    revenue_share: "4%"
    min_monthly: "€79"
    max_monthly: "€199"
    breakeven: "€4,975/mese"
    accent: muted/default
    featured: false
    
  growth:
    emoji: "🚀"
    name: "Growth"
    tagline: "Per chi vuole scalare | Prodotti illimitati"
    setup: "€999"
    setup_label: "una tantum"
    revenue_share: "3%"
    min_monthly: "€99"
    max_monthly: "€399"
    breakeven: "€13,300/mese"
    accent: lime
    featured: true
    badge: "⭐ CONSIGLIATO"
    
  pro:
    emoji: "💎"
    name: "Pro"
    tagline: "Per operazioni serie | Full automation"
    setup: "€1,999"
    setup_label: "una tantum"
    revenue_share: "2.5%"
    min_monthly: "€149"
    max_monthly: "€599"
    breakeven: "€23,960/mese"
    accent: gold
    featured: false

card_structure:
  - Plan name + emoji
  - Tagline
  - Setup price (large)
  - Revenue share percentage (prominent)
  - Min/Max range
  - Break-even info
  - CTA button

animations:
  - Cards stagger in on scroll
  - Price numbers count up from 0
  - Featured card has subtle glow pulse
  - 3D tilt on hover
```

### Section 5: INTERACTIVE COST CALCULATOR

```yaml
layout: Centered, full-width interactive element
background: Elevated dark card

content:
  headline: "Quanto Pagheresti Tu?"
  subheadline: "Muovi lo slider per vedere il costo in base al tuo fatturato"
  
  calculator:
    input:
      type: range slider
      min: 0
      max: 50000
      step: 500
      default: 8000
      format: currency (€)
      
    output:
      display: "Con €X di fatturato, paghi €Y/mese"
      show_all_plans: true
      highlight_best_value: true
      cap_celebration: "🎉 Hai raggiunto il cap! Non paghi di più"
      
    visualization:
      type: comparison bar chart
      animate_on_change: true

logic:
  calculate(revenue, plan):
    percentage = plan.revenue_share
    calculated = revenue * percentage
    if calculated < plan.min: return plan.min
    if calculated > plan.max: return plan.max
    return calculated

animations:
  - Slider thumb has glow effect
  - Numbers interpolate smoothly on change
  - Confetti burst when hitting cap
  - Bar chart animates with spring physics
```

### Section 6: COST SIMULATION TABLE

```yaml
layout: Responsive table with sticky header
background: Subtle gradient

content:
  headline: "Simulazione Costi Dettagliata"
  
  table_data:
    headers: ["Fatturato Mensile", "Starter (4%)", "Growth (3%)", "Pro (2.5%)"]
    rows:
      - ["€0 - €1,975", "€79 (min)", "€99 (min)", "€149 (min)"]
      - ["€2,000", "€80", "€99 (min)", "€149 (min)"]
      - ["€3,000", "€120", "€99 (min)", "€149 (min)"]
      - ["€5,000", "€199 (max)", "€150", "€149 (min)"]
      - ["€7,500", "€199 (max)", "€225", "€188"]
      - ["€10,000", "€199 (max)", "€300", "€250"]
      - ["€15,000", "€199 (max)", "€399 (max)", "€375"]
      - ["€25,000+", "€199 (max)", "€399 (max)", "€599 (max)"]

styling:
  min_cells: subtle green highlight
  max_cells: lime highlight with "(max)" badge
  hover: highlight entire row
  
animations:
  - Rows reveal staggered on scroll
  - "MAX" badges pulse subtly
  - Row highlights on hover
```

### Section 7: PLAN SELECTOR GUIDE

```yaml
layout: Tabs or accordion
background: Matching section above

content:
  headline: "Quale Piano Fa Per Te?"
  
  guides:
    starter:
      title: "Scegli STARTER se:"
      points:
        - "Stai iniziando (0-50 vendite/mese)"
        - "Budget limitato per il setup"
        - "Fatturi meno di €5,000/mese"
        - "Non hai bisogno di sync bidirezionale"
        
    growth:
      title: "Scegli GROWTH se:"
      points:
        - "Hai già un business attivo"
        - "Fatturi €5,000-€15,000/mese"
        - "Vuoi scalare senza limiti"
        - "Hai bisogno di automazione completa"
      highlight: true
      
    pro:
      title: "Scegli PRO se:"
      points:
        - "Fatturi €15,000+/mese"
        - "Vuoi il massimo controllo"
        - "Hai bisogno di sviluppo custom"
        - "Vuoi supporto prioritario"

animations:
  - Accordion smooth expand/collapse
  - Checkmarks draw in sequence
  - Selected section glows
```

### Section 8: REAL EXAMPLES / CASE STUDIES

```yaml
layout: Three persona cards in row or carousel on mobile
background: Dark with subtle personas imagery

content:
  headline: "Esempi Reali"
  subheadline: "Vedi quanto pagheresti in situazioni concrete"
  
  examples:
    - persona: "Reseller Piccolo"
      plan: "Starter"
      avatar: "🌱"
      revenue: "€3,000/mese"
      margin: "20% = €600 profitto"
      service_cost: "€120/mese"
      calculation: "€3,000 × 4%"
      profit_percentage: "20%"
      benefits:
        - "Paghi €120 per avere tutto automatizzato"
        - "Risparmi 10+ ore/settimana"
        
    - persona: "Reseller Medio"
      plan: "Growth"
      avatar: "🚀"
      revenue: "€8,000/mese"
      margin: "20% = €1,600 profitto"
      service_cost: "€240/mese"
      calculation: "€8,000 × 3%"
      profit_percentage: "15%"
      benefits:
        - "SEO ti porta traffico gratuito"
        - "Zero errori di stock"
      highlight: true
      
    - persona: "Reseller Grande"
      plan: "Pro"
      avatar: "💎"
      revenue: "€25,000/mese"
      margin: "20% = €5,000 profitto"
      service_cost: "€599/mese (CAP!)"
      calculation: "CAP raggiunto"
      profit_percentage: "12%"
      benefits:
        - "Paghi €599 MAX anche se fatturi €50k"
        - "Economia di scala a tuo favore"

animations:
  - Persona cards fade up staggered
  - Numbers animate when visible
  - Progress bars for profit retention
  - Subtle float on persona avatars
```

### Section 9: COMPETITOR COMPARISON

```yaml
layout: Table with "our solution" row highlighted
background: Gradient transition

content:
  headline: "Confronto Con Le Alternative"
  
  comparison_table:
    headers: ["Soluzione", "Costo Mensile", "Costo Annuale", "Supporto"]
    rows:
      - solution: "Shopify + App + Tema"
        monthly: "€100-150/mese"
        yearly: "€1,200-1,800"
        support: "Limitato"
        style: muted
        
      - solution: "Agenzia tradizionale"
        monthly: "€500-1,500/mese"
        yearly: "€6,000-18,000"
        support: "Variabile"
        style: muted
        
      - solution: "Freelancer"
        monthly: "€200-500/progetto"
        yearly: "N/A"
        support: "Nessuno"
        style: muted
        
      - solution: "Nostro Growth (€8k fat.)"
        monthly: "~€240/mese"
        yearly: "~€2,880"
        support: "Incluso ✓"
        style: highlighted
        highlight: true

animations:
  - Table rows slide in
  - Our row has glow effect
  - Checkmarks vs X marks animate
  - Strikethrough on competitor disadvantages
```

### Section 10: WHAT'S INCLUDED

```yaml
layout: Bento grid (irregular, modern)
background: Dark with subtle grid lines

content:
  headline: "Cosa È Incluso In Tutti I Piani"
  
  features:
    - icon: "🛒"
      title: "Store WooCommerce"
      description: "Professionale e personalizzato"
      
    - icon: "🎨"
      title: "Tema Premium"
      description: "Ottimizzato per conversioni"
      
    - icon: "🔒"
      title: "SSL e Sicurezza"
      description: "Certificato incluso"
      
    - icon: "☁️"
      title: "Hosting Gestito"
      description: "Server veloci e affidabili"
      
    - icon: "💾"
      title: "Backup Giornalieri"
      description: "I tuoi dati sempre al sicuro"
      
    - icon: "🔄"
      title: "Aggiornamenti Automatici"
      description: "WordPress e plugin sempre aggiornati"
      
    - icon: "📦"
      title: "Sync Stock"
      description: "Collegato al tuo feed prodotti"
      
    - icon: "🔍"
      title: "SEO Base"
      description: "Configurato per farti trovare"
      
    - icon: "📱"
      title: "Mobile Responsive"
      description: "Perfetto su ogni dispositivo"
      
    - icon: "💳"
      title: "Pagamenti"
      description: "Stripe e PayPal integrati"
      
    - icon: "🎧"
      title: "Supporto Post-Lancio"
      description: "Non ti lasciamo mai solo"

animations:
  - Grid items fade in staggered
  - Icons have bounce on reveal
  - Hover triggers scale + elevated shadow
  - Gradient border on hover
```

### Section 11: WHY REVENUE SHARE

```yaml
layout: Two columns - Client benefits vs Provider benefits
background: Split design or gradient divider

content:
  headline: "Perché Revenue Share?"
  subheadline: "Un modello che allinea i nostri interessi"
  
  client_benefits:
    title: "Per Te (Cliente)"
    icon: "👤"
    points:
      - title: "Rischio Ridotto"
        description: "Se vendi poco, paghi poco"
        
      - title: "Allineamento Interessi"
        description: "Io voglio che tu venda"
        
      - title: "Cap Garantito"
        description: "Mai sorprese, conosci il massimo"
        
      - title: "Flessibilità"
        description: "Si adatta al tuo business"
        
  provider_benefits:
    title: "Per Me (Fornitore)"
    icon: "🤝"
    points:
      - title: "Upside Potential"
        description: "Se hai successo, cresco con te"
        
      - title: "Relazione Duratura"
        description: "Non 'faccio e sparisco'"
        
      - title: "Incentivo a Fare Bene"
        description: "Il mio guadagno dipende dalla qualità"
        
      - title: "Clienti Seri"
        description: "Chi paga revenue share è committed"

animations:
  - Columns slide in from opposite sides
  - Handshake/connection visual draws
  - Points reveal staggered within each column
```

### Section 12: PROCESS / NEXT STEPS

```yaml
layout: Horizontal timeline or vertical stepper
background: Dark with progress line accent

content:
  headline: "Come Funziona"
  subheadline: "Dal primo contatto al lancio in 7-14 giorni"
  
  steps:
    - number: "01"
      title: "Call Gratuita"
      description: "30 minuti per capire le tue esigenze"
      duration: "30 min"
      
    - number: "02"
      title: "Proposta Personalizzata"
      description: "Piano consigliato + timeline"
      duration: "24-48h"
      
    - number: "03"
      title: "Accordo e Pagamento"
      description: "50% anticipo, 50% al lancio"
      duration: "Stesso giorno"
      
    - number: "04"
      title: "Sviluppo"
      description: "Costruiamo il tuo store"
      duration: "7-14 giorni"
      
    - number: "05"
      title: "Lancio"
      description: "Go live + supporto attivo"
      duration: "Giorno X"
      
    - number: "06"
      title: "Fatturazione Mensile"
      description: "Revenue share attivo"
      duration: "Ongoing"

animations:
  - Timeline draws as you scroll
  - Steps reveal sequentially
  - Numbers pulse when active
  - Progress line fills between steps
```

### Section 13: IMPORTANT NOTES / FAQ

```yaml
layout: Accordion with icons
background: Slightly elevated

content:
  headline: "Note Importanti"
  
  faqs:
    - question: "Come viene calcolato il fatturato?"
      answer: "Fatturato = Vendite lorde (prima dei costi, resi esclusi)"
      icon: "📊"
      
    - question: "Quando si paga?"
      answer: "Fatturazione mensile, pagamento entro il 5 del mese successivo"
      icon: "📅"
      
    - question: "Come monitoro i costi?"
      answer: "Dashboard automatica con vendite e calcolo fee in tempo reale"
      icon: "📈"
      
    - question: "E se non vendo nulla?"
      answer: "Si paga comunque il minimo garantito (copre hosting e manutenzione)"
      icon: "⚠️"
      
    - question: "Posso cambiare piano?"
      answer: "Sì, upgrade o downgrade con 30 giorni di preavviso"
      icon: "🔄"
      
    - question: "E se voglio cancellare?"
      answer: "60 giorni di preavviso, il sito rimane tuo"
      icon: "🚪"

animations:
  - Accordions expand with smooth spring
  - Icons rotate or pulse on open
  - Content fades in when expanded
```

### Section 14: FINAL CTA

```yaml
layout: Full-width, centered, high-impact
background: Animated gradient (lime + dark)

content:
  headline: "Pronto a Crescere Insieme?"
  subheadline: "Prenota una call gratuita di 30 minuti. Nessun impegno, solo una conversazione per capire se possiamo aiutarti."
  
  cta_primary:
    text: "Prenota La Tua Call Gratuita"
    action: Calendly link or form modal
    style: Large, prominent, magnetic hover, glow
    
  alternative_contact:
    text: "O scrivici direttamente"
    email: "info@example.com"
    note: "Rispondiamo entro 24h"
    
  trust_footer: "Prezzi IVA esclusa | Validi da Gennaio 2025"

animations:
  - Background gradient continuously morphing
  - CTA has subtle continuous pulse
  - Magnetic cursor effect on button
  - Particles react to mouse
```

### Section 15: FOOTER

```yaml
layout: Multi-column footer
background: Darkest tone

content:
  logo: true
  
  columns:
    - title: "Servizi"
      links: ["Store WooCommerce", "SEO E-commerce", "Sync Inventario"]
      
    - title: "Risorse"
      links: ["FAQ", "Come Funziona", "Casi Studio"]
      
    - title: "Contatti"
      items:
        - email: "info@example.com"
        - phone: "+39 XXX XXX XXXX"
        - location: "Italia"
        
  social:
    - instagram
    - linkedin
    - whatsapp
    
  legal:
    - "Privacy Policy"
    - "Termini e Condizioni"
    - "P.IVA: XXXXXXXXXXX"
    
  copyright: "© 2025 [Brand Name]. Tutti i diritti riservati."
```

---

## 🛠 TECHNICAL STACK

### Required Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "tailwindcss": "^3.4.0",
    "@tailwindcss/forms": "^0.5.0",
    "clsx": "^2.0.0",
    "lucide-react": "^0.300.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0"
  }
}
```

### Project Structure

```
/src
  /components
    /ui
      Button.jsx
      Card.jsx
      Container.jsx
      Badge.jsx
      Accordion.jsx
      Slider.jsx
    /sections
      Hero.jsx
      Problem.jsx
      Solution.jsx
      Pricing.jsx
      Calculator.jsx
      CostTable.jsx
      PlanGuide.jsx
      Examples.jsx
      Comparison.jsx
      Features.jsx
      WhyRevenueShare.jsx
      Process.jsx
      FAQ.jsx
      FinalCTA.jsx
      Footer.jsx
    /animations
      ScrollReveal.jsx
      NumberCounter.jsx
      MagneticButton.jsx
      ParallaxLayer.jsx
  /hooks
    useInView.js
    useMousePosition.js
    useSmoothScroll.js
  /utils
    calculatePrice.js
    formatCurrency.js
  /styles
    globals.css
  App.jsx
  main.jsx
/public
  /fonts
  /images
index.html
tailwind.config.js
vite.config.js
```

### Tailwind Configuration

```javascript
// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0a0a0a',
          secondary: '#111111',
          tertiary: '#1a1a1a',
          elevated: '#222222',
        },
        accent: {
          lime: '#CCFF00',
          coral: '#FF6B6B',
          blue: '#00D4FF',
          gold: '#F5A623',
          purple: '#8B5CF6',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 255, 0, 0.5)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
```

---

## 🔍 SEO REQUIREMENTS

### Meta Tags

```html
<title>Store E-Commerce Professionale | Revenue Share Pricing | [Brand]</title>
<meta name="description" content="Store WooCommerce professionali con pricing Revenue Share. Paga solo in base al tuo fatturato. Setup da €499, supporto incluso, SEO ottimizzato. Prenota una call gratuita.">
<meta name="keywords" content="ecommerce, woocommerce, store online, revenue share, reseller, sneakers, streetwear, SEO, Italia">
<meta name="author" content="[Brand Name]">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[domain].com">

<!-- Open Graph -->
<meta property="og:title" content="Pago Solo Se Vendi | Store E-Commerce Revenue Share">
<meta property="og:description" content="Store professionali con pricing che si adatta al tuo business. Tu investi nel setup, noi investiamo nel tuo successo.">
<meta property="og:image" content="https://[domain].com/og-image.jpg">
<meta property="og:url" content="https://[domain].com">
<meta property="og:type" content="website">
<meta property="og:locale" content="it_IT">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Pago Solo Se Vendi | Store E-Commerce Revenue Share">
<meta name="twitter:description" content="Store professionali con pricing Revenue Share. Cresci insieme a noi.">
<meta name="twitter:image" content="https://[domain].com/twitter-image.jpg">
```

### Schema.org Markup

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Store E-Commerce WooCommerce",
  "description": "Sviluppo store e-commerce professionali con modello Revenue Share",
  "provider": {
    "@type": "Organization",
    "name": "[Brand Name]",
    "url": "https://[domain].com"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Italy"
  },
  "offers": [
    {
      "@type": "Offer",
      "name": "Piano Starter",
      "price": "499",
      "priceCurrency": "EUR",
      "description": "Per chi inizia, <100 prodotti, 4% revenue share"
    },
    {
      "@type": "Offer",
      "name": "Piano Growth",
      "price": "999",
      "priceCurrency": "EUR",
      "description": "Per scalare, prodotti illimitati, 3% revenue share"
    },
    {
      "@type": "Offer",
      "name": "Piano Pro",
      "price": "1999",
      "priceCurrency": "EUR",
      "description": "Full automation, 2.5% revenue share"
    }
  ]
}
```

---

## ♿ ACCESSIBILITY REQUIREMENTS

- **Keyboard Navigation:** All interactive elements focusable and operable
- **Focus States:** Visible focus indicators on all interactive elements
- **Color Contrast:** Minimum 4.5:1 for body text, 3:1 for large text
- **Reduced Motion:** Respect `prefers-reduced-motion` media query
- **Alt Text:** Descriptive alt text for all meaningful images
- **ARIA Labels:** Proper labels for buttons, forms, and interactive components
- **Semantic HTML:** Proper heading hierarchy, landmarks, lists
- **Screen Reader:** Test with VoiceOver/NVDA

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## ⚡ PERFORMANCE TARGETS

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1
- **Total Page Size:** < 2MB
- **Time to Interactive:** < 3.5s

### Optimization Checklist
- [ ] Lazy load images below the fold
- [ ] Use WebP image format with fallbacks
- [ ] Implement font-display: swap
- [ ] Minimize JavaScript bundle size
- [ ] Use CSS containment where possible
- [ ] Preload critical resources
- [ ] Enable compression (gzip/brotli)

---

## 📝 CODING CONVENTIONS

### Naming
- **Components:** PascalCase (e.g., `PricingCard.jsx`)
- **Functions:** camelCase (e.g., `calculatePrice()`)
- **CSS Classes:** kebab-case with Tailwind utilities
- **Constants:** SCREAMING_SNAKE_CASE (e.g., `PLANS_DATA`)

### Component Structure
```jsx
// 1. Imports
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

// 2. Constants/Types
const ANIMATION_CONFIG = { ... };

// 3. Component
export function ComponentName({ prop1, prop2 }) {
  // 3a. Hooks
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  // 3b. State
  const [state, setState] = useState(initial);
  
  // 3c. Effects
  useEffect(() => { ... }, []);
  
  // 3d. Handlers
  const handleClick = () => { ... };
  
  // 3e. Render
  return (
    <motion.div ref={ref}>
      ...
    </motion.div>
  );
}
```

---

## 🚀 BUILD COMMAND

When complete, the project should build and run with:

```bash
npm install
npm run dev     # Development
npm run build   # Production build
npm run preview # Preview production build
```

---

## ✅ FINAL CHECKLIST

Before considering the project complete:

- [ ] All 15 sections implemented
- [ ] All animations smooth at 60fps
- [ ] Interactive calculator working correctly
- [ ] Mobile responsive (tested on real devices)
- [ ] All content in Italian
- [ ] SEO meta tags present
- [ ] Schema.org markup valid
- [ ] Accessibility audit passed
- [ ] Performance targets met
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] No console errors
- [ ] All links and CTAs functional