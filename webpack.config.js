var path = require("path")
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var manifest = require('./vendor/vendor.manifest.json')
var bundleConfig = require("./bundle-config.json")
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: {
    app:'./index.js',
    utils: ['Utils']
  },
  output: {
    path: path.join(__dirname, "/dist/"),
    filename: '[name].bundle.js'
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
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/public/'),//本地服务器所加载的页面所在的目录（本地目录）
    // publicPath: '/abc/',若加上此配置，浏览器访问的时候需要在url后面加上/abc/
    port: 9008,
    hot: true,
    host: 'localhost',
    inline: true
  },
  resolve: {
    extensions: [".js",'.jsx'],
    alias: {
        '@': path.resolve(__dirname,'.', 'src'),
        'Utils': path.resolve(__dirname, '.', 'src/utils')
    }
},
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./vendor/vendor.manifest.json')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'public/index.html', //html模板路径
      vendorJsName: bundleConfig.vendor.js,
      hash: false
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './vendor'),
        to: 'vendor',
        ignore: ['.*']
      }
    ]),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['utils'],
      filename: '[name].min.js',
      minChunks: Infinity
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
}