/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-fira-code)', 'Consolas', 'monospace'],
      },
      colors: {
        'phantom-dark': '#0c0c0e',
        'phantom-panel': 'rgba(18, 18, 22, 0.95)',
        'phantom-bright': '#ffffff',
        'phantom-mid': '#c8ccd0',
        'phantom-dim': '#909498',
        'phantom-text-dark': '#606468',
      },
      animation: {
        'grid-pulse': 'gridPulse 4s ease-in-out infinite',
        'logo-glitch': 'logoGlitch 10s steps(1) infinite',
        'blink': 'blink 2s steps(1) infinite',
        'panel-sweep': 'panelSweep 8s linear infinite',
        'text-glitch': 'textGlitch 0.3s steps(2)',
        'pixel-float': 'pixelFloat 8s steps(1) infinite',
        'cursor-blink': 'cursorBlink 1s steps(1) infinite',
      },
      keyframes: {
        gridPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        logoGlitch: {
          '0%, 94%, 100%': { textShadow: '0 0 30px rgba(255,255,255,0.2)' },
          '95%': { textShadow: '-2px 0 #ff3366, 2px 0 #33ffff' },
          '96%': { textShadow: '2px 0 #ff3366, -2px 0 #33ffff' },
          '97%': { textShadow: '0 0 30px rgba(255,255,255,0.2)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        panelSweep: {
          '0%': { left: '-50%' },
          '100%': { left: '150%' },
        },
        textGlitch: {
          '0%, 100%': { transform: 'translate(0)', opacity: '1' },
          '25%': { transform: 'translate(-2px, 1px)', opacity: '0.8' },
          '50%': { transform: 'translate(2px, -1px)', opacity: '0.6' },
          '75%': { transform: 'translate(-1px, -1px)', opacity: '0.9' },
        },
        pixelFloat: {
          '0%': { transform: 'translate(0px, 0px)' },
          '12.5%': { transform: 'translate(2px, -2px)' },
          '25%': { transform: 'translate(-2px, -3px)' },
          '37.5%': { transform: 'translate(-3px, 1px)' },
          '50%': { transform: 'translate(2px, 2px)' },
          '62.5%': { transform: 'translate(3px, -1px)' },
          '75%': { transform: 'translate(-1px, -2px)' },
          '87.5%': { transform: 'translate(1px, 2px)' },
          '100%': { transform: 'translate(0px, 0px)' },
        },
        cursorBlink: {
          '0%, 50%': { opacity: '1' },
          '51%, 100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
