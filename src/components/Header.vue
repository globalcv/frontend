<template>
    <div class="hero-head">
        <nav class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        <router-link to="/">
                            <h3 class="logo has-text-green is-size-4">globalcv</h3>
                        </router-link>
                    </a>
                </div>

                <div class="navbar-menu">

                    <div class="navbar-end">
                        <a class="a-menu is-size-7 navbar-item">
                            <router-link to="/">
                                home
                            </router-link>
                        </a>
                        <a class="a-menu is-size-7 navbar-item">
                            <router-link to="/contact">
                                contact
                            </router-link>
                        </a>
                        <a class="a-menu is-size-7 navbar-item">
                            <router-link to="/login">
                                log in
                            </router-link>
                        </a>
                    </div>
                </div>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>