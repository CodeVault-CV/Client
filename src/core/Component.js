import { observe } from "./observer.js";

function applyDiff(parent, oldNode, newNode) {
    if(oldNode && !newNode) {
        oldNode.remove();
        return;
    }
    if(!oldNode && newNode) {
        parent.append(newNode);
        return;
    }
    if(isNodeChanged(oldNode, newNode)) { // isNodeChanged는 노드가 변경됐는지 확인해주는 함수
        oldNode.replaceWith(newNode);
        return;
    }

    const oldChildren = Array.from(oldNode.children);
    const newChildren = Array.from(newNode.children);
    const max = Math.max(oldChildren.length, newChildren.length);
    for(let i = 0; i < max; i++) {
        applyDiff(oldNode, oldChildren[i], newChildren[i]);
    }
}

function isNodeChanged(oldNode, newNode) {
    if(oldNode.type !== newNode.type) return true;
    
    const oldAttributes = oldNode.attributes;
    const newAttributes = newNode.attributes;
    if(oldAttributes.length !== newAttributes.length) return true;

    const differentAttribute = Array.from(oldAttributes).find(attribute => {
        const { name } = attribute;
        const oldAttribute = oldNode.getAttribute(name);
        const newAttribute = newNode.getAttribute(name);
        return oldAttribute !== newAttribute;
    });
    if(differentAttribute) return true;

    if(oldNode.children.length === 0 && 
        newNode.children.length === 0 &&
         oldNode.textContent !== newNode.textContent) return true;

    return false;
}

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
    addEvent(eventType, selector, callback) {
        this.target.addEventListener(eventType, event => {
            if(!this.target.contains(event.target.closest(selector))) return false;
            callback(event);
        });
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
        this.mounted();
        this.updated();
    }
};