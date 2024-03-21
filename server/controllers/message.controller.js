import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message, room } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation;
    if (room) {
      conversation = await Conversation.findOne({
        name: room,
      });

      if (!conversation) {
        conversation = await Conversation.create({
          name: room,
          createdBy: senderId,
          participants: [senderId],
        });
      }
    } else {
      conversation = await Conversation.findOne({
        participants: { $all: [senderId, receiverId] },
      });

      if (!conversation) {
        conversation = await Conversation.create({
          participants: [senderId, receiverId],
        });
      }
    }

    // console.log(conversation, "conversation___messagecontroller");

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    await Promise.all([conversation.save(), newMessage.save()]);

    // socket io functionality

    if (room) {
      io.to(room).emit("newMessage", newMessage);
      io.emit("join-room", room);
      // io.emit("join-room", room);
      // return res.status(201).json(newMessage);
    }

    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      // io.to(<socketId>).emit() sends event to specific client
      io.to(receiverSocketId).emit("newMessage", newMessage);
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Error in sendMessage:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMessage = async (req, res) => {
  try {
    const { id: userChatId } = req.params;
    const senderId = req.user._id;

    // console.log(userChatId, "userChatId___getMessage");
    // console.log(senderId, "senderId___getMessage");

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userChatId] },
    }).populate("messages"); // Not reference but actual messages

    if (!conversation) {
      return res.status(200).json([]);
    }

    res.status(200).json(conversation.messages);
  } catch (error) {
    console.log("Error in getMessage", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
