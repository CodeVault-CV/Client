import Component from "../core/Component.js";
import { store } from "../store.js";

import Modal from "./Modal.js";
import Sidebar from "./Sidebar.js";

export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
            <div id="sidebar-container"></div>
            <div id="main"></div>
            <div id="modal"></div>
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
    setup() {
        // 모달 닫기 이벤트
        window.addEventListener("keydown", (event) => {
            if(event.key === "Escape") store.commit("CLOSE_MODAL");
        });
        this.addEvent("click", ".modal", (event) => {
            let modal = document.querySelector(".modal");
            if(event.target === modal) store.commit("CLOSE_MODAL");
        });
    }
    mounted() {
        const main = document.getElementById("main-container");
        new Sidebar(main.querySelector("#sidebar-container"));
        new Modal(main.querySelector("#modal"));
    }
};