module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-irregular-whitespace": process.env.NODE_ENV === "production" ? "error" : "off",
    // "no-console": "off",
    // "no-debugger": "off",
    // "no-irregular-whitespace": "off",
    'no-mixed-spaces-and-tabs': [0, false],
    'no-tabs': 'on',
    'eol-last': 0,
    'space-before-function-paren': 0
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};
