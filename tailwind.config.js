/* eslint-disable quote-props */
/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'input-search': {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0%)', opacity: '1' },
        },
        'scale-in-modal': {
          from: { transform: 'translate(-50%, -50%) scale(0)' },
          to: { transform: 'translate(-50%, -50%) scale(1)' },
        },
        'scale-out-modal': {
          from: { transform: 'translate(-50%, -50%) scale(1)' },
          to: { transform: 'translate(-50%, -50%) scale(0)' },
        },
        'overlay-in-modal': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'overlay-out-modal': {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        'input-search': 'input-search 0.3s linear',
        'scale-in-modal': 'scale-in-modal 0.3s forwards',
        'scale-out-modal': 'scale-out-modal 0.3s forwards',
        'overlay-in-modal': 'overlay-in-modal 0.3s forwards',
        'overlay-out-modal': 'overlay-out-modal 0.3s forwards',
      },
    },

  },

  plugins: [require('tailwindcss-animate')],
};
