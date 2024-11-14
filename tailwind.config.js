import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      accentColor: (theme) => theme("colors"),
      auto: 'auto',
      colors: {
        "transparent": 'transparent',
        "black" : "colors.black",
        "background" : "#000000",
        "sky-100": "#ebf8ff",
        "sky-500": "#4299e1",
        "sky-600": "#3182ce",
        "current-900": "currentColor",
        "gray-300": "#e2e8f0",
        "gray-900": "#1a202c",
        "white-900": "#f7fafc",
      },
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: ["light","dark"],
  }
}
