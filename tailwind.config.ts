import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: '#ec4899',
          violet: '#8b5cf6',
        },
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(circle at top, #f472b6, #8b5cf6)',
      },
    },
  },
  plugins: [],
} satisfies Config