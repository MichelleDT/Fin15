var db = require ("../models");

module.exports = {
  find: function(req, res) {
    db.User.findOne({
          where: {
            email: req.body.email
          }
      }).then(function (dbUser){
      //console.log("DB RESULT", dbUser.password);
      //console.log("REQUEST", req.body.password);
      res.json(dbUser); 
    });
  }
}

