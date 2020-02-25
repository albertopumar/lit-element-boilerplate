const path = require('path');

module.exports = {
  src: path.resolve(__dirname, '../src'),
  app: path.resolve(__dirname, '../src/app'),
  components: path.resolve(__dirname, '../src/components'),
  build: path.resolve(__dirname, '../dist'),
  static: path.resolve(__dirname, '../public')
};
