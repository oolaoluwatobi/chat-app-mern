import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: [
      "http://localhost:3000",
      "http://localhost:4000",
      "https://chat-app-mern-re7b.onrender.com/",
    ],
    methods: ["GET", "POST"],
  },
});

export const getReceiverSocketId = (receiverId) => {
  return userSocketMap[receiverId];
};

const userSocketMap = {}; //{userId: socketId}

io.on("connection", (socket) => {
  // console.log(`user with socket: `, socket);
  console.log(`user with id: ${socket.id} connected `);

  const userId = socket.handshake.query.userId;
  if (userId) userSocketMap[userId] = socket.id;

  // io.emit() is used to emit events to all connected clients
  io.emit("getOnlineUsers", userSocketMap); // getOnlineUsers is a custom event that sends the userSocketMap to all connected clients, so that they can know who is online

  // // Upon connection - only to user

  // socket.on('enterRoom', ({ name, room, userId }) => {

  //   socket.emit('message', buildMsg(ADMIN, "Welcome to Chat App!"))
  //     // leave previous room

  //     // const prevRoom = getUser(socket.id)?.room

  //     // if (prevRoom) {
  //     //     socket.leave(prevRoom)
  //     //     io.to(prevRoom).emit('message', buildMsg(ADMIN, `${name} has left the room`))
  //     // }

  //     const user = activateUser(socket.id, name, room)

  //     // Cannot update previous room users list until after the state update in activate user
  //     // if (prevRoom) {
  //     //     io.to(prevRoom).emit('userList', {
  //     //         users: getUsersInRoom(prevRoom)
  //     //     })
  //     // }

  //     // join room
  //     socket.join(user.room)

  //     // To user who joined
  //     socket.emit('message', buildMsg(ADMIN, `You have joined the ${user.room} chat room`))

  //     // To everyone else
  //     socket.broadcast.to(user.room).emit('message', buildMsg(ADMIN, `${user.name} has joined the room`))

  //     // Update user list for room
  //     io.to(user.room).emit('userList', {
  //         users: getUsersInRoom(user.room)
  //     })

  //     // Update rooms list for everyone
  //     io.emit('roomList', {
  //         rooms: getAllActiveRooms()
  //     })
  // })

  // Listen for activity
  socket.on("activity", (roomName) => {
    console.log("activity", roomName);
    const room = userId?.room;
    if (room) {
      socket.broadcast.to(room).emit("activity", roomName);
    }
  });

  // socket.on() is used to listen to events, can be custom events or built-in events, and can be client and server side
  socket.on("disconnect", () => {
    console.log(userId, `${socket.handshake.query.userId}`);
    console.log(`user with id: ${socket.id} disconnected `);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", userSocketMap);
  });
});

// function buildMsg(name, text) {
//   return {
//     name,
//     text,
//     time: new Intl.DateTimeFormat("default", {
//       hour: "numeric",
//       minute: "numeric",
//       second: "numeric",
//     }).format(new Date()),
//   };
// }

export { app as default, io, server };
