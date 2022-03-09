import Component from "../core/Component.js";

export default class GithubLogin extends Component {
    template() {
        return `
        <a class="github-login-container" href="https://github.com/login/oauth/authorize?client_id=e1f73f73ee1f2865bcd5&scope=repo%20user">
            <img src="./src/images/github.png" />
            <span>Github로 로그인</span>
        </a>
        <style>
        .github-login-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 5px 0;
            user-select: none;
            text-decoration: none;
            border-radius: 50px;
            background: #2E8B57;
            box-shadow:  12px 12px 24px #a1a1a1,
                        -12px -12px 24px #ffffff;
        }
        .github-login-container:hover {
            cursor: pointer;
        }
        .github-login-container:active{
            border-radius: 50px;
            background: #2E8B57;
            box-shadow: inset 20px 20px 60px #27764a,
                        inset -20px -20px 60px #35a064;
        }
        .github-login-container img {
            width: 50px;
            object-fit: contain;
        }
        .github-login-container span {
            font-size: 20px;
            font-weight: 500;
            color: #FEFEFE;
        }
        </style>
        `;
    }
}