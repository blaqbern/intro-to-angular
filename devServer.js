const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');
const WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  // contentBase: path.join(__dirname, 'public'),
  noInfo: true,
  hot: true,
  stats: {
    colors: true,
  },
}).listen(8080, 'localhost', function() {
  console.log('Webpack dev server listening on port 8080');
});
