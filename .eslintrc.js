module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: 'airbnb-base',
  rules: {
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
