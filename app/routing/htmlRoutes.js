// DEPENDECIES
// path package

var path = require("path");



// ROUTING

module.exports = function(app) {
  
  app.get("/survey", function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // A default, catch-all route that leads to home.html which displays the home page.
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));;
  });

};
