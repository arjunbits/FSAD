module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'only-warn',
  ],
  rules: {
    'react/react-in-jsx-scope': ['off'],
    'react/jsx-filename-extension': ['off'],
    'react/no-unescaped-entities': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'react/destructuring-assignment': ['off'],
    'react/prop-types': ['off'],
    'react/no-array-index-key': ['off'],
    'no-console': ['off'],
    'linebreak-style': ['off'],
    'no-param-reassign': ['off'],
    'no-restricted-syntax': ['off'],
    'jsx-a11y/anchor-is-valid': ['off'],
    'no-underscore-dangle': ['off'],
    'import/prefer-default-export': ['off'],
    'jsx-a11y/click-events-have-key-events': ['off'],
    'jsx-a11y/interactive-supports-focus': ['off'],
  },
};
