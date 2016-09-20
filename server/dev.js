const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('../config/webpack/dev')

const HTTP_PORT = process.env.HTTP_SERVE_PORT
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

const compiler = webpack(webpackConfig)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', (req, res) => {
  return res.render('base', {})
})

app.listen(HTTP_PORT, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log(`Listening on port ${HTTP_PORT}`)
})