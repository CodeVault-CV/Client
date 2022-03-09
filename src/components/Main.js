import Component from "../core/Component.js";

export default class Main extends Component {
    template() {
        return `
        <div id="main-container">
        
        </div>
        <style>
        #main-container {
            padding: 10px;
            border-radius: 18px;
            background: hsl(0, 0%, 100%);
            max-width: 1200px;
            width: 85%;
            height: 90%;
        }
        </style>
        `;
    }
};