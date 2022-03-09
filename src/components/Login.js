import Component from "../core/Component.js";
import GithubLoginButton from "./GithubLoginButton.js";

export default class Login extends Component {
    template() {
        return `
        <div id="login-container">
            <div class="logo">AL<span>GONG</span></div>
            <div class="github-login-button"></div>
        </div>
        <style>
        #login-container {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 30px;
            border-radius: 18px;
            background: hsl(0, 0%, 100%);
            width: 350px;
            height: 500px;
        }

        .logo {
            font-family: 'Viga', sans-serif;
            text-align: center;
            font-size: 4rem;
        }
        .logo span {
            color: cornflowerblue;
        }
        </style>
        `;
    }
    mounted() {
        new GithubLoginButton(document.querySelector(".github-login-button"));
    }
};