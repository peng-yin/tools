module.exports = {
  env: {
    browser: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true
    }
  },
  extends: "eslint-config-alloy/typescript",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"]
};
