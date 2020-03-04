//  HTML Routes
var path = require("path");

module.exports = function(app) {
    //  At the root path, send a homepagesimple hello world mesaage to the browser
    // app.get("/profile", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../views/profile.html");
    // });

    //  Send Profile at the /profile
    app.get("/CreateProfile", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/createProfile.html"))
    });
    //  Send Profile at the /profile
    app.get("/Questionaire1", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/questionaire1.html"))
    });
    //  Send Profile at the /profile
    app.get("/Questionaire2", function(req, res) {
        res.sendFile(path.join(__dirname + "/../views/questionaire2.html"))
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



