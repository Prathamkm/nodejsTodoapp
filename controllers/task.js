const Task = require("../models/task.js");

const newTask = async (req, res) => {
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
};

const getMyTask = async (req, res) => {
  const userid = req.user._id;
  const tasks = await Task.find({ user: userid });
  res.status(200).json({
    success: true,
    tasks,
  });
};
const updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  task.isCompleted = !task.isCompleted;
  await task.save();
  res.status(200).json({
    success: true,
    message: "Task Updated",
  });
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.deleteOne();
  res.status(200).json({
    success: true,
    message: "Task Deleted",
  });
};

module.exports = { newTask, getMyTask, updateTask, deleteTask };
