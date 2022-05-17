import Component from "../core/Component.js";
import { studyStore } from "../stores/store.js";

export default class Study extends Component {
    template() {
        let data = studyStore.state.selected;
        return `
        <section>
        ${
            studyStore.state.selected ? 
            `<h1>${data.name}</h1>`
            : 
            "<div class='no-study'>스터디를 선택해주세요</div>"
        }
        </section>
        <style>
        section {
            display: flex;
            height: 100%;
            flex-direction: column;
        }
        .no-study {
            margin: auto;
        }
        </style>
        `
    }
}