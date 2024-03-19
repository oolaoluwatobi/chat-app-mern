import { useAuthContext } from "../../context/AuthContext";
import { Message as TMessage } from "../../lib/types";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

interface Props {
  message: TMessage;
}

const Message = ({ message }: Props) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromLoggedUser = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromLoggedUser ? "chat-end" : "chat-start";
  const chatBubbleBgColor = fromLoggedUser ? "bg-emerald-600" : "";
  const profilePic = fromLoggedUser
    ? authUser.profilePic
    : selectedConversation.profilePic;

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="avatar" />
        </div>
      </div>
      <p className={`chat-bubble text-white ${chatBubbleBgColor} pb-2 `}>
        {message.message}
      </p>
      <p className={`chat-footer opacity-50 text-xs flex gap-1 items-center `}>
        {formattedTime}
      </p>
    </div>
  );
};

export default Message;
