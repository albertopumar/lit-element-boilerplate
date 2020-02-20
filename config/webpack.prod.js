const merge = require('webpack-merge');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const paths = require('./paths');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  /**
   * Mode
   */
  mode: 'production',

  /**
   * Devtool
   */
  devtool: false,

  /**
   * Output
   */
  output: {
    path: paths.build,
    publicPath: '/',
    filename: '[name].[contenthash].bundle.js',
  },

  /**
   * Optimization
   */
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

    runtimeChunk: 'single',
  },

  /**
   * Performance
   */
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
});
