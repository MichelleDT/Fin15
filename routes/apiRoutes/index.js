const router = require("express").Router();
const registerRoutes = require("./register");
const loginRoutes = require("./login");

// User routes
router.use("/register", registerRoutes);
router.use("/login", loginRoutes);

module.exports = router;