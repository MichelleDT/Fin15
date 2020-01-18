const router = require("express").Router();
const registerController = require("../../controllers/registerController");

// Matches with "/api/register"
router.route("/")
  .get(registerController.create)

module.exports = router;
