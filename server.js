// server.js
// where your node app starts

// init project
var express = require('express');
var requestIp = require('request-ip');
var useragent = require('useragent');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  
  res.json({
          ip_address: requestIp.getClientIp(req),
          language: req.headers["accept-language"].split("-")[0].toUpperCase(),
          software: useragent.parse(req.headers['user-agent']).os.family
          });
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
