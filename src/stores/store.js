import Store from "../core/Store.js";

export const modalStore = new Store({
    state: {
        modal: null,
    },
    mutations: {
        CHANGE_MODAL(state, payload) {
            state.modal = payload;
        },
        CLOSE_MODAL(state) {
            state.modal = null;
        },
    }
});

export const studyStore = new Store({
    state: {
        studyList: [],
        selected: null,
    },
    mutations: {
        ADD_STUDY(state, payload) {
            state.studyList = payload;
        },
        SELECT_STUDY(state, payload) {
            state.selected = payload;
        },
    }
})