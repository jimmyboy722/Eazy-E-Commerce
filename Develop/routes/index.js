// IMPORTING THE ROUTER CLASS AND THE ROUTE MODULES
const router = require("express").Router();
const apiRoutes = require("./api/index");

// MOUNTING THE ROUTES
router.use("/api", apiRoutes);

// EXPORTING THE ROUTER
module.exports = router;
