import Component from "../core/Component.js";

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
    async mounted() {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        let res = await fetch(`http://choco-one.iptime.org:8090/api/study/list`, {
            headers: { Authorization: `Bearer ${userInfo.token}` }
        });
        let studies = await res.json();
        this.setState({ studies });
    }
}