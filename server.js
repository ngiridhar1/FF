
// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Set up Express app
var app = express();
var PORT = process.env.PORT || 3000;

// Set up Express to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(__dirname + '/app/public'));

// Import routes.
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
// start listen
app.listen(PORT, function() {
	console.log("App listening on PORT " + PORT);
});
