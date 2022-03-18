import Router from "../core/Router.js";
import Component from "../core/Component.js";

export default class Profile extends Component {
    template() {
        return `
            <img class="avatar" src="${this._props.url ? this._props.url : "../images/github.png"}" />
            <div class="username">${this._props.name}</div>
            <button class="logout">sign out</button>
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
            .logout {
                margin: 5px 0;
                border: none;
                border-radius: 40px;
                padding: 5px 10px;
            }
            </style>
        `;
    }
    setEvent() {
        this.addEvent("click", ".logout", () => {
            localStorage.clear("user");
            new Router().render("/");
        });
    }
}