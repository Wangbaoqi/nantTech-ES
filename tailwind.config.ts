/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx,md,mdx}',
    './src/components/**/*.{js,jsx,ts,tsx,md,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,jsx,ts,tsx,md,mdx}',
    './theme.config.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        wotfard: ['wotfard', 'Wotfard-fallback'],
        maple: ['MapleMono']
      },
    }
  },
  plugins: []
}