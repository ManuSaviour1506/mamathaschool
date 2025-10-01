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
        'primary-indigo': '#4f46e5', // Deep Indigo/Violet
        'accent-gold': '#fbbf24',  // Vibrant Gold/Amber Accent
        'bg-light': '#ffffffff',     // Very Light background
        'bg-dark-slate': '#1f2937', // Admin/Dark mode background
        'text-dark': '#111827',
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
