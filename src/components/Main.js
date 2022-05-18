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
            min-width: 1000px;
            height: 100%;
            color: whitesmoke;
        }
        #study-container {
            width: 100%;
            background-color: #35393F;
            padding: 20px 40px 0;
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