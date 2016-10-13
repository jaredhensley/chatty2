var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var port = 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

var messages = [];

app.get('/', function(req, res, next) {
  res.send(JSON.stringify(messages));
});

app.post('/', function(req, res, next) {

  var message = {
    message: req.body.message,
    date: new Date()
  }
  messages.push(message);
  res.send(JSON.stringify(messages));
});

app.listen(port, function() {
  console.log('listening on port', port);
});
