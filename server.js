const express = require('express')
var mongoose = require('mongoose')
var morgan = require('morgan')
var bodyParser = require('body-parser')
var dotenv = require('dotenv')
mongoose.connect('mongodb://localhost/voting')
dotenv.config({verbose:true})

const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8080, function () {
  console.log(' listening on port 8080...')
})

mongoose.connect(db,function(err){
  if(err){
    console.log(err);
  }
});

mongoose.connection.on('connected',function(){
  console.log('successfully connected  a connection at '+db);
})

mongoose.connection.on('disconnected',function(){
  console.log('successfully disconnected from '+db);
})

mongoose.connection.on('error',function(){
  console.log('An error has occured connecting to '+db);
})