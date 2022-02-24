import "./src/components/GithubLogin.js";

const root =  document.getElementById("root");

window.addEventListener("load", async () => {
    root.append(document.createElement("github-login"));

    const code = new URLSearchParams(location.search).get("code");
    if(code) {
        const res = await fetch(`http://choco-one.iptime.org:8090/api/token?code=${code}`);
        const { access_token } = await res.json();

        console.log(access_token);
    }
});