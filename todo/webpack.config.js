const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/client/app/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'src/client/public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
  resolve: { extensions: ['.js', '.jsx'] },
};
