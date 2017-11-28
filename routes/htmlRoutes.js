// dependencies
var path = require("path");

// routing...
module.exports = function(app) {
	// HTML GET requests handle when users visit a page
	app.get("/survey", function(req, res){
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	})

	// if no matching route is found, default to home
	app.get("/", function(req, res){
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
};