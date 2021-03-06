var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

/**
 * biz-demo
 **/
module.exports = {
  entry: path.resolve(__dirname, 'biz-demo/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'biz-demo/deploy'),
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

  devServer: {
    contentBase: './biz-demo', //本地服务器加载目录
    colors: true, //终端输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.css$/,
      loader: 'style!css?modules'
    }]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."),
    new HtmlWebpackPlugin({
      template: __dirname + '/biz-demo/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
};