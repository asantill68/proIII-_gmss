//  HTML Routes

module.exports = function(app) {
    //  At the root path, send a homepagesimple hello world mesaage to the browser
    app.get("/", function(req, res) {
        res.send("views/");
    });

    //  Send Profile at the /profile
    // app.get("/profile", function(req, res) {
    //     res.sendFile(path.join(__dirname + "views/profile.html"))
    // });
};



