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
          presets: [
            ['@babel/preset-env', {
              targets: { browsers: ['last 3 chrome versions'] },
              useBuiltIns: 'usage'
            }],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-transform-runtime']
        }
      }
    }]
  },
  resolve: {
    alias: {
      components: join(__dirname, 'client/components'),
      containers: join(__dirname, 'client/containers'),
      reducers: join(__dirname, 'client/reducers'),
      actions: join(__dirname, 'client/actions')
    }
  }
}
