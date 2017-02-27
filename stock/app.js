var express = require('express')
var app = express()
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var router = express.Router()
var http = require('http');
app.set('view engine', 'pug')

function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

app.get('/', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!', data: stockData[0]});
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});