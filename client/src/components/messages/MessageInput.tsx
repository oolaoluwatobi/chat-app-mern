import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
import { FormEvent, useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState();
  const { loading, sendMessage } = useSendMessage();

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("message: ", message);
    sendMessage(message);
    setMessage(null);
  };

  return (
    <form onSubmit={handleSendMessage} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 "
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className=" size-5 loading loading-spinner text-yellow-200" />
          ) : (
            <BsSend className="" />
          )}
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
