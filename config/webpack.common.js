const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = require('./paths');

module.exports = {
  /**
   * Entry
   */
  entry: [`${paths.src}/index.js`],

  /**
   * Output
   */
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/'
  },

  /**
   * Plugins
   */
  plugins: [
    /**
     * CleanWebpackPlugin
     */
    new CleanWebpackPlugin(),

    /**
     * CopyWebpackPlugin
     */

    // TODO: only if polyfill is needed
    new CopyWebpackPlugin([
      {
        context: 'node_modules/@webcomponents/webcomponentsjs',
        from: '**/*.js',
        to: 'webcomponents'
      }
    ]),

    /**
     * HtmlWebpackPlugin
     */
    new HtmlWebpackPlugin({
      title: 'Webpack Boilerplate',
      template: `${paths.src}/index.html`,
      filename: 'index.html'
    })
  ],
  module: {
    rules: [
      /**
       * Styles
       */
      {
        test: /\.(css)$/,
        exclude: [paths.app, paths.components],
        use: [
          'style-loader',
          { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } }
        ]
      },
      {
        test: /\.css|\.s(c|a)ss$/,
        include: [paths.app, paths.components],
        use: [
          {
            loader: 'lit-scss-loader',
            options: {
              minify: false
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },

      /**
       * Images
       */
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          context: 'src'
        }
      },

      /**
       * Fonts
       */
      {
        test: /\.(woff(2)?|eot|ttf|otf|)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '[path][name].[ext]',
          context: 'src'
        }
      }
    ]
  }
};
