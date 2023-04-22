const express = require("express");
const controller = require("../controllers/task.js");
const middleware = require("../middleware/auth.js");
const router = express.Router();

router.post("/new", middleware.isAuthenticated, controller.newTask);
router.get("/my", middleware.isAuthenticated, controller.getMyTask);
router
  .route("/:id")
  .put(middleware.isAuthenticated, controller.updateTask)
  .delete(middleware.isAuthenticated, controller.deleteTask);

module.exports = router;
