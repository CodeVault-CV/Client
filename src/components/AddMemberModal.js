import Component from "../core/Component.js";
import { studyStore } from "../stores/store.js";

import { addMember } from "../controller/study.js";

export default class AddMemberModal extends Component {
    template() {
        return `
        <div id="add-member-container">
            <p>새로 추가할 스터디원을 입력해주세요</p>
            <input />
            <button>추가하기</button>
        </div>
        <style>
        #add-member-container {
            background: whitesmoke;
            color: black;
            border-radius: 10px;
            width: 500px;
            padding: 20px
        }
        #add-member-container p {
            margin: 5px 0;
            font-weight: 600;
            font-size: 20px;
            text-align: center;
        }
        #add-member-container input {
            display: block;
            width: 70%;
            margin: 25px auto;
        }
        #add-member-container button {
            width: 30%;
            display: block;
            margin: auto;
        }
        </style>
        `
    }
    handleClick = async () => {
        const memberName = this.target.querySelector("input").value;
        const succeeded = await addMember({memberName, studyId: studyStore.state.selected.studyId});
        if(succeeded) console.log("added");
        else console.log("failed");
    }
    setEvent() {
        this.addEvent(this.target.querySelector("button"), "click", this.handleClick);
    }
}