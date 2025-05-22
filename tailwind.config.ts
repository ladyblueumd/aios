import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Sadie OS "Sky Blue Clarity" Color Scheme
        'deep-sky-blue': '#00BFFF',
        'navy-blue': '#0056B3', 
        'orange-peel': '#FF7F00',
        'emerald-green': '#4CAF50',
        
        // Additional theme colors for consistency
        'sadie': {
          'primary': '#00BFFF',    // Deep Sky Blue
          'secondary': '#0056B3',  // Navy Blue
          'accent-warm': '#FF7F00', // Orange Peel
          'accent-fresh': '#4CAF50', // Emerald Green
          'light': '#F9FAFB',      // Light Gray/Off-White
          'dark': '#111827',       // Dark Gray
          'text-light': '#374151', // Darker Gray for light mode text
          'text-dark': '#D1D5DB',  // Lighter Gray for dark mode text
        }
      },
      fontFamily: {
        'metro': ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
      animation: {
        'metro-hover': 'metro-hover 0.3s ease-in-out',
        'tile-flip': 'tile-flip 0.6s ease-in-out',
      },
      keyframes: {
        'metro-hover': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' }
        },
        'tile-flip': {
          '0%': { transform: 'rotateY(0deg)' },
          '50%': { transform: 'rotateY(90deg)' },
          '100%': { transform: 'rotateY(0deg)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'metro-gradient': 'linear-gradient(135deg, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

export default config