import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

export default function LoginContainer() {
    const navigate = useNavigate();

    useEffect(() => {
        async function login() {
            const code = new URLSearchParams(window.location.search).get("code");
            console.log(code)
            if(code) {
                // 1. 코드가 있으니 토큰을 요청하고 localStorage에 저장
                // 2. main 화면으로 이동
                navigate("/", { replace: true });
            }
        }
    
        login();
      }, []);

    return <Login />
}