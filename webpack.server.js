const path = require('path');
const nodeExternals = require('webpack-node-externals');

// 服务器端的webpack.
module.exports = {
  target: 'node',
  mode: 'development',
  entry: './server/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-react',
            ['@babel/preset-env']
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['isomorphic-style-loader', {
          loader: 'css-loader',
          // 开启css module的支持.
          options: {
            modules: true
          }
        }]
      }
    ]
  }
};