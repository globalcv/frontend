<template>
    <div>
        <br />
        <center><h2 class="page-title title is-2">Signup</h2></center>
        <hr>
        <div class="text-sm rounded w-full max-w-md mx-auto">
<!--            <transition-group name="login-error-animate" enter-active-class="animate bounceIn" leave-active-class="animate bounceOut">-->
<!--                <div class="notification is-danger" v-if="errors.has('Terms of Service')" :key="errors.has('Terms of Service')">-->
<!--                    <button class="delete" @click="errors.clear()"></button>-->
<!--                    {{ errors.first('Terms of Service') }}-->
<!--                </div>-->
<!--                <div class="notification is-danger" v-if="error" :key="error">-->
<!--                    <button class="delete" @click="error = null"></button>-->
<!--                    {{ error }}-->
<!--                </div>-->
<!--            </transition-group>-->
        </div>
<!--        <div class="check_mark" v-if="success">-->
<!--            <div class="sa-icon sa-success animate">-->
<!--                <span class="sa-line sa-tip animateSuccessTip"></span>-->
<!--                <span class="sa-line sa-long animateSuccessLong"></span>-->
<!--                <div class="sa-placeholder"></div>-->
<!--                <div class="sa-fix"></div>-->
<!--            </div>-->
<!--        </div>-->
        <form id="signup" class="font-sans text-sm rounded w-full max-w-md mx-auto my-8 px-8 pt-6 pb-8" @submit.prevent="signup">
            <div class="field">
                <label class="label no-select">Email</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" v-on:keyup.enter="signup">
                    <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
                </div>
<!--                <p class="help is-danger" v-if="errors.has('email')">{{ errors.first('email') }}</p>-->
            </div>
            <div class="field">
                <label class="label no-select">Password</label>
                <div class="control has-icons-left">
                    <input class="input is-rounded" type="password" id="password"  placeholder="Password" name="password" v-on:keyup.enter="signup">
                    <span class="icon is-small is-left">
            <i class="fas fa-key"></i>
          </span>
                </div>
<!--                <p class="help is-danger" v-if="errors.has('password')">{{ errors.first('password') }}</p>-->
            </div>
            <div class="field">
                <div class="control">
                    <label class="checkbox no-select">
                        <input type="checkbox"  name="Terms of Service">
                        I agree to the <router-link to="">terms and conditions</router-link>
                    </label>
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button id="signup-btn" class="button" type="submit">Sign Up</button>
            </div>
        </form>

        <br><br><br>

        <!-- Footer -->
        <gcv_footer></gcv_footer>

    </div>
</template>

<script>
    import gcv_footer from '@/components/Footer'

    export default {
        name: "Signup",
        components: {
            gcv_footer
        },
        data: function () {
            return {
                user: {
                    email: null,
                    password: null
                },
                error: null,
                success: null
            }
        },
        methods: {
            signup() {
                let self = this
                self.error = null
                let signupBtn = document.getElementById('signup-btn')

                // self.$validator.validateAll().then((result) => {
                //     if (result) {
                        signupBtn.classList.add('is-loading')
                        fetch(`${self.apiUrl}/users`, {
                            method: 'POST',
                            credentials: 'same-origin',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(self.user)
                        }).then(function (response) {
                            return response.json()
                        }).then(function (data) {
                            if (data.message.toString() === 'Unable to create user') {
                                self.error = "Looks like we're experiencing some issues. Please try refreshing the page."
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            } else if (data.message.toString() === 'Username cannot contain symbols') {
                                self.error = data.message.toString()
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            } else if (data.message.toString() === 'Password must contain at least one symbol') {
                                self.error = data.message.toString()
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            } else if (data.message.toString() === 'Password must contain at least one number') {
                                self.error = data.message.toString()
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            } else if (data.message.toString() === 'Password must contain at least one capital letter') {
                                self.error = data.message.toString()
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            } else if (data.message.toString() === 'User ' + self.user.username + ' created' && data.status === 200) {
                                self.success = true
                                self.$store.dispatch('authenticate', data)
                                setTimeout(function () {
                                    self.$router.replace({name: 'home'})
                                }, 1070)
                            } else {
                                self.error = 'Well this is embarrassing...do you mind refreshing the page?'
                                setTimeout(function () {
                                    signupBtn.classList.remove('is-loading')
                                }, 350)
                            }
                        }).catch(err => {
                            self.error = err.toString()
                        })
                    }
            //     })
            // }
        },
    }
</script>

<style scoped>

</style>