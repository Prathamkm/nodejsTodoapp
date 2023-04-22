const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const utils = require("../utils/features.js");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or password",
    });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch)
    return res.status(404).json({
      success: false,
      message: "Invalid Email or password",
    });

  utils.sendCookie(user, res, `welcome back ${user.name}`, 200);
};

const getAllUsers = async (req, res) => {};

const register = async (req, res) => {
  const { name, email, password } = req.body;
  let user = await User.findOne({ email });
  if (user)
    return res.status(404).json({
      success: false,
      message: "user Already Exist",
    });

  const hashedPassword = await bcrypt.hash(password, 10);

  user = await User.create({ name, email, password: hashedPassword });

  utils.sendCookie(user, res, "Registered Successfully", 201);
};

const getMyProfile = (req, res) => {
  res.status(200).json({
    sucess: true,
    user: req.user,
  });
};

const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      sucess: true,
      user: req.user,
    });
};

module.exports = {
  getAllUsers,
  register,
  getMyProfile,
  login,
  logout,
};
