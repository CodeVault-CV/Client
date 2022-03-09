import GithubLogin from "../components/GithubLogin.js";
import Component from "../core/Component.js";

export default class Main extends Component {
    template() {
        return `
        <div class="main-container">
            <div class="main-component">
                <h1><알공></h1>
                <p>
                    알고리즘 스터디를 가장 쉽게 시작할 수 있는 곳
                </p>
                <div class="github-login"></div>
            </div>
        </div>
        <style>
            .main-container {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 85vh;
            }
            .main-component {
                width: 500px;
                margin: auto;
                padding: 100px 30px 200px;
            }
            .main-component h1 {
                margin-bottom: 30px;
                text-align: center;
                font-size: 8em;
            }
            .main-component p {
                font-size: 18px;
                margin: 40px 0;
            }
        </style>
        `;
    }
    mounted() {
        new GithubLogin(document.querySelector(".github-login"));
    }
};