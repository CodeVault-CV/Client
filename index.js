import "./src/components/index.js";

import Main from "./src/pages/Main.js";

const root =  document.getElementById("root");

window.addEventListener("load", async () => {
    root.innerHTML = Main;
});