const express = require("express");
const controller = require("../controllers/user.js");
const router = express.Router();

router.get("/all", controller.getAllUsers);

router.post("/new", controller.register);

router.get("/userid/special", controller.specialFunc);

// router.get("/userid/:id", controller.getUserDetails);

// router.put("/userid/:id", controller.updateUser);

// router.delete("/userid/:id", controller.deleteUser);

//we can also use route chaining if address is same.
router
  .route("/userid/:id")
  .get(controller.getUserDetails)
  .put(controller.updateUser)
  .delete(controller.deleteUser);

module.exports = router;
