import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/logout", {});
      console.log(res.data);
      sessionStorage.removeItem("chat-user-session");
      setAuthUser(null);
      toast.success("Success");
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

  return { loading, logout };
};

export default useLogout;
