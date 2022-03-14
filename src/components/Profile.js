import Component from "../core/Component.js";

export default class Profile extends Component {
    template() {
        return `
            <img class="avatar" src="${this._props.url ? this._props.url : "../images/github.png"}" />
            <div class="username">${this._props.name}</div>
            <style>
            .avatar {
                border-radius: 50%;
                margin: 20px 0;
                width: 100%;
            }
            .username {
                font-size: 25px;
                font-weight: 700;
            }
            </style>
        `;
    }
}