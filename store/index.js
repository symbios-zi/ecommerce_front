import Vue from 'vue'

export const state = () => ({
});

export const actions = {
    async nuxtServerInit({commit, dispatch}) {
        await dispatch('top_products/storeTopRated');
        await dispatch('categories/storeCategories');
    }
}