import App from "./src/components/App.js";

const root = document.getElementById("root");

window.addEventListener("load", async () => {
    // const code = new URLSearchParams(location.search).get("code");
    // if(code) {
    //     root.innerHTML = "로그인 완료";
    //     let res = await fetch(`http://choco-one.iptime.org:8090/api/user/login?code=${code}`);
    //     let userID = await res.text();
    //     console.log(userID);
    // }
    // else new Main(root);
    new App(root);
}); 