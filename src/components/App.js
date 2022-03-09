import Component from "../core/Component.js";
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
        new Login(document.querySelector("#app"));
    }
};