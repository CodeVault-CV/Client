import Component from "../core/Component.js";
import Router from "../core/Router.js";

import modal from "./template/modal.js";

export default class MakeStudyModal extends Component {
    template() {
        return modal(`
        <div id="make-study-widget">
            <div class="input-title">스터디 이름</div>
            <input id="study-name"/>
            <div class="input-title">깃허브에 저장될 repository 이름</div>
            <input id="study-repo-name"/>
            <div class="input-title">스터디원</div>
            <input />
            <button class="make-study-btn">스터디 만들기!</button>
        </div>
        <style>
        #make-study-widget {
            background: whitesmoke;
            color: black;
            border-radius: 10px;
            width: 500px;
            padding: 20px;
        }
        #make-study-widget .input-title {
            margin: 5px 0;
            font-weight: 600;
            font-size: 18px;
        }
        #make-study-widget input {
            display: block;
            width: 97%;
            margin: 5px 0 15px;
        }
        </style>
        `, true);
    }
    setup() {
        this.state = { studyName: "", repoName: "", members: [] };
    }
    setEvent() {
        const btn = this.target.querySelector(".make-study-btn");
        btn.addEventListener("click", this.makeStudy);
    }
    async makeStudy() {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        try {
            console.log()
            let res = await fetch(`http://choco-one.iptime.org:8090/api/study`, {
                method: "POST",
                headers: { 
                    Authorization: `Bearer ${userInfo.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    repoName: document.getElementById("study-repo-name").value,
                    studyName: document.getElementById("study-name").value
                })
            });
            if(res.status === 401 ) {
                localStorage.clear("user");
                new Router().render("/");
            }
            document.querySelector(".modal").style.display = "none";
        } catch (error) {
            console.error(error);
        }
    }
};