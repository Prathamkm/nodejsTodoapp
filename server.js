const app = require("./app.js");
const connectDB = require("./data/database.js");

connectDB();

app.listen(process.env.PORT, () => {
  console.log(
    `server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
