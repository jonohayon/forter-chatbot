const { resolve, join } = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    app: './client/app.jsx'
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }]
  },
  resolve: {
    alias: {
      components: join(__dirname, 'client/components'),
      stores: join(__dirname, 'client/stores')
    }
  }
}
