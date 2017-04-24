module.exports = {
  context: __dirname,
  entry: {
    app: "./src/ts/InjectorClient.ts"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".ts", ".js"]
  },
  module: {
    loaders: [
      {
        test: /\.ts?$/,
        exclude: /node_modules/,
        loader: "ts-loader"
      }
    ]
  },
  devServer: {
    contentBase: "./",
    port: 8081,
    hot: true,
    inline: true
  }
};