import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectToMongoDB from "./db/connectToMongoDB.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";
import app, { server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 4000;

// const app = express();

app.use(express.json()); //to parse the incoming request with JSON payloads from req.body
app.use(cookieParser());
// app.use(express.urlencoded({ extended: true })); //to parse the incoming request with urlencoded payloads from req.body

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on port ${PORT}`);
});
