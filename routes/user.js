const express = require("express");
const controller = require("../controllers/user.js");
const router = express.Router();

router.get("/all", controller.getAllUsers);

router.post("/new", controller.register);

router.get("/userid/special", controller.specialFunc);

router.get("/userid/:id", controller.getUserDetails);

module.exports = router;
