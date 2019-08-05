<template>
    <div class="top-products__container">
        <div>
            <div class="top-products__title">
                <a href="/catalog/top_products" class="top-products__link">Top products</a>
            </div>
        </div>
        <div>
            <carousel :navigationEnabled="true" :perPageCustom="[[768, 3], [1024, 4]]">
                <slide v-for="top_product in top_products" v-bind:key="top_product.id">
                    <figure>
                        <a href="#">
                            <img v-bind:src="top_product.image" v-bind:alt="top_product.name">
                        </a>
                        <div class="top-product__description">
                            <a v-bind:href="top_product.slug">
                                {{ top_product.name }}
                            </a>
                        </div>
                    </figure>
                </slide>
            </carousel>
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            top_products () {
                return this.$store.state.top_products.list
            }
        }
    }
</script>

<style scoped>
    figure {
        padding: 10px
    }

    .top-products__container {
        margin-top: 20px;
    }

    .top-products__title {
        text-transform: uppercase;
        font-size: 20px;
        font-weight: bold;
        color: #d91a73;
    }
</style>