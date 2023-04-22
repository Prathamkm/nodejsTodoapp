const express = require("express");
const userRouter = require("./routes/user.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();

dotenv.config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/users", userRouter); // /users yha esilea diya gya hai q ki ./routes/user.js mein jitne bhi route hai usme /user default rahe

app.get("/", (req, res) => {
  res.send("Nice Working");
});

module.exports = app;
