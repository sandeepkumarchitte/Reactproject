const path = require('path')
const webpack = require('webpack')

const ROOT = path.resolve(__dirname, '../../')

module.exports = {
  entry: {
    main: [
      path.resolve(ROOT, 'src/index.jsx'),
    ],
  },
  output: {
    path: path.resolve(ROOT, 'dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    root: [
      path.resolve(ROOT, 'src')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.resolve(ROOT, 'src/')],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loaders: [
          'style',
          'css?modules&importLoaders=2&localIdentName=[local]-[hash:base64:5]',
        ]
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: /node_modules/
      },
      {
        test: /\.(woff2?|ttf|eot|png|ico)$/,
        loader: 'url?limit=10000',
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`})
  ]
}
