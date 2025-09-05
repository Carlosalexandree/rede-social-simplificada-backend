module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "airbnb/hooks", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/extensions": 0,
    camelcase: 0,
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
};
