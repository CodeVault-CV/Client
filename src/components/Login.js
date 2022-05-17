import Component from "../core/Component.js";

import GithubLoginButton from "./GithubLoginButton.js";

export default class Login extends Component {
    template() {
        return `
        <div id="login-page">
            <div id="login-widget">
                <div class="logo">AL<span>GONG</span></div>
                <div class="github-login-button"></div>
            </div>
        </div>
        <style>
        #login-page {
            background-color: #5865f1;
            background-image: url("./src/images/background-pattern.png");
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        #login-widget {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            padding: 30px;
            border-radius: 10px;
            background: #35393F;
            width: 600px;
            height: 400px;
        }

        .logo {
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            color: whitesmoke;
            font-size: 4rem;
            user-select: none;
            font-weight: 700;
        }
        .logo span {
            color: #5865f1;
        }
        
        </style>
        `;
    }
    mounted() {
        new GithubLoginButton(document.querySelector(".github-login-button"));
    }
};