var path = require("path");
var webpack = require("webpack");

module.exports = {
   entry: {
      index: [path.normalize(path.join(__dirname, "app/index.ts"))]
   },
   output: {
      path: path.join(__dirname, "app/"),
      publicPath: "/app/",
      filename: "[name].js"
   },
   module: {
      loaders: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "ts-loder"
         },
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: "ts-loader"
         },
         {
            test: /\.scss$/,
            exclude: /node_modules/,
            loaders: ["style", "css", "sass"]
         }
      ]
   },
   resolve: {
      extensions: ['', '.ts', '.tsx', '.js']
   },
   devtool: "eval"
};