import Component from "../core/Component.js";

import Sidebar from "./Sidebar.js";

export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
            <div id="sidebar-container"></div>
            <div id="main"></div>
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
            if(event.key === "Escape") document.querySelector(".modal").style.display = "none";
        });
        this.addEvent("click", ".modal", (event) => {
            let modal = document.querySelector(".modal");
            if(event.target === modal) modal.style.display = "none";
        });
    }
    mounted() {
        const main = document.getElementById("main-container");
        new Sidebar(main.querySelector("#sidebar-container"));
    }
};