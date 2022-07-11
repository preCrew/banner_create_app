module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
  },
  rules: { 'react/jsx-filename-extension': [0] },
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'airbnb-typescript',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};