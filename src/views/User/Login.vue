<template>
    <section class="hero is-primary is-fullheight">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <div class="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action="" class="box">
                            <div class="field">
                                <label for="" class="label">Email</label>
                                <div class="control has-icons-left">
                                    <input type="email" placeholder="svandy@gmail.com" class="input" required>
                                    <span class="icon is-small is-left">
                                         <i class="fa fa-envelope"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="label">Password</label>
                                <div class="control has-icons-left">
                                    <input type="password" placeholder="hunter2" class="input" required>
                                    <span class="icon is-small is-left">
                                      <i class="fa fa-lock"></i>
                                    </span>
                                </div>
                            </div>
                            <div class="field">
                                <label for="" class="checkbox">
                                    <input type="checkbox">
                                    Remember me
                                </label>
                            </div>
                            <div class="field">
                                <button class="btn has-mustard-bg is-size-7 a-menu">
                                    Login
                                </button>
                            </div>
                        </form>

                        <a>Forgot password?</a>
                        <a><router-link to="/register">Register</router-link></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>