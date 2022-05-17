import Component from "../core/Component.js";
import { studyStore, modalStore } from "../stores/store.js";

import { getStudyList, getStudyInfo } from "../controller/study.js";

export default class StudyList extends Component {
    template() {
        return `
            <div class="study-list">
                <div class="my-study">🗂 내 스터디</div>
                ${studyStore.state.studyList.length ? studyStore.state.studyList.map(study => {
                    return `<div class="study-items" id="${study.studyId}">▶ ${study.name}</div>`
                }).join("")
                : 
                "<div class='study-items' style='text-align: center;'>없음</div>"
                }
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
                margin: 5px 0;
                padding: 5px 0;
                user-select: none;
                cursor: pointer;
                border-radius: 5px;
            }
            .study-items:hover {
                background: gray;
            }
            </style>
        `;
    }
    setup() {
        requestAnimationFrame(async () => {
            const studyList = await getStudyList();
            studyStore.commit("ADD_STUDY", studyList);
        })
    }
    async handleStudyClick(event) {
        if(event.target.className === "study-items") {
            modalStore.commit("CHANGE_MODAL", "LOADING");
            const studyInfo = await getStudyInfo(event.target.id);
            studyStore.commit("SELECT_STUDY", studyInfo);
            modalStore.commit("CLOSE_MODAL");
        }
    }
    setEvent() {
        const studyList = this.target.querySelector(".study-list");
        this.addEvent(studyList, "click", this.handleStudyClick);
    }
}