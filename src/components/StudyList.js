import Component from "../core/Component.js";;
import { store } from "../store.js";

export default class StudyList extends Component {
    template() {
        return `
            <div class="study-list">
                <div class="my-study">🗂 내 스터디</div>
                ${store.state.studyList.length ? store.state.studyList.map(study => {
                    return `<div class="study-items study">👉 ${study.name}</div>`
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
                margin: 10px 0;
            }
            </style>
        `;
    }
}