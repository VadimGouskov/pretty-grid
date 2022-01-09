const path = require('path');

module.exports = {
  entry: './src/pretty-grid.ts',
  devtool: 'inline-source-map',
  mode:"production",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pretty-grid.js',
    library: {
        name: 'prettyGrid',
        type: 'umd',
      },
    globalObject: 'this',
  },
};