const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: path.join(__dirname, 'index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: 'build/',
  },
  module: {
    noParse: /node_modules\/bespoke-theme-[\w-]+\/dist/,
    loaders: [
      { test: /\.css$/, loaders: ['style', 'css'], include: path.join(__dirname, 'styles') },
      { test: /\.md$/, loaders: ['html', 'highlight', 'markdown'] },
      { test: /\.html$/, loaders: ['html'] },
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ },
      { test: /\.(png|jpe?g|gif)$/, loaders: ['url?limit=10000'], exclude: /node_modules/ },
      { test: /\.woff(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/font-woff'], exclude: /node_modules/ },
      { test: /\.woff2(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/font-woff2'], exclude: /node_modules/ },
      { test: /\.eot(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/vnd.ms-fontobject'], exclude: /node_modules/ },
      { test: /\.[ot]tf(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=application/octet-stream'], exclude: /node_modules/ },
      { test: /\.svg(?:\?[\d\w-\.=]+)?$/, loaders: ['url?limit=10000&mimetype=img/svg+xml'], exclude: /node_modules/ },
    ],
  },
}
