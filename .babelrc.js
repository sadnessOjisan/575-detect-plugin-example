module.exports = {
  presets: [
    "@babel/react",
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        },
        modules: false
      }
    ],
    "@babel/typescript"
  ],
  plugins: ["detect-haiku"]
};
