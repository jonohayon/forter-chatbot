const express = require('express')
const { join } = require('path')
const { json } = require('body-parser')
const { createMessage, getNMessages } = require('./messages')
const app = express()

app.use(json())
app.use(express.static(join(__dirname, '../dist')))

app.post('/message', (req, res, next) => {
  if (!req.body.message) return next(new Error('Cannot post a message without a message body'))
  if (!req.body.user) return next(new Error('Cannot post a message without a user'))

  return createMessage(req.body.message, req.body.user)
    .then(len => res.send({ status: 'ok', listLen: len }))
    .catch(next)
})

app.get('/messages', (req, res, next) => {
  return getNMessages(5)
    .then(res.send)
    .catch(next)
})

app.use((err, req, res) => {
  return res.status(err.code || 500).send(err)
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
