// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var useragent = require('express-useragent'); 

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
app.use(useragent.express());

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/api/whoami/", function (request, response) {
  var ip= request.ip;
  var lang= request.acceptsLanguages()[0];
  var software= request.useragent.platform + "; " + request.useragent.os;
  var browser= request.useragent.browser;
  response.json({ipaddress: ip, language: lang, browser: browser, software: software});
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
