import Router from "../core/Router.js";
import Component from "../core/Component.js";

import Profile from "./Profile.js";

export default class Sidebar extends Component {
    template() {
        return `
        <nav class="sidebar">
            <div class="logo">AL<span>GONG</span></div>
            <div class="profile-container"></div>
            <button class="logout">Sign out</button>
        </nav>
        <style>
        nav {
            background: #1F2225;
            display: flex;
            flex-direction: column;
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
            width: 100%;
            margin: 5px 0;
            border: none;
            border-radius: 10px;
            padding: 8px 10px;
        }
        
        </style>
        `
    }
    async mounted() {
        const userInfo = JSON.parse(localStorage.getItem("user"));

        try {
            let res = await fetch(`http://choco-one.iptime.org:8090/api/user/profile?name=${userInfo.name}`, {
                headers: { Authorization: `Bearer ${userInfo.token}` }
            });
            if(res.status === 401 ) {
                localStorage.clear("user");
                new Router().render("/");
            }
            let profile = await res.json();
            new Profile(document.querySelector(".profile-container"), { ...profile });
        } catch (error) {
            console.error(error);
        }
    }
    setEvent() {
        this.addEvent("click", ".logout", () => {
            localStorage.clear("user");
            new Router().render("/");
        });
    }
}