const path = require('node:path');
const { ModuleFederationPlugin } = require('webpack').container;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'swc-loader',
        exclude: /node_modules/,
        options: {
          jsc: {
            transform: {
              react: {
                runtime: 'automatic',
              },
            },
            target: 'es2017',
            parser: {
              syntax: 'typescript',
              jsx: true,
            },
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      hash: false,
    }),
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        remote1: 'remote1@http://localhost:3001/remoteEntry.js',
        remote2: 'remote2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
        },
        'shared-deps-mf-package': {},
      },
    }),
  ],
};
