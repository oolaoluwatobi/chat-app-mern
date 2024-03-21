// import { TiMessages } from "react-icons/ti";
import MessageInput from "./MessageInput";
import Messages from "./Messages";

// import Lottie from "lottie-react";
// import animation from "../../assets/animation_8.json";
import useConversation from "../../zustand/useConversation";
import { useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { TiMessages } from "react-icons/ti";
import { IoChevronBack } from "react-icons/io5";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    // cleanup function
    return setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="md: min-w-[450px] min-h-[450px md:h-auto h-[80vh] flex flex-col ">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* header */}
          <div className="bg-slate-500 px-4 py-2 mb-2 flex space-x-4">
            <button
              onClick={() => setSelectedConversation(null)}
              className="md:hidden"
            >
              <IoChevronBack size={20} className="my-auto text-white" />
            </button>
            <span className="text-gray-900 text-center font-bold my-auto mx-auto w-full">
              {selectedConversation.fullName}
            </span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  // const { selectedConversation } = useConversation();

  return (
    <div className="hidden md:flex items-center justify-center w-full h-full   ">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome {authUser.fullName} 👋🏾 </p>
        {/* <p>Welcome 👋 {authUser.fullName} ❄</p> */}
        <p>Select a chat</p>
        {/* <Lottie className="size-32  md:size-40" animationData={animation} /> */}
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
