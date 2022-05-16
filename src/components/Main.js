import Component from "../core/Component.js";

import Modal from "./Modal.js";
import Study from "./Study.js";
import Sidebar from "./Sidebar.js";


export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
            <div id="sidebar-container"></div>
            <div id="study-container"></div>
            <div id="modal"></div>
        </div>
        <style>
        #main-container {
            display: flex;
            width: 100%;
            height: 100%;
            color: whitesmoke;
        }
        #study-container {
            width: 100%;
            display: flex;
            align-content: center;
            justify-content: center;
        }
        </style>
        `;
    }
    async mounted() {
        const main = document.getElementById("main-container");
        new Sidebar(main.querySelector("#sidebar-container"));
        new Study(main.querySelector("#study-container"));
        new Modal(main.querySelector("#modal"));
    }
};