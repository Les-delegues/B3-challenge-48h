module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:prettier/recommended',
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'max-len': 'off',
    'vue/max-attributes-per-line': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
