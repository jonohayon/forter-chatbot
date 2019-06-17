const express = require('express')
const { join } = require('path')
const { json } = require('body-parser')
const app = express()

app.use(json())
app.use(express.static(join(__dirname, '../dist')))

const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Listening on port ${port}`))
