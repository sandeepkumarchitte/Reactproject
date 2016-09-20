const path = require('path')
const express = require('express')

const HTTP_PORT = process.env.HTTP_SERVE_PORT
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, './views'))

app.use('/static', express.static('../dist'))

app.get('/ping', (req, res) => {
  console.log('/ping', 'healthcheck')
  return res.json({ status: 'UP' })
})

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
