const express = require("express");
const userRouter = require("./routes/user.js");
const TaskRouter = require("./routes/task.js");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const middleware = require("./middleware/error.js");
const cors = require("cors");
const app = express();

dotenv.config({
  path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// /users yha esilea diya gya hai q ki ./routes/user.js mein jitne bhi route hai usme /user default rahe
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", TaskRouter);

app.get("/", (req, res) => {
  res.send("Nice Working");
});

//using error middleware
app.use(middleware.errorMiddleware);

module.exports = app;
