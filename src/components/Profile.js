import Component from "../core/Component.js";

export default class Profile extends Component {
    template() {
        return `
            <img class="avatar" src="https://avatars.githubusercontent.com/u/33976823?v=4" alt="../images/github.png" />
            <div class="username">woong-jae</div>
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