<template>
    <div>
        <button class="btn btn-primary" v-on:click="show">Register</button>
        <modal name="register-modal">
            <form action="">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                    </div>
                    <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </form>
        </modal>
    </div>
</template>

<script>
    export default {
        name: "Register",
        methods: {
            show () {
                this.$modal.show('register-modal');
            },
            hide () {
                this.$modal.hide('register-modal');
            }
        }
    }
</script>

<style scoped>

</style>