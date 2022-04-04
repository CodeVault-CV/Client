import Component from "../core/Component.js";
import { store } from "../store.js";

import Modal from "./Modal.js";
import Sidebar from "./Sidebar.js";

import { getStudyList } from "../api/index.js";
import Study from "./Study.js";

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
    setup() {
        // 모달 닫기 이벤트
        window.addEventListener("keydown", (event) => {
            if(event.key === "Escape" && store.state.modal !== "LOADING") store.commit("CLOSE_MODAL");
        });
        this.addEvent("click", ".modal", (event) => {
            let modal = document.querySelector(".modal");
            if(event.target === modal && store.state.modal !== "LOADING") store.commit("CLOSE_MODAL");
        });
    }
    async mounted() {
        const main = document.getElementById("main-container");
        new Sidebar(main.querySelector("#sidebar-container"));
        new Study(main.querySelector("#study-container"));
        new Modal(main.querySelector("#modal"));
        
        const { token } = JSON.parse(localStorage.getItem("user"));
        let studyList = await getStudyList(token);
        store.commit("ADD_STUDY", studyList);
    }
};