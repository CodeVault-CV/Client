import Component from "../core/Component.js";
import Router from "../core/Router.js";

export default class CreateStudyModal extends Component {
    template() {
        return `
        <div id="create-study-widget">
            <div class="slide">
                <ul>
                    <li>
                        <div class="input-title">새로운 스터디의 이름은 무엇인가요?</div>
                        <p>스터디의 정체성이 드러나도록 정해보세요</p>
                        <input id="study-title"/>
                        <button data-margin="-100%">다음</button>
                    </li>
                    <li>
                        <div class="input-title">새로 생성될 깃허브 리포지토리 이름을 적어주세요</div>
                        <p>스터디를 진행하면서 올리는 코드와 풀이들이 이 곳에 저장될 거에요</p>
                        <input id="study-repo"/>
                        <div style="display: flex;">
                            <button data-margin="0">이전</button>
                            <button data-margin="-200%">다음</button>
                        </div>
                    </li>
                    <li>
                        <div class="input-title">스터디원을 추가해보세요</div>
                        <p>함께 성장해 나갈 스터디원은 누구인가요</p>
                        <input id="study-one"/>
                        <button data-margin="-100%">이전</button>
                    </li>
                </ul>
            </div>
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
        @keyframes zoomin {
            from {
                transform: scale(0);
            }
            to {
                transform: scale(1);
            }
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
            width: calc(100% * 3);
            transition: 0.3s;
            display: flex;
        }
        #create-study-widget li {
            width:calc(100% / 3);
        }
        </style>
        `;
    }
    mounted() {
        document.querySelector("#create-study-widget").addEventListener("click", (event) => {
            if(event.target.nodeName === "BUTTON") {
                document.querySelector("#create-study-widget ul").style.marginLeft = event.target.dataset.margin;
            }
        });
    }
    async makeStudy() {
        const userInfo = JSON.parse(localStorage.getItem("user"));
        try {
            console.log()
            let res = await fetch(`http://choco-one.iptime.org:8090/api/study`, {
                method: "POST",
                headers: { 
                    Authorization: `Bearer ${userInfo.token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    repoName: document.getElementById("study-repo-name").value,
                    studyName: document.getElementById("study-name").value
                })
            });
            if(res.status === 401 ) {
                localStorage.clear("user");
                new Router().render("/");
            }
            document.querySelector(".modal").style.display = "none";
        } catch (error) {
            console.error(error);
        }
    }
};