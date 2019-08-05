<template>
    <div>
        <header>
            <TopMenuNav />
        </header>
        <main>
            <div class="container-fluid">
                <div class="row">
                <aside class="col-md-3">
                    <nav>
                        <div class="title">Catalog
                            <span class="oi oi-menu"></span>
                        </div>
                        <ul>
                            <li>
                                <a href="#">First category</a>
                            </li>
                            <li>
                                <a href="#">Second category</a>
                            </li>
                            <li>
                                <a href="#">Third category</a>
                            </li>
                            <li>
                                <a href="#">Fourth category</a>
                            </li>
                            <li>
                                <a href="#">Five category</a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <section class="col-md-9">
                    <nuxt />
                </section>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
    import TopMenuNav from "../components/TopMenuNav";
    export default {
        components: {TopMenuNav}
    }
</script>