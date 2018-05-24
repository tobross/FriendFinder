

var path = require("path");
var bodyParser = require("body-parser");
var friendsData = require("../data/friends.js");
module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    console.log(friendsData);
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: 1000
    };

    var userData = req.body;
    var userScores = userData.scores;

    var totalDifference = 0;

    //loop through all the friends in the database.
    for (var i = 0; i < friendsData.length; i++) {

      console.log(friendsData[i].name);
      totalDifference = 0;

      //loop through all the scores for each friend
      for (var j = 0; j < friendsData[i].scores[j]; j++) {

        //calculate the difference between the scores to find the smallest integer.
        totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friendsData[i].scores[j]));

        if (totalDifference <= bestMatch.friendDifference) {

          // Reset the bestMatch to be the new friend.
          bestMatch.name = friendsData[i].name;
          bestMatch.photo = friendsData[i].photo;
          bestMatch.friendDifference = totalDifference;
        }
      }
    }

    
    friendsData.push(userData);
    res.json(userData);
    // res.json(bestMatch);

  });

};