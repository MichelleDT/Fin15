var db = require ("../models");

module.exports = {
  create: function(req, res) {
    db.User.create({
      first_name: req.body.first_name, 
      last_name: req.body.last_name, 
      email: req.body.email, 
      password: eq.body.password
    }).then(function (dbUser){
      res.json(dbUser); 
    });
  }
}

