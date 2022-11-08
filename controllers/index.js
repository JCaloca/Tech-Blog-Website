// Server connection through expressjs
const router = require("express").Router();

// Routes folders
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");

// Defining the paths for the specific pages
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);

module.exports = router;
