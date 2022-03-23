import Component from "../core/Component.js";

import { store } from "../store.js";

export default class Modal extends Component {
    template() {
        return `
        <div class="modal"></div>
        <style>
        .modal {
            position: absolute;
            display: ${store.state.modal ? "block" : "none"};
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
}