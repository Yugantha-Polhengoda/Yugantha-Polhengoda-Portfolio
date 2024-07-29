import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'custom-xs': '8px',
        'custom-sm': '16px',
      },
      colors: {
        customGray: '#4e4e4e',
      },
      boxShadow: {
        'custom-shadow': '0 .3rem .1rem rgba(0, 0, 0, .2)',
      },
      padding: {
        'custom-p': '14px',
      },
      dropShadow: {
        'box-Hover': 'inset 0 -4px 20px rgba(111, 65, 210, .5)',
      },
    },
  },
  plugins: [],
};

export default config;
