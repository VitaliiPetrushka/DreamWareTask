var path = require("path");

module.exports = {
   entry: path.join(__dirname, "app/index.ts"),
   output: {
      path: path.join(__dirname, "app/"),
      publicPath: "/app/",
      filename: "bundle.js"
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
   devtool: "eval"
};