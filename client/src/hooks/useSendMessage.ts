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

  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `/api/messages/send/${selectedConversation?._id}`,
        {
          message,
        }
      );
      console.log(res.data);
      setMessages([...messages, res.data]);
      toast.success("Message sent");
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
