module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "google",
    "airbnb",
  ],
  rules: {
    quotes: ["error", "double"],
  },
  parserOptions: {
    "sourceType": "module",
    "ecmaVersion": 13,
  },
};
