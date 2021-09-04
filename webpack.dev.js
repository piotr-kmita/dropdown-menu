const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",

  devServer: {
    hot: true,
    bonjour: true,
  },

  entry: path.resolve(__dirname, './src'),
  output: {
    filename: 'main.bundle.js',
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
        test: /\.(scss|css)$/,
        use: [
         'style-loader',
         {
          loader: 'css-loader',
          options: {         
            url: false,
          }
        },
         'postcss-loader',
         'sass-loader',
        ]
      },
      { 
        test: /\.(?:ico|svg|gif|png|jpg|jpeg)$/i, 
        type: 'asset/resource' 
      },
    ],
  },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src') + '/template.html',
        filename: 'index.html',
        inject: true
      }) 
    ]
}