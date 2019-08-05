<template>
    <div class="topnav__container">
        <div class="container-fluid">
        <!-- example 6 - center on mobile -->
        <nav class="navbar navbar-expand-lg">
            <div class="d-flex flex-grow-1">
                <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
                <a class="navbar-brand d-none d-lg-inline-block" href="#">
                    SPA_COMMERCE
                </a>
                <a class="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                    <img src="//placehold.it/40?text=LOGO" alt="logo">
                </a>
                <div class="w-100 text-right">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </div>
            <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                <ul class="navbar-nav ml-auto flex-nowrap">
                    <li class="nav-item">
                        <Login/>
                    </li>
                    <li class="nav-item">
                        <Register/>
                    </li>
                </ul>
            </div>
        </nav>
    </div>

    </div>
</template>

<script>
    import Login from "./Login";
    import Register from "./Register";
    export default {
        name: "TopMenuNav",
        components: {Register, Login}
    }
</script>

<style scoped>
    .topnav__container {
        background: #f0f0f0;
    }

    .nav-item {
        margin-right: 5px;
    }
</style>