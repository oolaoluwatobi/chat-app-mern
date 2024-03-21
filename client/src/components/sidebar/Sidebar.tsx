import useConversation from "../../zustand/useConversation";
import Conversations from "../conversations/Conversations";
// import JoinRoom from "../conversations/JoinRoom";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  const { selectedConversation } = useConversation();

  return (
    <div
      className={` ${
        selectedConversation ? "hidden md:flex" : ""
      } border-r border-slate-500 p-4 flex flex-col`}
    >
      <SearchInput />
      {/* <JoinRoom /> */}
      <div className=" divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
