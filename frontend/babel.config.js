module.exports = {
  env: {
    dev: {
      presets: ["@babel/preset-react", "@babel/preset-env"],
    },
    prod: {
      presets: [
        "@babel/preset-react",
        ["@babel/preset-env", { useBuiltIns: "usage", corejs: 3, debug: true }],
      ],
    },
  },
};
