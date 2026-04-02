import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongodbconnection = await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb connected successfully");
    console.log(`MongoDB connected: ${mongodbconnection.connection.host}`);
  } catch (e) {
    console.error(`Error connecting to MongoDB:, ${e.message}`);
  }
};

export default connectDB;
