const express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')

dotenv.config({verbose:true})

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log(' listening on port 8080...')
})
