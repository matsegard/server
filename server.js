const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   res.sendFile("/Users/erikmatsegard/Desktop/server" + '/index.html')
})

app.post('/quotes', (req, res) => {
   console.log(req.body)
   res.send(req.body)
})

MongoClient.connect('mongodb-connection-string', (err, client) => {
  console.log('hej')
})

app.listen(port, () => {
  console.log('listening on: ' + port)
})