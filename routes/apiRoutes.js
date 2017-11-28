// load data & link to data sources...

var surveyData = require("../data/surveyData");

// Routing...
module.exports = function(app){
	// API GET request
	// when user visits link, display JSON of all possible friends
	app.get("/api/friends", function(req, res){
		res.json(surveyData);
	});

	// API POST request
	// when a user submits their user info (JSON object) we need to post that to the server...
	app.post("/api/friends", function(req, res){
		surveyData.push(req.body);
		res.json(true);
	});
};