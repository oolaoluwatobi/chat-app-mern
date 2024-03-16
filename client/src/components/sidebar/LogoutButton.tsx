import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";
import { VscLoading } from "react-icons/vsc";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <button disabled={loading} onClick={logout} className="mt-auto size6 wfit ">
      {loading ? (
        <VscLoading className="size-5 ml-1 text-yellow-200 animate-spin cursor-not-allowed " />
      ) : (
        <BiLogOut className="size-6 text-white hover:text-rose-500 cursor-pointer " />
      )}
    </button>
  );
};

export default LogoutButton;
