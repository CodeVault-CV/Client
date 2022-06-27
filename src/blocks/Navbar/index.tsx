import React from "react";

import Navbar from "./Navbar";

export default function NavBarContainer() {
    // const handleLogin = () => {
    //     // 1. 이전에 만든 계정이 있는지 확인 후 있다면 바로 로그인
    
    //     // 2. 없다면 깃허브로 redirect
    //     window.location.assign(`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`);
    // }
    
    return <Navbar auth={false} />;
}