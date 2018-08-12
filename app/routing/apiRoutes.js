// LOAD DATA
// Linking routes to data

var friendsData = require("../data/friends");

// ROUTING

module.exports = function(app) {
    
  // API GET Request
  //displays JSON of friends list
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  //API POST Request
  //posts to the JSON friends list
  app.post("/api/friends", function(req, res) {
    
    //user input object
    var input = req.body;

    var userScores = input.scores;

    //variabls of the user's match
    var bfName = '';
    var bfImg = '';
    var lowestDiff = 1000;

    //for loop to compare against every possible friend in the array
    for(var i = 0; i < friendsData.length; i++) {

      //compare differences for each question [j] of each friend [i]
      var diff = 0;
      for(var j = 0; j < userScores.length; j++) {
        diff += Math.abs(friendsData[i].scores[j] - userScores[j]);
      }

      //keep comparing differences to find the lowest difference. Lowest Difference = Best Friend
      if (diff < lowestDiff) {
        lowestDiff = diff;
        bfName = friendsData[i].name;
        bfImg = friendsData[i].photo;
      }

      console.log(bfName);
      console.log(bfImg);
      console.log(diff);
      console.log(input.name);

    }

    //push the results to the freinds data array object
    friendsData.push(input);

  });


};