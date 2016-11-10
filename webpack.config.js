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

/**
* redux2-demo
**/
module.exports = {
  entry: path.resolve(__dirname, 'redux-demo2/index.js'),
  output: {
    path: path.resolve(__dirname, 'redux-demo2/'),
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
* redux3-demo
**/
module.exports = {
  entry: path.resolve(__dirname, 'redux-demo3/index.js'),
  output: {
    path: path.resolve(__dirname, 'redux-demo3/'),
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
* react-router
**/
module.exports = {
  entry: path.resolve(__dirname, 'react-router/app.js'),
  output: {
    path: path.resolve(__dirname, 'react-router/'),
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