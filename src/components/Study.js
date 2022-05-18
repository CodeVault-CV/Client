import Component from "../core/Component.js";
import { studyStore, modalStore } from "../stores/store.js";

export default class Study extends Component {
    template() {
        const studyInfo = studyStore.state.selected;
        return `
        <section>
        ${
            studyInfo ? 
            `
            <h1>${studyInfo.name}</h1>
            <h2>스터디원</h2>
            <div class="study-member-wrapper">
            ${studyInfo.members.map(member => {
                return `
                <div class="study-member${member.accepted ? "" : " not-accepted"}">
                    <img src="${member.url}" />
                    <div class="member-name">${member.name}</div>
                </div>
                `
            })}
            <div class="study-member add-member">
                <div class="add-member-skeleton">+</div>
                <div class="member-name">추가하기</div>
            </div>
            `
            : 
            "<h1 class='no-study'>스터디를 선택해주세요</h1>"
            }
            </div>
        </section>
        <style>
        section {
            display: flex;
            width: 70%;
            height: 100%;
            margin: 0 auto;
            flex-direction: column;
        }
        .no-study {
            margin: auto;
        }

        .study-member-wrapper { 
            display: flex; 
            flex-wrap: wrap;
        }
        .study-member {
            width: 100px;
            padding: 10px;
            margin-right: 15px;
            border: solid 1.5px;
            border-radius: 5%;
        }
        .study-member .not-accepted {
            border-color: red;
        }
        .study-member img {
            display: block;
            border-radius: 5%;
            width: 100%;
        }
        .study-member .member-name {
            margin-top: 5px;
            padding: 5px 0;
            text-align: center;
        }
        .add-member:hover {
            cursor: pointer;
            background: #5865f1;
        }
        .add-member-skeleton {
            border-radius: 5%;
            border: solid 1px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            height: 98px;
            text-align: center;
        }
        </style>
        `
    }
    handleAddMember() {
        modalStore.commit("CHANGE_MODAL", "ADD_MEMBER");
    }
    setEvent() {
        if(studyStore.state.selected) {
            this.addEvent(this.target.querySelector(".add-member"), "click", this.handleAddMember);
        }
    }
}