// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3B82F6', // Blue
          dark: '#60A5FA'
        },
        secondary: {
          light: '#10B981', // Emerald
          dark: '#34D399'
        },
        background: {
          light: '#FFFFFF',
          dark: '#1F2937'
        },
        text: {
          light: '#1F2937',
          dark: '#F9FAFB'
        }
      },
    },
  },
  plugins: [],
}