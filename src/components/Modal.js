import Component from "../core/Component.js";
import { store } from "../store.js";

import Loading from "./common/Loading.js";
import CreateStudyModal from "./CreateStudyModal.js";

export default class Modal extends Component {
    template() {
        return `
        <div class="modal"></div>
        <style>
        .modal {
            position: absolute;
            display: ${store.state.modal ? "flex" : "none"};
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
    mounted() {
        const modal = document.querySelector(".modal");
        switch(store.state.modal) {
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