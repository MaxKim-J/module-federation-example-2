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
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './App': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
        },
        'shared-deps-mf-package': {
          singleton: true, // 먼저 로드된 공유 의존성 모듈의 버전이
          requiredVersion: '>=1.0.10 <1.0.11', // 이 semver 버전 범위 안에 들어오지 않으면
          // strictVersion: true, // 런타임에서 에러를 낸다.
        },
        'lodash.camelcase': {},
        'date-fns': {},
      },
    }),
  ],
};
