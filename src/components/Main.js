import Component from "../core/Component.js";

import Sidebar from "./Sidebar.js";

export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
            <div id="sidebar"></div>
        </div>
        <style>
        #main-container {
            display: flex;
            width: 100%;
            height: 100%;
            color: whitesmoke;
        }
        
        </style>
        `;
    }
    mounted() {
        const main = document.getElementById("main-container");
        new Sidebar(main.querySelector("#sidebar"));
    }
};