import Component from "../core/Component.js";
import Router from "../core/Router.js";
import { store } from "../store.js";

import Profile from "./Profile.js";
import StudyList from "./StudyList.js";

export default class Sidebar extends Component {
    template() {
        return `
        <nav class="sidebar">
            <div class="logo">AL<span>GONG</span></div>
            <div class="profile-container"></div>
            <div class="study-list-container"></div>
            <button class="create-study"> 새 알고리즘 스터디 만들기</button>
            <button class="logout">로그아웃</button>
        </nav>
        <style>
        nav {
            background: #1F2225;
            display: flex;
            flex-direction: column;
            overflow: auto;
            width: 250px;
            height: 100%;
            padding: 0 20px;
        }

        .logo {
            margin: 20px 0 0;
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            font-size: 30px;
            user-select: none;
            color: whitesmoke;
        }
        .logo span {
            color: #5865f1;
        }

        .profile-container {
            padding: 10px;
            margin: 10px 0;
        }

        .logout {
            background: #ED4245;
        }
        .make-study {
            background: #5865f1;
        }
        </style>
        `
    }
    setup() {
        this.addEvent("click", ".create-study", () => {
            store.commit("CHANGE_MODAL", "CREATE_NEW_STUDY");
        });
    }
    mounted() {
        this.addEvent("click", ".logout", () => {
            localStorage.clear("user");
            new Router().render("/");
        });

        new Profile(document.querySelector(".profile-container"));
        new StudyList(document.querySelector(".study-list-container"));
    }
}