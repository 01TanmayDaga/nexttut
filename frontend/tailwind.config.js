/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: {

    files: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "rgba(var(--color-primary), <alpha-value>)",
        "primary-light": "rgba(var(--color-primary-light), <alpha-value>)",
        "primary-dark": "rgba(var(--color-primary-dark), <alpha-value>)",

        secondary: "rgba(var(--color-secondary), <alpha-value>)",
        "secondary-light": "rgba(var(--color-secondary-light), <alpha-value>)",
        "secondary-dark": "rgba(var(--color-secondary-dark), <alpha-value>)",

        accent: "rgba(var(--color-accent), <alpha-value>)",
        "accent-light": "rgba(var(--color-accent-light), <alpha-value>)",
        "accent-dark": "rgba(var(--color-accent-dark), <alpha-value>)",

        neutral: "rgba(var(--color-neutral), <alpha-value>)",
        "neutral-light": "rgba(var(--color-neutral-light), <alpha-value>)",
        "neutral-dark": "rgba(var(--color-neutral-dark), <alpha-value>)",
      },
    },
  },
  plugins: [],
};
