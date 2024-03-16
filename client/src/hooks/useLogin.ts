import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { User } from "../lib/types";
import { useAuthContext } from "../context/AuthContext";

export interface ILoginProps {
  username: string;
  password: string;
}

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const login = async ({ username, password }: ILoginProps) => {
    const success = handleInputErrors({
      username,
      password,
    });
    if (!success) return;

    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", {
        username,
        password,
      });

      const data: User = await res.data; // add data type
      sessionStorage.setItem("chat-user-session", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Success");

      console.log(data, data, "data___useLogin");
      /* eslint-disable */
    } catch (error: any) {
      toast.error(
        error.response.data.message ||
          error.response.data.error ||
          "Error, something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

export default useLogin;

function handleInputErrors({ username, password }: ILoginProps) {
  if (!username || !password) {
    toast.error("Please fill all the fields.");
    return false;
  }

  return true;
}
