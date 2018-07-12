const router = require("express").Router();
const signupRoutes = require("./signups");

// singup routes
router.use("/signups", signupRoutes);

module.exports = router;
