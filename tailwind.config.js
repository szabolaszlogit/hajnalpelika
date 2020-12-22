module.exports = {
  purge: [],
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  theme: {
    fontFamily: {
     'sans': ['ui-sans-serif', 'system-ui'],
     'serif': ['ui-serif', 'Georgia'],
     'mono': ['ui-monospace', 'SFMono-Regular'],
     'display': ['Oswald'],
     'body': ['Open Sans'],
    }
  }
}
