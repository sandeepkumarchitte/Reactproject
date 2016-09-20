const webpack = require('webpack')
const config = require('./base')
const path = require('path')
const AssetsPlugin = require('assets-webpack-plugin')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')

config.devtool = 'source-map'
config.output.filename = '[name].[chunkhash].js'
config.output.chunkFilename = '[name].[chunkhash].js'

config.plugins.push(new webpack.optimize.DedupePlugin())
config.plugins.push(new webpack.optimize.OccurenceOrderPlugin()) // consistent build hashes
config.plugins.push(new webpack.optimize.UglifyJsPlugin({
  compress: {
    'warnings': false // display warnings when dropping unreachable code or unused declarations etc.
  }
}))

config.plugins.push(new ChunkManifestPlugin({
  filename: 'webpack-chunk-manifest.json',
  manifestVariable: 'webpackChunkManifest',
}))

config.plugins.push(new AssetsPlugin({
  filename: 'webpack-assets.json',
  fullPath: true,
  path: path.resolve('dist'),
  update: false,
}))

module.exports = config
