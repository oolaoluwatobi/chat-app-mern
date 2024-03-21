// import useSendMessage from "../../hooks/useSendMessage";
import { FormEvent, useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import { useSocketContext } from "../../context/useSocketContext";
import { useCallback } from "react";

const JoinRoom = () => {
  // const { loading, sendMessage } = useSendMessage();
  // const [message, setMessage] = useState("");
  const [room, setRoom] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const { socket } = useSocketContext();

  const handleJoinRoom = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setLoading(true);
      socket?.emit("join-room", room, (res) => {
        console.log(res, "join room response");
        setLoading(false);
      });

      setLoading(false);
      setRoom("");
    },
    [socket, room]
  ); // add dependencies if any

  return (
    <form onSubmit={handleJoinRoom} className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 "
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          {loading ? (
            <span className=" size-4 loading loading-spinner " />
          ) : (
            <MdOutlineGroupAdd className="" />
          )}
        </button>
      </div>
    </form>
  );
};

export default JoinRoom;
