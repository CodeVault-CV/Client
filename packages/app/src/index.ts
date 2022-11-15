import "./index.css";

const renderRoot = (root: HTMLElement) => {
  root.innerHTML = "hello world!";
}

renderRoot(document.getElementById("root") as HTMLElement);