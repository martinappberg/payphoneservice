var express = require("express");
var bodyParser = require("body-parser");
var app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
var routes = require("./routes/routes.js")(app);

//firebase
var firebase = require("firebase");
  var config = {
    apiKey: "AIzaSyBp5xOVikCrlQBK0pxfU43Me2qy4zkMQh4",
    authDomain: "payphone-f4a67.firebaseapp.com",
    databaseURL: "https://payphone-f4a67.firebaseio.com",
    storageBucket: "payphone-f4a67.appspot.com",
    messagingSenderId: "202102323605"
  };
  firebase.initializeApp(config);
 
var server = app.listen(3000, function () {
    console.log("Listening on port %s...", server.address().port);
});