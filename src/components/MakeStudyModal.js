import Component from "../core/Component.js";

import modal from "./template/modal.js";

export default class MakeStudyModal extends Component {
    template() {
        return modal(`
        <div id="make-study-widget">
            <div class="input-title">스터디 이름</div>
            <input />
            <div class="input-title">깃허브에 저장될 repository 이름</div>
            <input />
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
        btn.removeEventListener("click", this.makeStudy);
        btn.addEventListener("click", this.makeStudy);
    }
    makeStudy() {
        console.log("Hello");
    }
};