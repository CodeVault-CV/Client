import Component from "../core/Component.js";
import { modalStore } from "../stores/store.js";

export default class CreateStudyModal extends Component {
    template() {
        return `
        <div id="create-study-widget">
            <form class="slide">
                <ul>
                    <li>
                        <div class="input-title">새로운 스터디의 이름은 무엇인가요?</div>
                        <p>스터디의 정체성이 드러나도록 정해보세요</p>
                        <input id="study-title"/>
                        <div class="button-box">
                            <button class="title" type="button" data-margin="-100%" disabled>다음</button>
                        </div>
                    </li>
                    <li>
                        <div class="input-title">새로 생성될 깃허브 리포지토리 이름을 적어주세요</div>
                        <p>스터디를 진행하면서 올리는 코드와 풀이들이 이곳에 저장될 거에요</p>
                        <input id="study-repo"/>
                        <div class="button-box">
                            <button class="submit-study" disabled>제출</button>
                            <button type="button" data-margin="0">이전</button>
                        </div>
                    </li>
                </ul>
            </form>
        </div>
        <style>
        #create-study-widget {
            background: whitesmoke;
            color: black;
            border-radius: 10px;
            width: 500px;
            padding: 20px;
            animation-duration: 0.3s;
            animation-name: zoomin;
        }
        @keyframes zoomin {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
        }

        #create-study-widget .input-title {
            margin: 5px 0;
            font-weight: 600;
            font-size: 20px;
            text-align: center;
        }
        #create-study-widget p {
            text-align: center;
            color: gray;
        }
        #create-study-widget input {
            display: block;
            width: 97%;
            margin: 5px 0 15px;
        }
        #create-study-widget button {
            width: 23%;
        }
        #create-study-widget .button-box {
            display: flex;
            justify-content: space-between;
            flex-direction: row-reverse;
        }

        .slide {
            position: relative;
            overflow: hidden;
        }
        #create-study-widget ul,li { 
            margin: 0;
            padding: 0;
            list-style: none;
        }
        #create-study-widget ul {
            margin-left: 0;
            width: calc(100% * 2);
            transition: 0.3s;
            display: flex;
        }
        #create-study-widget li {
            width:calc(100% / 2);
        }
        </style>
        `;
    }
    setEvent() {
        document.getElementById("create-study-widget").addEventListener("click", (event) => {
            if(event.target.nodeName === "BUTTON") document.querySelector("#create-study-widget ul").style.marginLeft = event.target.dataset.margin;
        });
        document.getElementById("study-title").addEventListener("keyup", (event) => {
            const btn = this.target.querySelector("button.title");
            if(event.target.value.length > 0) btn.disabled = false;
            else btn.disabled = true;
        });
        document.getElementById("study-repo").addEventListener("keyup", (event) => {
            const regExp = /^[A-Za-z_-]*$/;
            const btn = this.target.querySelector("button.submit-study");
            if(event.target.value && regExp.test(event.target.value)) btn.disabled = false;
            else btn.disabled = true;
        });
        document.querySelector("#create-study-widget form").addEventListener("submit", (event) => {
            event.preventDefault();
            const studyName = event.target.querySelector("#study-title").value;
            const repoName = event.target.querySelector("#study-repo").value;
            modalStore.commit("CHANGE_MODAL", "LOADING");
            this.makeStudy(studyName, repoName);
        });     
    }
    async makeStudy(studyName, repoName) {
        // const { token } = JSON.parse(localStorage.getItem("user"));
        // await createNewStudy(studyName, repoName, token);
        // let studyList = await getStudyList(token);
        modalStore.commit("CLOSE_MODAL");
        // store.commit("ADD_STUDY", studyList);
    }
};