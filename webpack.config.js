const TerserPlugin = require("terser-webpack-plugin");
const{ join } = require("path");

const baseConfig = {
  devtool: "source-map",
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.js$/,
        include: join(__dirname, "src"),
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "eslint-loader",
            options: {
              emitWarning: true,
              failOnWarning: false
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 5,
          output: {
            ascii_only: true
          }
        }
      })
    ]
  },
  externals: {
    lodash: {
      commonjs2: "lodash",
      commonjs: "lodash",
      root: "_"
    },
    moment: "moment",
    numeral: "numeral"
  },
  output: {
    library: "form-formatters"
  }
};

const umdBuild = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: join(__dirname, "dist/umd"),
    libraryTarget: "umd"
  }
};

const cjsBuild = {
  ...baseConfig,
  output: {
    ...baseConfig.output,
    path: join(__dirname, "dist/cjs"),
    libraryTarget: "commonjs2"
  }
};

module.exports = [umdBuild, cjsBuild];
