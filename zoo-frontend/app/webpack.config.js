module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      { enforce: "pre", test: /\.tsx?$/, loader: "tslint-loader", options: {} },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  },
};