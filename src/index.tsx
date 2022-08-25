import React from "react";
import ReactDOM from "react-dom/client";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

dayjs.extend(relativeTime);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
