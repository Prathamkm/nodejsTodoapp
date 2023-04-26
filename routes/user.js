const express = require("express");
const controller = require("../controllers/user.js");
const middleware = require("../middleware/auth.js");
const router = express.Router();

router.post("/new", controller.register);
router.post("/login", controller.login);
router.get("/logout", controller.logout);
router.delete("/delete", middleware.isAuthenticated, controller.deleteUser);

router.get("/me", middleware.isAuthenticated, controller.getMyProfile);

module.exports = router;
