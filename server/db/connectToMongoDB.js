import mongoose from "mongoose";

export default async function connectToMongoDB() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI);
    console.log(`MongoDB connected: ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
  }
}
