import { useState, createContext, PropsWithChildren, useEffect } from "react";
import { getToken } from "../../api";

export const AuthContext = createContext({
    auth: false,
    name: "",
    token: "",
    checkAuth() {},
    login(code: string) {},
});

export function AuthProvider({ children }: PropsWithChildren) {
    const [auth, setAuth] = useState(false);
    const [name, setName] = useState("");
    const [token, setToken] = useState("");
    

    const checkAuth = () => {
        const authData = localStorage.getItem("auth");
        if(authData !== null) {
            const { name, token } = JSON.parse(authData);
            setAuth(true);
            setName(name);
            setToken(token);
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

    useEffect(() => {
        checkAuth();
    }, []);

    const initialValue = {
        auth,
        name,
        token,
        checkAuth,
        login,
    }

    return <AuthContext.Provider value={initialValue}>{children}</AuthContext.Provider>
}