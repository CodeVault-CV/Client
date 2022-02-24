const template_githubLogin = document.createElement("template");
template_githubLogin.innerHTML = `
<a class="github-login-container" href="https://github.com/login/oauth/authorize?client_id=e1f73f73ee1f2865bcd5&scope=repo%20user">
    <img src="./src/images/github.png" />
    <span>깃허브로 로그인</span>
</a>
<style>
    .github-login-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: seagreen;
        user-select: none;
        text-decoration: none;
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
    }
}

customElements.define("github-login", GithubLogin);