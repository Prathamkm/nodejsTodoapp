const { ErrorHandler } = require("../middleware/error.js");
const Task = require("../models/task.js");

const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    await Task.create({
      title,
      description,
      user: req.user,
    });

    res.status(201).json({
      sucess: true,
      message: "Task added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

const getMyTask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};
const updateTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Task not found", 404));
    task.isCompleted = !task.isCompleted;
    await task.save();
    res.status(200).json({
      success: true,
      message: "Task Updated",
    });
  } catch (error) {
    next(error);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return next(new ErrorHandler("Task not found", 404));

    await task.deleteOne();
    res.status(200).json({
      success: true,
      message: "Task Deleted",
    });
  } catch (error) {
    next(error);
  }
};

const deleteAll = async (req, res, next) => {
  try {
    const data = await Task.deleteMany({ user: req.user._id });
    if (!data.deletedCount)
      return next(new ErrorHandler("Task not found", 404));
    res.status(200).json({
      success: true,
      message: "All Task Deleted Successfully",
    });
    // logout();
  } catch (error) {
    next(error);
  }
};

module.exports = { newTask, getMyTask, updateTask, deleteTask, deleteAll };
