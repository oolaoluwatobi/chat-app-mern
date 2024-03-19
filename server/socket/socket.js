import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  console.log(`user with id: ${socket.id} connected `);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to emit events to all connected clients
  io.emit("getOnlineUsers", userSocketMap); // getOnlineUsers is a custom event that sends the userSocketMap to all connected clients, so that they can know who is online

  // socket.on() is used to listen to events, can be custom events or built-in events, and can be client and server side
  socket.on("disconnect", () => {
    console.log(`user with id: ${socket.id} disconnected `);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", userSocketMap);
  });
});

export { app as default, io, server };
