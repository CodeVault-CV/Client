export default class Component {
    constructor(target, props) {
        this._target = target;
        this._props = props;
        this._state = {};
        this.setup();
        this.setEvent();
        this.render();
    }
    template() { return ``; }
    setup() {};
    render() {
        this._target.innerHTML = this.template();
        this.mounted();
    }
    mounted() {}
    setEvent() {}
    addEvent(eventType, selector, callback) {
        this._target.addEventListener(eventType, event => {
            if(!this._target.contains(event.target.closest(selector))) return false;
            callback(event);
        });
    }
    setState(newState) {
        this._state = { ...this._state, ...newState };
        this.render();
    }
};