import { create } from "zustand";
import { Conversation, Message } from "../lib/types";

interface Props {
  selectedConversation: Conversation | null;
  setSelectedConversation: (conversation: Conversation) => void;
  messages: Message[] | [];
  setMessages: (message: Message[]) => void;
}

const useConversation = create<Props>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: Conversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages: Message[]) => set({ messages }),
}));

export default useConversation;
