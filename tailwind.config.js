module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/views/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6C2BD9'
      },
      fontFamily: {
        serif: ['"Roboto"', '"sans-serif"']
      }
    }
  },
  plugins: []
}
