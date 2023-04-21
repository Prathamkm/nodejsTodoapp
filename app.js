const express = require("express");
const userRouter = require("./routes/user.js");
const dotenv = require("dotenv");
const app = express();

dotenv.config({
  path: "./data/config.env",
});

app.use(express.json()); //for post json data
app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

module.exports = app;
