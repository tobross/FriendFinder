
var path = require("path");
var friendsData = require("../data/friends.js");
module.exports = function(app) {

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.use("/api/friends", function(req,res) {
    res.json(friendsData);
  })

  app.use("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
	
}