module.exports = {
  env: {
    node: true
  },
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["detect-haiku"],
  rules: {
    "detect-haiku/forbid_haiku": 2
  }
};
