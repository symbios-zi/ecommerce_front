<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item
                            v-for="item in list" v-bind:key="item.id"
                            v-bind:href="item.slug">{{ item.name }}</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "CategoriesNav",
        computed: {
            list () {
                return this.$store.state.categories.list
            }
        }
    }
</script>