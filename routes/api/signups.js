const router = require("express").Router();
const signupController = require("../../controllers/signupController.js");

// Matches with "/api/signups"
router.route("/")
  .post(signupController.create);

// // Matches with "/api/signups/:id"
// router
//   .route("/:id")
//   .get(signupController.findById)
//   .put(signupController.update)
//   .delete(signupController.remove);


router.route("/login")
  .get(signupController.findOne);




module.exports = router;
