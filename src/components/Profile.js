import Component from "../core/Component.js";

import { getUserProfile } from "../controller/user.js";

export default class Profile extends Component {
    template() {
        return `
        <div class="profile">
            <img class="avatar" src="${this.state.url ? this.state.url : "../images/github.png"}" />
            <div class="username">${this.state.name}</div>
        </div>
        <style>
        .avatar {
            display: block;
            border-radius: 50%;
            width: 100%;
            border: lightgray 1px solid;
        }
        .username {
            font-size: 25px;
            margin: 15px 0 5px;
        }
        </style>
        `;
    }
    setup() {
        requestAnimationFrame(async () => {
            const profileData = await getUserProfile(JSON.parse(localStorage.getItem("user")).name);
            this.setState({ ...profileData });
        });
    }
}