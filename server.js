// Dependencies
// npm packages we're using for server functionality
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express config
// setting up the basic properties for our express server

// create an express server
var app = express();

// set port to 8080 OR w/e port Heroku defines...
var PORT = process.env.PORT || 8080;

// set up the express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

// listener / start server...
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});


