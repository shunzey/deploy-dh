const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    'main': ['./src/index.js']
  },
  output: {
    path: `${__dirname}/dist`
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    open: true,
    openPage: 'index.html',
    port: 8000
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
      }
    ]
  }
}
