import { ReactNode, createContext, useContext, useState } from "react";
import { User } from "../lib/types";

export type TAuthContext = {
  authUser: User;
  setAuthUser: (user: User) => void;
};

export const AuthContext = createContext<TAuthContext | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  return useContext(AuthContext);
};

interface Props {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: Props) => {
  const [authUser, setAuthUser] = useState(
    JSON.parse(sessionStorage.getItem("chat-user-session")) || null
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};
