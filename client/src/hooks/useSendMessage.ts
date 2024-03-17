import { useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "axios";
import toast from "react-hot-toast";

// interface Props {
//   message: string
// }

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    console.log("message:", message);

    setLoading(true);
    try {
      const res = await axios.post(
        `/api/send/${selectedConversation?._id}`,
        message
      );
      setMessages([...messages, res.data]);
    } catch (error) {
      console.error(error);
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage };
};

export default useSendMessage;
