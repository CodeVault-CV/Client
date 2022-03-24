import Component from "../core/Component.js";
import Router from "../core/Router.js";

import Login from "./Login.js";
import Main from "./Main.js";
import Loading from "./common/Loading.js";

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
                        try {
                            const response = await fetch(`http://choco-one.iptime.org:8090/api/user/login?code=${code}`);
                            const userInfo = await response.json();
                            localStorage.setItem("user", JSON.stringify({ ...userInfo }));
                        } catch (error) {
                            alert(error);
                        }
                    }
                    location.replace("/");
                }
            ],
        ]);
    }
};