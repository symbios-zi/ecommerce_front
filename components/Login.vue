<template>
    <div>
        <button class="btn-primary btn" v-on:click="show">Login</button>
        <modal name="login-modal" height="auto">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Auth</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
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
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </modal>
    </div>

</template>

<script>
    export default {
        name: "Login",
        methods: {
            show () {
                this.$modal.show('login-modal');
            },
            hide () {
                this.$modal.hide('login-modal');
            }
        }
    }
</script>

<style scoped>
    .modal {
        padding: 20px;
    }
</style>