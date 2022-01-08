const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.ts',
    plugins: [
        new HtmlWebpackPlugin({
          template: 'index.html'
        }),
    ],
    module: {
        rules: [
          {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
      // TODO: add images, fonts, data loaders https://webpack.js.org/guides/asset-management/#loading-images
};