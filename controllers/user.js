const User = require("../models/user.js");
const getAllUsers = async (req, res) => {
  const users = await User.find({});
  console.log(req.query); //url mein question mark lgane ke baad jo bhi likhenge wo question mark mein aa jayega example localhost:4000/users/all?name=i am a  query&founder=pratham kumar

  res.json({
    success: true,
    users,
  });
};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  await User.create({
    name,
    email,
    password,
  });

  res.status(201).cookie("tempi", "lol").json({
    success: true,
    message: "Registered Successfully",
  });
};

const specialFunc = (req, res) => {
  res.json({
    success: true,
    message: "Just Joking",
  });
};

const getUserDetails = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  res.json({
    success: true,
    user,
  });
};

module.exports = { getAllUsers, register, specialFunc, getUserDetails };
