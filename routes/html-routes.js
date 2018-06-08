var path = require("path");

module.exports = function(app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.
  
    // index route loads index.html
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    });

  
    app.get("/dinner", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/index_restaurant.html"));
    });

    app.get("/dates", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/summary.html"));
    });
  
  };



  
