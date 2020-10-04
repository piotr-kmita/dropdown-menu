const path = require('path');

module.exports =  {
  mode: "production",
  entry: path.resolve(__dirname, "./src"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
            }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
         'css-loader',
         'postcss-loader',
        ]
      },
    ],
  }
}