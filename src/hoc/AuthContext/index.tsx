import { useState, createContext, PropsWithChildren, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { getToken } from "../../api";
import TypeStorage from "../../utils/TypeStorage";

type Auth = {
  name: string,
  token: string
};

export const AuthStorage = new TypeStorage<Auth>("auth", localStorage);

export const AuthContext = createContext({
  auth: false,
  name: "",
  login(code: string) {},
  logout() {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const checkAuth = () => {
    const authData = AuthStorage.get();
    if (authData !== null) {
      const { name } = authData;
      setAuth(true);
      setName(name);
    } else {
      setAuth(false);
      setName("");
    }
  };

  const login = async (code: string) => {
    try {
      const { status, data } = await getToken(code);
      if (status === 200) {
        AuthStorage.set(data);
        checkAuth();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    AuthStorage.remove();
    checkAuth();
    navigate("/");
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const initialValue = {
    auth,
    name,
    login,
    logout,
  };

  return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const state = useContext(AuthContext);
  if (!state) {
    throw new Error("Cannot find AuthProvider");
  }
  return state;
}
