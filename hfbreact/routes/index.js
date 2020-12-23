const path = require("path");
const router = require("express").Router();
const installRoutes = require("./install/install.js");
const userRoutes = require("./user/user.js");


// API Routes
router.use(installRoutes);
router.use(userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
