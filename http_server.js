// Importing http module.
var http = require("http");

// Express for serving files
var express = require("express");
var app = express();

// Prompt for easy user input
var prompt = require("prompt");

// Listening on 8080
var port = 0;

// Prompting for local path
var localDir = '';

prompt.start();
prompt.get(["directory", "port"], function(err, result) {
	if (err) {
		console.log("Something went wrong: %s", err);
		return 1;
	} else {
		// Setting local directory and port number
		localDir = result.directory.trim();
		port = parseInt(result.port);

		// Setting static directory
		app.use(express.static(localDir));

		// Listening on 8080, callback upon success
		app.listen(port, function() {
			console.log("Connected on port %s.", result.port);
		});
	}
});






