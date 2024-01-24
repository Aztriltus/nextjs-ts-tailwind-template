import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const tailwindConfig = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-urbanist)', 'Urbanist', ...fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [],
} satisfies Config;

export default tailwindConfig;
