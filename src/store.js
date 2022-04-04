import Store from "./core/Store.js";

export const store = new Store({
    state: {
        modal: null,
        studyList: [],
        selected: null
    },
    mutations: {
        CHANGE_MODAL(state, payload) {
            state.modal = payload;
        },
        CLOSE_MODAL(state) {
            state.modal = null;
        },
        ADD_STUDY(state, payload) {
            state.studyList = payload;
        },
        SELECT_STUDY(state, payload) {
            state.selected = payload;
        }
    }
});