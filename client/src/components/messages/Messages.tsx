import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import { Message as TMessage } from "../../lib/types";
import Message from "./Message";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  console.log("messages: ", messages);

  useEffect(() => {
    setTimeout(() => {
      if (lastMessageRef.current)
        lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: TMessage) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message key={message._id} message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
