import Component from "../core/Component.js";
import Router from "../core/router.js";
import Login from "./Login.js";

export default class App extends Component {
    template() {
        return `
            <div id="app">
            </div>
            <style>
            #app {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            </style>
        `
    }
    mounted() {
        const app = document.getElementById("app");
        new Router([
            [
                "/",
                () => new Login(app)
            ],
            [
                "/login",
                async () => {
                    const code = new URLSearchParams(location.search).get("code");
                    if(code) {
                        const response = await fetch(`http://choco-one.iptime.org:8090/api/user/login?code=${code}`);
                        const token = await response.text();
                        console.log(token);
                    }
                }
            ]
        ]);
    }
};