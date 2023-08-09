import { createStore } from "vuex";

const store = createStore({
    state: {
            pagination: {
                current: 1,
                total: 4,
            },
            search: {
                title: ''
            }
    },
    mutations: {
            paginationCurrent(state, value) {
                state.pagination.current = value;
            },
            paginationTotal(state, value) {
                state.pagination.total = value;
            },
            searchTitle(state, value) {
                state.search.title = value;
            },
    },
    actions: {
        setPaginationCurrent({commit}, value) {
            commit('paginationCurrent', value);
        },
        setPaginationTotal({commit}, value) {
            commit('paginationTotal', value);
        },
        setSearchTitle({commit}, value) {
            commit('searchTitle', value);
        },

    },

    getters: {
            paginationCurrent(state) {
                return state.pagination.current;
            },

            paginationTotal(state) {
                return state.pagination.total; 
            },
            searchTitle(state) {
                return state.search.title;
            }
    }

})

export default store;