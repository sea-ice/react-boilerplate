let path = require('path')
let ExtractTextPlugin = require('extract-text-webpack-plugin')
let webpack = require('webpack')
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    'home': path.resolve(__dirname, './pages/Home/index.js')
  },
  output: {
    publicPath: '/',
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },
  devServer: {
    inline: true,
    hot: true,
    port: 8080,
    publicPath: '/',
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]']
      })
    }, {
      test: /\.(jpe?g|png|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }]
    }]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{
      from: './assets',
      to: path.resolve(__dirname, './dist/assets')
    }])
  ]
}
