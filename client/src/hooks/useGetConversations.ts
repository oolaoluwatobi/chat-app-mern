import axios from "axios";
import { useEffect, useState } from "react";
import { Conversation } from "../lib/types";

const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState<Conversation[]>([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/users");
        console.log(res.data);
        setConversations(res.data);
        return res.data;
      } catch (error) {
        console.error;
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
