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
          primary: '#0a0a0a',
          secondary: '#111111',
          tertiary: '#1a1a1a',
          elevated: '#222222',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a1a1a1',
          muted: '#666666',
        },
        accent: {
          lime: '#CCFF00',
          'lime-hover': '#b8e600',
          'lime-glow': 'rgba(204, 255, 0, 0.3)',
          coral: '#FF6B6B',
          blue: '#00D4FF',
          gold: '#F5A623',
          purple: '#8B5CF6',
        },
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
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
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'draw-line': 'draw-line 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 255, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 255, 0, 0.5)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'draw-line': {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f1f0a 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
        'gradient-accent': 'linear-gradient(135deg, #CCFF00 0%, #00D4FF 100%)',
        'gradient-premium': 'linear-gradient(135deg, #F5A623 0%, #FF6B6B 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
