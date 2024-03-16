import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { User } from "../lib/types";
import { useAuthContext } from "../context/AuthContext";

export interface ISignupProps {
  fullName: string;
  username: string;
  password: string;
  confirmPassword: string;
  gender: string;
}

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }: ISignupProps) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;

    setLoading(true);
    console.log("fullName: ", fullName);
    console.log("loading: ", loading);
    try {
      const res = await axios.post("/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      const data: User = await res.data; // add data type
      sessionStorage.setItem("chat-user-session", JSON.stringify(data));
      setAuthUser(data);
      toast.success("Success");

      console.log(data, data, "data___usesignup");
      /* eslint-disable */
    } catch (error: any) {
      toast.error(
        error.response.data.message
          ? error.response.data.message
          : "Error, something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}: ISignupProps) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill all the fields.");
    return false;
  }

  if (password !== confirmPassword) {
    console.log(password, confirmPassword);
    toast.error("Passwords do not match!");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be atleast 6 characters!");
    console.log("passed checks");
    return false;
  }
  console.log("passed checks");

  return true;
}
