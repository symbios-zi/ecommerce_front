<template>
    <div class="topnav__container">
        <div class="container-fluid">
        <nav class="navbar navbar-expand-lg">
            <div class="col-md-2">
                <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
                <a class="navbar-brand d-none d-lg-inline-block" href="#">
                    SPA_COMMERCE
                </a>
            </div>
            <div class="col-md-8">
                <b-nav-form>
                    <b-form-input size="md" class="mr-md-2" placeholder="Search"></b-form-input>
                    <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>
            </div>
            <div class="col-md-2">
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