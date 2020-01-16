const router = require("express").Router();
const registerRoutes = require("./register");
// Book routes
router.use("/register", registerRoutes);

module.exports = router;