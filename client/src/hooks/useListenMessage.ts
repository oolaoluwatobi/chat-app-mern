import { useEffect } from "react";
import { useSocketContext } from "../context/useSocketContext";
import useConversation from "../zustand/useConversation";
import { Message } from "../lib/types";
// import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = useConversation();

  useEffect(() => {
    socket?.on("newMessage", (newMessage: Message) => {
      newMessage.shouldShake = true;
      // const sound = new Audio(notificationSound);
      // sound.play();
      setMessages([...messages, newMessage]);
    });

    return () => socket?.off("newMessage");
  }, [socket, messages, setMessages]);

  useEffect(() => {
    // let roomName = 'room1'

    socket?.emit("activity", (roomName) => {
      console.log("activity", roomName);
      // newMessage.shouldShake = true;

      // const sound = new Audio(notificationSound);
      // sound.play();
      // setMessages([...messages, newMessage]);
    });

    return () => socket?.off("activity");
  }, [socket, messages, setMessages]);
};

export default useListenMessage;
