import Component from "../core/Component.js";
import MakeStudyModal from "./MakeStudyModal.js";

export default class StudyList extends Component {
    template() {
        return `
            <div class="study-list">
                <div class="my-study">🗂 내 스터디</div>
                ${this._state?.studies?.length ? this._state.studies.map(study => {
                    return `<div class="study-items">👉 ${study.name}</div>`
                })
                : 
                "<div class='study-items' style='text-align: center;'>없음</div>"
                }
                <button class="make-study"> 새 알고리즘 스터디 만들기</button>
                <div id="make-study-modal"></div>
            </div>
            <style>
            .my-study {
                padding: 10px 5px; 
                font-size: 1.3em; 
                font-weight: 900;
                border-bottom: 1px solid;
            }
            .study-items {
                margin: 10px 0;
            }
            button.make-study {
                background: #5865f1;
            }
            </style>
        `;
    }
    async setup() {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        let res = await fetch(`http://choco-one.iptime.org:8090/api/study/list`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        let studies = await res.json();
        this.setState({ studies });
    }
    setEvent() {
        this.addEvent("click", ".make-study", () => {
            new MakeStudyModal(this.target.querySelector("#make-study-modal"));
        });
    }
}