import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        shaking: 'shaking 0.7s ease-in-out infinite',
      },
      keyframes: {
        shaking: {
          '0%': { transform: 'translateX(0)' },
          '5%': { transform: 'translateY(-0.5rem)' },
          '15%': { transform: 'translateY(-0.5rem) rotate(5deg)' },
          '25%': { transform: 'translateY(-0.5rem) rotate(-5deg)' },
          '35%': { transform: 'translateY(-0.5rem) rotate(5deg)' },
          '45%': { transform: 'translateY(-0.5rem) rotate(-5deg)' },
          '50%': { transform: 'translateY(0) rotate(0)' },
          '100%': { transform: 'translateY(0) rotate(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
