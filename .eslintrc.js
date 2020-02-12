module.exports = {
  env: {
    browser: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',

  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never']
  }
}
