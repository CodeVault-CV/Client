import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../hoc/AuthContext";
import Login from "./Login";

export default function LoginContainer() {
    const navigate = useNavigate();
    const { auth, login } = useContext(AuthContext);

    useEffect(() => {
        if(auth) navigate("/", { replace: true });

        const code = new URLSearchParams(window.location.search).get("code");
        if(!code) return;
        
        login(code);
        navigate("/", { replace: true });
    }, []);

    return <Login />
}