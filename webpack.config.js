const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'index.js'),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/',
  },
  module: {
    noParse: /node_modules\/bespoke-theme-[\w-]+\/dist/,
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'styles') },
      { test: /\.md$/, loaders: ['html', 'highlight', 'markdown'] },
      { test: /\.html$/, loaders: ['html'] },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.(png|jpg|woff2?|[ot]tf|eot|svg)$/, loaders: ['file'] }
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
