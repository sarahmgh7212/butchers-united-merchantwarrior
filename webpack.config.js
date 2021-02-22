/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const nodeExternals = require('webpack-node-externals');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const slsw = require('serverless-webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  entry: slsw.lib.entries,

  optimization: {
    minimize: false,
  },
  target: 'node',
  stats: 'errors-only',
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      src: path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: { enabled: true, files: './src/**/*.{ts,tsx,js,jsx}' },
    }),
    new WebpackBar(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './prisma/schema.prisma' },
        { from: './firebase_sa_credentials.json' },
      ],
    }),
  ],
  output: {
    libraryTarget: 'commonjs',
    filename: '[name].js',
    path: path.join(__dirname, '.webpack'),
  },
};
