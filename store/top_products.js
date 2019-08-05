import Vue from 'vue'

export const state = () => ({
    list: []
});

export const actions = {
    // axios...
    async storeTopRated({ commit }) {
        commit('SET_TOP_PRODUCTS', [
            {
                id: 1,
                name: "test1",
                price: 100,
                slug: "testlink1",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 2,
                name: "test2",
                price: 100,
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 3,
                name: "test3",
                price: 100,
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 4,
                name: "test4",
                price: 100,
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 5,
                name: "test5",
                price: 100,
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            }
        ])
    },
};

export const mutations = {
    SET_TOP_PRODUCTS(state, theData) {
        state.list = theData
    }
};