const { resolve, join } = require("path")
module.exports = {
  plugins: [
    require("postcss-import")({
      root: __dirname,
      path: [
        resolve(__dirname, "src/postcss/"),
        resolve(__dirname, "src/postcss/views/"),
        resolve(__dirname, "src/postcss/vars/"),
      ],
    }),
    require("postcss-fontpath")(),
    require("postcss-nested")({ root: __dirname }),
    require("postcss-custom-properties")(),
    require("postcss-color-function")(),
    require("autoprefixer")({
      browsers: ["last 2 versions", "Safari 8", "ie > 9"],
    }),
  ],
}
