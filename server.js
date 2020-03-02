// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var mongoose = require("mongoose");
var path = require("path");

// Sets up the Express App
// =============================================================
var PORT = process.env.PORT || 3000;
var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("views/"));

//  If deployed, use the deployed database.  Otherwise use the local mongoUser database
var db = process.env.MongoDB_URI || "mongodb://localhost/mongoUser";

//  Connect mongoose to your database
mongoose.connect(db, function(error){
    // Log any error connection with mongoose
    if (error){
        console.log(error);        
    }
    // Or log a success message
    else {
        console.log("Mongoose connection is successful!")
    }
});

// Routes
// =============================================================
require("./routes/api-html.js")(app);
//require("./routes/api-routes.js")(app);


// Starts the server to begin listening
// =============================================================

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
