import Component from "../core/Component.js";
import { modalStore } from "../stores/store.js";

import Loading from "./common/Loading.js";
import CreateStudyModal from "./CreateStudyModal.js";

export default class Modal extends Component {
    template() {
        return `
        <div class="modal"></div>
        <style>
        .modal {
            position: absolute;
            display: ${modalStore.state.modal ? "flex" : "none"};
            justify-content: center;
            align-items: center;
            left: 0;
            top: 0;
            width: 100%;
            height: 100vh;
            background: rgba(0, 0, 0, 0.5);
        }
        </style>
        `;
    }
    closeModal = (event) => {
        switch (event.type) {
            case "click":
                if(event.target === document.querySelector(".modal") && modalStore.state.modal !== "LOADING") modalStore.commit("CLOSE_MODAL");
                break;
            case "keydown":
                if(event.key === "Escape" && modalStore.state.modal !== "LOADING") modalStore.commit("CLOSE_MODAL");
                break;
            default:
                break;
        }
    }
    setEvent() {
        // ESC 입력시 모달 닫기
        window.removeEventListener("keydown", this.closeModal);
        window.addEventListener("keydown", this.closeModal);
        // 모달 바깥쪽 클릭시 모달 닫기
        const modal = this.target.querySelector(".modal");
        this.addEvent(modal, "click", this.closeModal);
    }
    mounted() {
        const modal = document.querySelector(".modal");
        switch(modalStore.state.modal) {
            case "CREATE_NEW_STUDY":
                new CreateStudyModal(modal);
                break;
            case "LOADING":
                new Loading(modal);
            default:
                break;
        }
    }
}