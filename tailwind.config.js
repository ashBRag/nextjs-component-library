/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        major: ["var(--font-major)", "monospace"],
      },
    },
  },
  plugins: [],
};
