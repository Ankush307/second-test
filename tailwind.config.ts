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
        "custom-black": "#010101",
        "custom-white": "#FAFAFA",
        "light-pink": "#DF2BFF",
        "light-blue": "#00B7FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
