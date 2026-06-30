module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: '#0a0e27',
        surface: 'rgba(255,255,255,0.04)',
        accent: '#3B82F6',
        accent2: '#06B6D4',
        muted: '#94A8BF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
