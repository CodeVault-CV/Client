import { observe } from "./observer.js";
import applyDiff from "./diff.js";

export default class Component {
    constructor(target, props) {
        this.target = target;
        this.props = props;
        this.state = {};
        this.setup();
        observe(() => {
            this.render();
            this.mounted();
        });
        requestAnimationFrame(() => this.setEvent());
    }
    template() { return ``; }
    setup() {};
    render() { 
        const oldNode = this.target;
        const newNode = this.target.cloneNode(true);
        newNode.innerHTML = this.template();
        
        const oldChildren = Array.from(oldNode.children);
        const newChildren = Array.from(newNode.children);
        const max = Math.max(oldChildren.length, newChildren.length);
        for(let i = 0; i < max; i++) {
            applyDiff(oldNode, oldChildren[i], newChildren[i]);
        }
    }
    mounted() {}
    updated() {}
    // addEvent(eventType, selector, callback) {
    //     this.target.addEventListener(eventType, event => {
    //         if(!this.target.contains(event.target.closest(selector))) return false;
    //         callback(event);
    //     });
    // }
    addEvent(target, eventType, callback) {
        target.removeEventListener(eventType, callback);
        target.addEventListener(eventType, callback);
    }
    setEvent() {}
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
        this.mounted();
        this.updated();
    }
};