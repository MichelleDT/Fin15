const express = require("express");
var db = require("./models");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/public"));
}
// Add routes, both API and view
app.use(routes);

// Start the API server & Connect to the SQL DB

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function(err) {
    if (err) console.error('❌ Unable to connect the server: ', err);
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});
