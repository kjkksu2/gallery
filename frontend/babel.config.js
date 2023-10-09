module.exports = {
  env: {
    development: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
      plugins: ["react-refresh/babel"],
    },
    production: {
      presets: [
        "@babel/preset-react",
        ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3, debug: true }],
      ],
    },
  },
};
