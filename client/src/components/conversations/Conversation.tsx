import useConversation from "../../zustand/useConversation";

interface Conversation {
  _id: string;
  fullName: string;
  username: string;
  profilePic: string;
  gender: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface Props {
  conversation: Conversation;
  emoji: string;
  lastIdx: boolean;
}

const Conversation = ({ conversation, emoji, lastIdx }: Props) => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  const isSelected = selectedConversation?._id === conversation?._id;

  function handleClick() {
    setSelectedConversation(conversation);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className={` ${
          isSelected ? "bg-emerald-800 " : "hover:bg-emerald-800/60"
        } flex gap-2 items-center 0 rounded-lg p-2 py-1 cursor-pointer`}
      >
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200 ">{conversation.fullName}</p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>

        {!lastIdx && <div className="divider my-0 py-0 h-1" />}
      </div>
    </>
  );
};

export default Conversation;
