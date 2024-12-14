import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#2A2C39',
          secondary: '#252734'
        },
        text: {
          primary: '#4BFFA5',
          secondary: '#858792'
        },
        foreground: "var(--foreground)",
      },
      boxShadow: {
        xs: '#4BFFA5 0px 1px 3px 0px, #4BFFA5 0px 0px 0px 1px',
        sm: '#4BFFA5 0px 1px 10px'
      }
    },
    screens: {
      xxs: '320px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px'
    }
  },
  plugins: [],
} satisfies Config;
