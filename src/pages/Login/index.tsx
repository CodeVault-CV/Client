import React, { useEffect } from "react";
import { loginUser } from "../../api";

export default function LoginContainer() {
    useEffect(() => {
        async function login() {
            const code = new URLSearchParams(window.location.search).get("code");
            if(code) {
                const { data } = await loginUser(code);
                console.log(data.data);
            }
        }
    
        login();
      }, []);

    return <div>Login</div>
}