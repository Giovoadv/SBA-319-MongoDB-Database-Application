// import { MongoClient } from "mongodb";
const mongoose = require("mongoose");
// const client = new MongoClient(process.env.MONGO_URL)start

const conn = () => {
  console.log('HOla',process.env.MONGO_URL)
  try {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection.once("open", () => {
      console.log("conected to mongodb");
    });
  } catch (error) {
    console.error(
      `Something went wrong with connect to the database${error.message}`
    );
  }
};

// let conn;
// try {
//   conn = await client.connect();
// } catch (error) {
//   console.error(error);
// }

// let db = conn.db("sample_training");

// export default db;

module.exports = conn;
