var mysql = require("mysql");
//const Sequelize = require('sequelize')

// Set up our connection information
var connection = mysql.createConnection({
  port: 3000,
  host: "localhost",
  user: "root",
  password: "",
  database: "fin15"
});

// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
