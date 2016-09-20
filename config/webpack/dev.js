const webpack = require('webpack')
const config = require('./base')

config.devtool = 'eval'
config.output.publicPath = '/static/'

config.plugins.push(new webpack.optimize.OccurenceOrderPlugin()) // consistent build hashes
config.plugins.push(new webpack.HotModuleReplacementPlugin())
config.plugins.push(new webpack.NoErrorsPlugin()) // handles errors more cleanly

// recieve server notifications
for (const key in config.entry) {
  config.entry[key].push('webpack-hot-middleware/client')
}

module.exports = config
