const template_githubLogin = document.createElement("template");
template_githubLogin.innerHTML = `
<div class="github-login-container">
    <img src="./src/images/github.png" />
    <span>Github로 로그인</span>
</div>
<style>
    .github-login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: seagreen;
        user-select:none;
        border-radius: 20px;
    }
    .github-login-container:hover {
        cursor: pointer;
    }
    img {
        width: 50px;
        object-fit: contain;
    }
    span {
        color: #FEFEFE;
        font-size: 20px;
    }
</style>
`;


class GithubLogin extends HTMLElement {
    constructor() {
        super();
    }
    render() {
        const shadow = this.attachShadow({mode: "closed"});
        shadow.append(template_githubLogin.content.cloneNode(true));
    }
    connectedCallback() {
        this.render();
        this.addEventListener("click", () => {
            location.href = "https://github.com/login/oauth/authorize?client_id=e1f73f73ee1f2865bcd5&scope=repo%20user";
        });
    }
}

customElements.define("github-login", GithubLogin);