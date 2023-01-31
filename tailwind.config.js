/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./resources/**/*.blade.php",
      "./resources/**/*.js",
      "./resources/**/*.vue"
  ],
  theme: {
    extend: {
        boxShadow: {
          'card' : '0 2px 10px 0 rgb(94 86 105 / 10%)',
        },
        colors: {
            'primary-background': '#f4f5fa;',
            'primary-color': 'rgba(94,86,105,.87)',
        },
        spacing: {
            '100': '28rem',
        }
    },
  },
  plugins: [],
}
