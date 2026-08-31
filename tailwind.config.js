/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[ "./*.html", "./src/**/*.{html,js}",
    "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        // Gera a classe 'font-display'
        display: ['"Bebas Neue"', 'sans-serif'],
        // Substitui/Reforça a classe 'font-sans'
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Tons de preto / zinco escuro
        dark: {
          DEFAULT: '#09090b', // Fundo principal
          surface: '#18181b', // Elevações e cards
          border: '#27272a',  // Bordas e linhas separadoras
          muted: '#3f3f46',   // Elementos secundários
        },
        // Ouro
        gold: {
          light: '#e6ca65',
          DEFAULT: '#D4AF37', // Cor de destaque
          dark: '#a18220',
        },
        // Verde para suporte
        support: {
          light: '#4ade80', // Alertas leves / badges
          DEFAULT: '#16a34a', // Status principal / botões de sucesso
          dark: '#15803d',  // Hover de botões
        },
      },
    },
  },
  plugins: [],
}