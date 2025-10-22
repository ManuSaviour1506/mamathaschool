/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-indigo': '#4f46e5', // Deep Indigo/Violet (retained)
        'accent-gold': '#fbbf24',  // Vibrant Gold/Amber Accent (retained)
        'accent-red': '#DC2626',   // Deep Red (retained)
        // Global Theme BG Colors (Previously updated)
        'bg-light-start': '#8e9eab',
        'bg-light-end': '#eef2f3', 
        'bg-dark-start': '#136a8a',
        'bg-dark-end': '#267871', 
        'text-dark': '#111827',
        
        // NEW Home Page Colors
        'home-bg-start': '#7f7fd5', 
        'home-bg-mid': '#86a8e7',
        'home-bg-end': '#91eae4', 
        'box-start': '#f2994a', 
        'box-end': '#f2c94c', 
      },
      boxShadow: {
        'card-hover': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06), 0 0 0 4px rgba(251, 191, 36, 0.5)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
