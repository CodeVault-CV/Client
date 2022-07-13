import { useState, createContext, PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getToken } from "../../api";

export const AuthContext = createContext({
    auth: false,
    name: "",
    token: "",
    login(code: string) {},
    logout() {},
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    const navigate = useNavigate();    

    const checkAuth = () => {
        const authData = localStorage.getItem("auth");
        if(authData !== null) {
            const { name, token } = JSON.parse(authData);
            setAuth(true);
            setName(name);
            setToken(token);
        }
        else {
            setAuth(false);
            setName("");
            setToken("");
        }
    }

    const login = async (code: string) => {
        try {
            const { status, data } = await getToken(code);
            if(status === 200) {
                localStorage.setItem("auth", JSON.stringify(data));
                checkAuth();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const logout = () => {
        localStorage.removeItem("auth");
        checkAuth();
        navigate("/", { replace: true });
    }

    useEffect(() => {
        checkAuth();
    }, []);

    const initialValue = {
        auth,
        name,
        token,
        login,
        logout,
    }

    return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
}