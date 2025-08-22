/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,md,mdx,js,ts,tsx,vue}'],
  theme: {
    extend: {
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        sm: 'var(--elev-1)',
        md: 'var(--elev-2)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
