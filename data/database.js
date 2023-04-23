const mongoose = require("mongoose");
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`Databse connected with ${c.connection.host}`))
    .catch((e) => console.log(e));
};
module.exports = connectDB;
