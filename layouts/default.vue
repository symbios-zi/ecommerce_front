<template>
    <div>
        <header>
            <TopMenuNav />
            <CategoriesNav/>
        </header>

        <main>
            <div class="container-fluid">
                <div class="row">
                <section class="col-md-12">
                    <nuxt />
                </section>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    import TopMenuNav from "../components/TopMenuNav";
    import CategoriesNav from "../components/CategoriesNav";
    export default {
        components: {CategoriesNav, TopMenuNav}
    }
</script>