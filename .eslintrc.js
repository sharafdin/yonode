module.exports = {
    extends: [
      "some-other-config-you-use",
      "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier
    ],
    plugins: [
      "prettier" // Adds the plugin that integrates Prettier with ESLint
    ],
    rules: {
      "prettier/prettier": "error", // Indicates any deviations from Prettier formatting as ESLint errors
      // You can override/add specific rules settings here
    }
  };
  