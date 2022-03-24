import { observable } from "./observer.js";

export default class Store {
    #state;
    #mutations;
    state = {};
    constructor({ state, mutations }) {
        this.#state = observable(state);
        this.#mutations = mutations;

        Object.keys(state).forEach(key => {
            Object.defineProperty(
              this.state,
              key,
              { get: () => this.#state[key] },
            );
        });
    }
    commit(action, payload) {
        this.#mutations[action](this.#state, payload);
    }
}