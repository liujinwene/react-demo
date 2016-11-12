var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

/**
* redux-demo2
**/
module.exports = {
  entry: path.resolve(__dirname, 'redux-demo2/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'redux-demo2/deploy'),
    filename: 'bundle.js'
  },

  devtool: 'eval-source-map',

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
        loader: 'style!css?modules'
      }
    ]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."),
    new HtmlWebpackPlugin({
      template: __dirname + '/redux-demo2/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
};
