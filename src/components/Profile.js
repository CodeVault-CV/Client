import Component from "../core/Component.js";

export default class Profile extends Component {
    template() {
        return `
        <div class="profile">
            <img class="avatar" src="${this._props.url ? this._props.url : "../images/github.png"}" />
            <div class="username">${this._props.name}</div>
        </div>
        <style>
        .avatar {
            display: block;
            border-radius: 50%;
            width: 100%;
            border: whitesmoke 2px;
            border-style: inset;
        }
        .username {
            font-size: 25px;
            margin: 15px 0 5px;
        }
        </style>
        `;
    }
}