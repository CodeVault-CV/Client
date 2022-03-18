import Component from "../core/Component.js";
import Router from "../core/Router.js";
import Profile from "./Profile.js";

export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
            <div id="sidebar">
                <div class="logo">AL<span>GONG</span></div>
                <div id="profile"></div>
            </div>
            <div id="study"></div>
        </div>
        <style>
        #main-container {
            display: flex;
            border-radius: 18px;
            background: hsl(0, 0%, 100%);
            max-width: 1200px;
            max-height: 1000px;
            width: 85%;
            height: 85%;
        }

        #sidebar {
            display: flex;
            flex-direction: column;
            padding: 20px 30px;
            width: 220px;
        }

        .logo {
            font-family: 'Orbitron', sans-serif;
            text-align: center;
            font-size: 30px;
            user-select: none;
        }
        .logo span {
            color: cornflowerblue;
        }
        
        #study {
            width: 100%;
            background-color: #F0F0F0;
            border-radius: 0 18px 18px 0;
        }
        </style>
        `;
    }
    async mounted() {
        const userInfo = JSON.parse(localStorage.getItem("user"));

        try {
            let res = await fetch(`http://choco-one.iptime.org:8090/api/user/profile?name=${userInfo.name}`, {
                headers: {
                    Authorization: `Bearer ${userInfo.token}`
                }
            });
            if(res.status === 401 ) {
                localStorage.clear("user");
                new Router().render("/");
            }
            let profile = await res.json();
            new Profile(document.getElementById("profile"), { ...profile });
        } catch (error) {
            console.error(error);
        }
    }
};