//mongoose is an odm object data model
// it helps to connect with database, it helps to create schema,it helps to write mongodb commands in javascript format

const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async (req,res) => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    // res.status(200).send({
    //     message: "Database Connected"
    // })
    console.log(`Database connected`.bgGreen.white);
  } catch (error) {
    // res.status(504).send({
    //     message: `Internal Server Error ${error}`,
    //     success: false,
    //     description: `Database not connected`
    // })
    console.log(`Error: ${error}`.bgRed.white);
  }
};
module.exports = connectDB;


