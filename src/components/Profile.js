import Component from "../core/Component.js";

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
        this.state = {
            url: "../images/github.png",
            name: "Anonymous"
        }
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
            this.setState({ ...profile });
        } catch (error) {
            console.error(error);
        }
    }
}