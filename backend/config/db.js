import mongoose from "mongoose";

async function connectDB(req, res) {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MONGODB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log("ERROR CONNECTING TO MONGODB", error);
    process.exit(1);
  }
};

export default connectDB;
