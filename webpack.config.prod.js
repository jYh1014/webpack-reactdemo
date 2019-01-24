var path = require("path")
var webpack = require('webpack');
module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, "/dist"),
    filename:'[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
            limit: 81920
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          name: 'fonts/[name].[hash:8].[ext]',
        },
      },
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          name: 'audio/[name].[hash:8].[ext]',
        },
      },
      // {
      //     test: /\.less$/,
      //     use: ['style-loader','css-loader','less-loader']
      // },
      // {
      //   test: /\.less$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: ['css-loader', 'less-loader']
      //   })
      // }
    ]
  },
  // devServer: {
  //   contentBase: './',//本地服务器所加载的页面所在的目录
  //   // publicPath: "/assets/",
  //   port: 9001,
  //   // hot: true,
  //   host: '0.0.0.0'
  // },
}