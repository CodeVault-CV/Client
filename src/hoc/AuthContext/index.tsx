import {
  useState,
  createContext,
  PropsWithChildren,
  useEffect,
  useContext,
  useCallback,
} from "react";
import Auth from "../../di/Auth";

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
    const id = Auth.getId();
    if (id !== null) {
      setAuth(true);
      setUserId(id);
    } else {
      setAuth(false);
      setUserId("");
    }
  };

  const login = useCallback(async (code: string) => {
    try {
      await Auth.login(code);
      checkAuth();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const logout = useCallback(() => {
    Auth.logout();
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
