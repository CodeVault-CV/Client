import {
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
  useContext,
  useCallback,
} from "react";

import { getToken } from "../../api";
import TypeStorage from "../../core/infra/TypeStorage";

type Auth = {
  id: string;
  token: string;
};

export const AuthStorage = new TypeStorage<Auth>("auth", localStorage);

export const AuthContext = createContext({
  auth: false,
  userId: "",
  login(code: string) {},
  logout() {},
});

export function AuthProvider({ children }: PropsWithChildren) {
  const [auth, setAuth] = useState(false);
  const [userId, setUserId] = useState("");

  const checkAuth = () => {
    const authData = AuthStorage.get();
    if (authData !== null) {
      const { id } = authData;
      setAuth(true);
      setUserId(id);
    } else {
      setAuth(false);
      setUserId("");
    }
  };

  const login = useCallback(async (code: string) => {
    try {
      const { status, data } = await getToken(code);
      if (status === 200) {
        AuthStorage.set(data);
        checkAuth();
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(() => {
    AuthStorage.remove();
    checkAuth();
  }, []);

  useEffect(() => {
    checkAuth();
  }, []);

  const initialValue = {
    auth,
    userId,
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
