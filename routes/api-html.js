//  HTML Routes
var path = require("path");

module.exports = function(app) {
    //  At the root path, send a homepagesimple hello world mesaage to the browser
    // app.get("/profile", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../views/profile.html");
    // });

    //  Send Profile at the /profile
    app.get("/profile", function(req, res) {
        res.sendFile(path.join(__dirname + "/views/profile.html"))
    });
};



