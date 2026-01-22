/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#000000',
          secondary: '#080808',
          tertiary: '#0f0f0f',
          elevated: '#161616',
          card: '#0c0c0c',
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0',
          muted: '#6b6b6b',
        },
        accent: {
          gold: '#D4A012',
          'gold-light': '#F5C518',
          'gold-dark': '#B8860B',
          'gold-muted': '#8B7355',
          honey: '#FFB800',
          amber: '#FFBF00',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#DC2626',
        info: '#3B82F6',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Arial Black', 'sans-serif'],
        body: ['Inter', 'Helvetica Neue', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'fluid-base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
        'fluid-3xl': 'clamp(1.875rem, 1.4rem + 2.375vw, 3rem)',
        'fluid-4xl': 'clamp(2.25rem, 1.5rem + 3.75vw, 4rem)',
        'fluid-5xl': 'clamp(3rem, 1.8rem + 6vw, 6rem)',
        'fluid-6xl': 'clamp(3.75rem, 2rem + 8.75vw, 8rem)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'draw-line': 'draw-line 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 160, 18, 0.2)' },
          '50%': { boxShadow: '0 0 50px rgba(212, 160, 18, 0.4)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #000000 0%, #080808 50%, #0a0a0a 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(212, 160, 18, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D4A012 0%, #F5C518 50%, #D4A012 100%)',
        'gradient-premium': 'linear-gradient(135deg, #D4A012 0%, #FFB800 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
