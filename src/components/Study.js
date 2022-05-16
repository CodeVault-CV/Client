import Component from "../core/Component.js";
import { store } from "../store.js";

import { getStudyInfo } from "../controller/study.js";

export default class Study extends Component {
    async mounted() {
        if(!store.state.selected) {
            this.target.innerHTML = `
            <section>
            스터디를 선택해주세요
            </section>
            <style>
            section {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            </style>
            `
        }
        else {
            store.commit("CHANGE_MODAL", "LOADING");
            const studyInfo = await getStudyInfo(store.state.selected);
            this.target.innerHTML = `
            <section>
            ${JSON.stringify(studyInfo)}
            </section>
            `
            store.commit("CLOSE_MODAL");
        }
    }
}