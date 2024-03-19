import { FormEvent, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search.trim() === "") return;
    if (!search) return;
    if (search.length < 3) {
      toast.error("Search term must be at least 3 characters long");
    }
    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No user found with that name");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 ">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="btn btn-circle bg-emerald-700 hover:bg-emerald-600  text-white "
      >
        <IoSearchSharp className="size-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
