import Store from "./core/Store.js";

export const store = new Store({
    state: {
        modal: null
    },
    mutations: {
        CHANGE_MODAL(state, payload) {
            state.modal = payload;
        }
    }
});