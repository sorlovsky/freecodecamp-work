var express = require('express')
var app = express()
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router()
var http = require('http');
const url = require('url');

app.set('view engine', 'pug')

const https = require('https');

var json = https.get('https://api.iextrading.com/1.0/tops?symbols=AAPL', (res) => {
  res.on('data', (d) => {
    process.stdout.write(d);
    console.log(d);
  });

}).on('error', (e) => {
  console.error(e);
});

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!', data: json.length});
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log(url.parse(json));
});