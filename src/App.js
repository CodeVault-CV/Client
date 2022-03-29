import Component from "./core/Component.js";
import Router from "./core/Router.js";

import Login from "./components/Login.js";
import Main from "./components/Main.js";
import Loading from "./components/common/Loading.js";
import { loginUser } from "./api/index.js";

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
                    if(localStorage.getItem("user")) new Main(app);
                    else new Login(app);
                }
            ],
            [
                "/login",
                async () => {
                    new Loading(app);
                    const code = new URLSearchParams(location.search).get("code");
                    if(code) {
                        const userInfo = await loginUser(code);
                        localStorage.setItem("user", JSON.stringify({ ...userInfo }));
                    }
                    location.replace("/");
                }
            ],
        ]);
    }
};