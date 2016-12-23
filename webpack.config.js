var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/**
 * react-weui-demo
 **/
module.exports = {
  entry: path.resolve(__dirname, 'react-weui-demo/src/js/index.js'),

  output: {
    path: path.resolve(__dirname, 'react-weui-demo/deploy'),
    filename: 'bundle.js' //js文件名加hash
  },

  devtool: 'eval-source-map', //方便调试,js代码，加eval源码

  devServer: {
    contentBase: './react-weui-demo', //本地服务器加载目录
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
      loader: 'style!css?modules' //拆分css文件
    }]
  },

  plugins: [
    new webpack.BannerPlugin("Copyright abc inc."), //文件顶部加注释
    new HtmlWebpackPlugin({
      template: __dirname + '/react-weui-demo/src/html/index.tmpl.html'
    }),
    new webpack.HotModuleReplacementPlugin() //热加载插件
  ]
};