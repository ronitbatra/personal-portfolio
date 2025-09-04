import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.mdx'
  ],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: { accent: { DEFAULT: 'hsl(var(--accent))' } },
      borderRadius: { xl: '1rem', '2xl': '1.5rem' }
    }
  },
  plugins: [typography]
};
export default config;
