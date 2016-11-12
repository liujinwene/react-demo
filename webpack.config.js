var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
* redux-demo2
**/
module.exports = {
  entry: path.resolve(__dirname, 'redux-demo2/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'redux-demo2/deploy'),
    filename: 'bundle-[hash].js'//js文件名加hash
  },

  devtool: 'eval-source-map',//方便调试,js代码，加eval源码

  devServer: {
    contentBase: './redux-demo2',//本地服务器加载目录
    colors: true,//终端输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules')//拆分css文件
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."),//文件顶部加注释
    new HtmlWebpackPlugin({
      template: __dirname + '/redux-demo2/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin(),//热加载插件
    new webpack.optimize.OccurenceOrderPlugin(),//为主键分配id,常用的,id小
    new webpack.optimize.UglifyJsPlugin(),//压缩js
    new ExtractTextPlugin("[name]-[hash].css")//css文件名加hash
  ]
};

/**
* react-router
**/
module.exports = {
  entry: path.resolve(__dirname, 'react-router/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'react-router/deploy'),
    filename: 'bundle.js'//js文件名加hash
  },

  devtool: 'eval-source-map',//方便调试,js代码，加eval源码

  devServer: {
    contentBase: './react-router',//本地服务器加载目录
    colors: true,//终端输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//拆分css文件
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."),//文件顶部加注释
    new HtmlWebpackPlugin({
      template: __dirname + '/react-router/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};

/**
* react-router2
**/
module.exports = {
  entry: path.resolve(__dirname, 'react-router2/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'react-router2/deploy'),
    filename: 'bundle.js'//js文件名加hash
  },

  devtool: 'eval-source-map',//方便调试,js代码，加eval源码

  devServer: {
    contentBase: './react-router2',//本地服务器加载目录
    colors: true,//终端输出结果为彩色
    historyApiFallback: true,//不跳转
    inline: true,//实时刷新
    hot: true
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015','react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css?modules'//拆分css文件
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."),//文件顶部加注释
    new HtmlWebpackPlugin({
      template: __dirname + '/react-router2/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};
