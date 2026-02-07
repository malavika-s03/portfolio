/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fragment Mono', 'monospace'],
      },
      fontSize: {
        // Display/Name sizes
        'display-xl': ['174px', { lineHeight: '1', letterSpacing: '-0.09em', fontWeight: '600' }],
        'display-lg': ['116px', { lineHeight: '1', letterSpacing: '-0.09em', fontWeight: '600' }],
        'display-md': ['76px', { lineHeight: '1', letterSpacing: '-0.09em', fontWeight: '600' }],
        // About statement sizes
        'statement-xl': ['50px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        'statement-lg': ['40px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        'statement-md': ['32px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        // Intro paragraph sizes
        'intro-xl': ['40px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        'intro-lg': ['32px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        'intro-md': ['28px', { lineHeight: '1.1', letterSpacing: '-0.06em', fontWeight: '500' }],
        // Section title
        'section': ['20px', { lineHeight: '1.2', fontWeight: '500' }],
        // Philosophy text
        'philosophy': ['20px', { lineHeight: '1.4', fontWeight: '400' }],
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        border: 'var(--border)',
        accent: 'var(--accent)',
        'accent-foreground': 'var(--accent-foreground)',
        // Framer exact colors
        'framer-black': '#000000',
        'framer-white': '#ffffff',
        'framer-gray': '#333333',
        'framer-gray-light': '#b3b3b3',
        'framer-bg': '#f5f5f5',
        'framer-accent': '#ed4337',
        'framer-link': '#0099ff',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '1600px',
        'statement': '728px',
        'intro': '643px',
        'philosophy': '311px',
      },
      borderRadius: {
        'circle': '140px',
      },
      aspectRatio: {
        'portrait': '1.3825',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
