/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['src/**/*.{js,jsx,ts,tsx}', 'public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0f',
        panel: 'rgba(255,255,255,0.04)',
        fg: '#f5f7fa',
        'fg-muted': 'rgba(245,247,250,0.65)',
        accent: '#00d4ff',
        'accent-dim': 'rgba(0,212,255,0.20)',
        'glass-border': 'rgba(255,255,255,0.10)',
      },
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        'mesh-drift': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%':      { transform: 'translate(4%, -6%) scale(1.08)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'mesh-drift': 'mesh-drift 14s ease-in-out infinite',
      },
      boxShadow: {
        glass:      '0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)',
        'glass-lg': '0 16px 48px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.08)',
        'accent-glow': '0 0 24px rgba(0,212,255,0.35)',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}
