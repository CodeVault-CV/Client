export default class Component {
    constructor(target, props) {
        this.target = target;
        this.props = props;
        this.state = {};
        this.setup();
        this.render();
    }
    template() { return ``; }
    setup() {};
    render() {
        this.target.innerHTML = this.template();
        this.mounted();
        requestAnimationFrame(() => this.setEvent());
    }
    mounted() {}
    setEvent() {}
    addEvent(eventType, selector, callback) {
        this.target.addEventListener(eventType, event => {
            if(!this.target.contains(event.target.closest(selector))) return false;
            callback(event);
        });
    }
    setState(newState) {
        this.state = { ...this.state, ...newState };
        this.render();
    }
};