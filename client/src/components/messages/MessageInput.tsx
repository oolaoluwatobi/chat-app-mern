import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { FormEvent, useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const [room, setRoom] = useState<string | null>(null);
  const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("message: ", message);
    if (!message) return;
    await sendMessage({ message, room });
    setMessage("");
    setRoom(null);
  };

  return (
    <form onSubmit={handleSendMessage} className="px-4 my-3">
      <div className="w-full relative">
        <div className="relative">
          <input
            type="text"
            className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? (
              <span className=" size-4 loading loading-spinner " />
            ) : (
              <BsSend className="" />
            )}
          </button>
        </div>
        {/* <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 "
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        /> */}
      </div>
    </form>
  );
};

export default MessageInput;
