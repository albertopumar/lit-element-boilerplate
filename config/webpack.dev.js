const webpack = require('webpack');
const merge = require('webpack-merge');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  /**
   * Mode
   */
  mode: 'development',

  /**
   * Devtool
   */
  devtool: 'inline-source-map',

  /**
   * DevServer
   */
  devServer: {
    historyApiFallback: true,
    contentBase: paths.build,
    open: true,
    compress: true,
    hot: true,
    port: 8080,
  },

  plugins: [
    /**
     * HotModuleReplacementPlugin
     */
    new webpack.HotModuleReplacementPlugin(),
  ],
});
