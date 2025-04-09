/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-sky-light': '#54C5F8',
'blue-ocean-dark': '#2F373F',
'slate-steel': '#3E6680',
'blue-periwinkle': 'rgb(77, 137, 255)',
'blue-cornflower': '#4d89ff',
'cloud-light': '#e7eaf0',
'pure-white': '#fff',
'charcoal': '#333',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.6, transform: 'scale(1.2)' },
        },
    },
  },
  animation: {
    fadeUp: 'fadeUp 0.5s ease-out', // Adjust timing and easing as needed
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
}
