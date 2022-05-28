module.exports = {
  content: ['./{pages,components,layouts,plugins}/**/*.{vue,js,ts}', 'app.vue'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'dark',
  },
};
