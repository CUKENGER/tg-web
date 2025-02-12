/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          'bg-color': 'var(--bg-color)',
          'secondary': 'var(--secondary-bg)',
          'text': 'var(--text-color)',
          'btn-color': 'var(--button-color)',
          'btn-text': 'var(--button-text-color',
          'link': 'var(--link-color)',
        },
        dark: {
          'bg-color': 'var(--bg-color)',
          'secondary': 'var(--secondary-bg)',
          'text': 'var(--text-color)',
          'btn-color': 'var(--button-color)',
          'btn-text': 'var(--button-text-color',
          'link': 'var(--link-color)',
        },
      },
    },
    plugins: [],
  }
}
