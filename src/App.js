import Component from "./core/Component.js";
import Router from "./core/Router.js";

import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Loading from "./components/common/Loading.js";

import { login } from "./controller/user.js";

export default class App extends Component {
    template() {
        return `
        <div id="app"></div>
        <style>
        #app {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #35393F;
        }
        </style>
        `
    }
    mounted() {
        const app = document.getElementById("app");
        new Router([
            [
                "/",
                () => {
                    // 유저 정보가 있다면 메인화면, 없다면 로그인 화면을 보여줌
                    if(localStorage.getItem("user")) new Main(app);
                    else new Login(app);
                }
            ],
            [
                "/login",
                async () => {
                    new Loading(app);
                    // url에 코드가 있다면 로그인 시도
                    const code = new URLSearchParams(location.search).get("code");
                    if(code) await login(code);
                    location.replace("/");
                }
            ],
        ]);
    }
};