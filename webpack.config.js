var path = require('path');

/**
* news-demo
**/
module.exports = {
  entry: path.resolve(__dirname, 'news-demo/app.js'),
  output: {
    path: path.resolve(__dirname, 'news-demo/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },
    ]
  }
};

/**
* redux-demo
**/
module.exports = {
  entry: path.resolve(__dirname, 'redux-demo/index.js'),
  output: {
    path: path.resolve(__dirname, 'redux-demo/'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015','react']
      }
    },
    ]
  }
};