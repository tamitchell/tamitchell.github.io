/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Your existing colors
        'blue-sky-light': '#54C5F8',
        'blue-ocean-dark': '#2F373F',
        'slate-steel': '#3E6680',
        'blue-periwinkle': 'rgb(77, 137, 255)',
        'blue-cornflower': '#4d89ff',
        'cloud-light': '#e7eaf0',
        'pure-white': '#fff',
        'charcoal': '#333',
        
        // Newspaper-inspired colors
        'paper': {
          DEFAULT: '#f7f3e9', // Base paper color
          cream: '#f4e9d7',   // Warmer variant
          light: '#fdfbf7',   // Lighter shade
          dark: '#f2ece1',    // Darker shade
        },
        'ink': {
          DEFAULT: '#1a1a1a', // Main text color
          gray: '#534f4d',    // Secondary text
          light: '#948576',   // Warm gray
        },
        'accent': {
          DEFAULT: '#544a3f', // Warm brown
          light: '#e8dccc',   // Highlight color
        }
      },
      fontFamily: {
        // Newspaper-style typography
        headline: ['Playfair Display', 'Times New Roman', 'serif'],
        body: ['Vollkorn', 'Georgia', 'serif'],
        sans: ['Source Sans Pro', 'Arial', 'sans-serif'],
        mono: ['Courier Prime', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#534f4d',
            '--tw-prose-headings': '#1a1a1a',
            '--tw-prose-links': '#544a3f',
            '--tw-prose-quotes': '#534f4d',
            maxWidth: '65ch',
          },
        },
      },
      boxShadow: {
        'newspaper': '0 2px 4px rgba(84, 74, 63, 0.15)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        fadeUp: 'fadeUp 0.5s ease-out',
        fadeIn: 'fadeIn 0.7s ease-out',
      },
      spacing: {
        'column': '2rem',
      },
      borderWidth: {
        'newspaper': '0.5px',
      },
    },
  },
}