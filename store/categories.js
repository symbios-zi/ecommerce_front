
export const state = () => ({
    list: []
});

export const actions = {
    // axios...
    async storeCategories({ commit }) {
        commit('SET_CATEGORIES', [
            {
                id: 1,
                name: "category1",
                slug: "testlink1",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 2,
                name: "category2",
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 3,
                name: "category3",
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            },
            {
                id: 4,
                name: "category4",
                slug: "testlink2",
                image: "https://placeimg.com/200/250/any"
            }
        ])
    },
};

export const mutations = {
    SET_CATEGORIES(state, theData) {
        state.list = theData
    }
};