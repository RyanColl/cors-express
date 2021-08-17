var express = require('express')
var cors = require('cors')
var app = express()
const PORT = process.env.PORT | 8080
app.use(cors())

app.post('/8080', function (req, res, next) {
  res.json({msg: req.body})
})

app.listen(PORT, function () {
  console.log(`CORS-enabled web server listening on port ${PORT}`)
})