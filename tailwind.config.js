/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5651E5',
        secondary: '#709DFF',
        dark: {
          'main-bg': 'rgb(3 7 18)', // bg-gray-950
          'secondary-bg': 'rgb(17 24 39)', // bg-gray-900
          'tertiary-bg': 'rgb(55 65 81)', // bg-gray-700
          'main-font': 'rgb(248 250 252)', // text-slate-50
          'secondary-font': 'rgb(209 213 219)', // text-slate-300
          'tertiary-font': 'rgb(148 163 184)', // text-slate-400
          'shadow': 'rgb(55 65 81)' // shadow-gray-700
        },
        light: {
          'main-bg': 'rgb(248 250 252)', // bg-slate-50
          'secondary-bg': 'rgb(241 245 249)', // bg-slate-100
          'tertiary-bg': 'rgb(226 232 240)', // bg-slate-200
          'main-font': '#1F2937',
          'secondary-font': 'rgb(55 65 81)', // text-gray-700
          'tertiary-font': 'rgb(75 85 99)', // text-gray-600
          'shadow': 'rgb(156 163 175)' // shadow-gray-400
        }
      }
    },
  },
  plugins: [],
}