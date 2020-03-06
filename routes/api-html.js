//  HTML Routes
var path = require("path");

module.exports = function(app) {

    //  Send Profile at the /profile
    app.get("/CreateProfile", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/createProfile.html"))
    });
    //  Send Profile at the /profile
    app.get("/Quest1", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/quest1.html"))
    });
    //  Send Profile at the /profile
    app.get("/Quest2", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/quest2.html"))
    });
    //  Send Profile at the /profile
    app.get("/FAQ", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/faq.html"))
    });
    //  Send Profile at the /profile
    app.get("/*", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/index.html"))
    });
};



