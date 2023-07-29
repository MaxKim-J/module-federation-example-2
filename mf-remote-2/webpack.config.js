const path = require('node:path');
const { ModuleFederationPlugin } = require('webpack').container;

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
    new ModuleFederationPlugin({
      name: 'remote2',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'shared-deps-mf-package': {
          requiredVersion: '>=1.0.10 <1.0.11',
          strictVersion: true,
        },
        'lodash.camelcase': {},
        'date-fns': {},
      },
    }),
  ],
};
