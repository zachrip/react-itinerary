const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    simple: './docs/simple.tsx',
    advanced: './docs/advanced.tsx',
  },
  devServer: {
    contentBase: path.resolve('./docs'),
  },
  output: {
    publicPath: '/dist/',
    path: path.resolve('./docs/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          configFileName: './docs/tsconfig.json'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => module.context && module.context.indexOf('node_modules') !== -1
    }),
  ],
};