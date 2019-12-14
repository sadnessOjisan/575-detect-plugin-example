module.exports = {
  env: {
    node: true
  },
  rules: {
    main: 2
  },
  parserOptions: {
    ecmaVersion: 2015,
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  }
};
