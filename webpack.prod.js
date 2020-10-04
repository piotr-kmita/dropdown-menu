const path = require('path');

module.exports =  {
  mode: "production",
  entry: path.resolve(__dirname, "./src"),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, "./dist")
  },
}