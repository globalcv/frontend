import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userId: null,
        username: null,
        email: null,
        emailconfirmed: null,
        rememberMe: null
    },
    mutations: {
        authenticateUser (state, user) {
            state.userId = user.userId
            state.username = user.username
            state.email = user.email
            state.emailconfirmed = user.emailconfirmed
            state.rememberMe = user.rememberMe
        },
        logoutUser (state) {
            state.userId = null
            state.username = null
            state.email = null
            state.emailconfirmed = null
            state.rememberMe = null
        }
    },
    actions: {
        setSessionExpirationTimer ({ dispatch }) {
            if (this.state.rememberMe) {
                setTimeout(() => {
                    dispatch('tryRefreshToken')
                }, 900000)
            } else {
                setTimeout(() => {
                    dispatch('logout')
                }, 900000)
            }
        },
        authenticate ({ commit, dispatch }, authData, remember) {
            // Mutate the state's values
            commit('authenticateUser', {
                userId: authData.user.ID,
                username: authData.user.username,
                email: authData.user.email,
                emailconfirmed: authData.user.emailconfirmed,
                rememberMe: remember
            })
            console.log(remember)
            // Set the session expiration time to 15 mins
            dispatch('setSessionExpirationTimer')
        },
        logout ({ commit }) {
            // Send logout request to server, invalidate session
            fetch(`http://127.0.0.1:8080/v1beta/u/${this.state.userId}/logout`, {
                method: 'get',
                credentials: 'include'
            }).then(function (response) {
                return response.json()
            }).then(function (data) {
                console.log(data.message)
                // Mutate the state's values
                commit('logoutUser')
                // Remove all localStorage items
                if (localStorage.getItem('lastFilterSelected')) {
                    localStorage.removeItem('lastFilterSelected')
                }
            }).catch(err => {
                console.error(err)
            })
        },
        tryAutoLogin ({ commit, dispatch }) {
            function getCookieValue (name) {
                var cookie = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)')
                return cookie ? cookie.pop() : ''
            }
            var userCookie = getCookieValue('user')
            if (userCookie) {
                // Grab just the body (middle section) of the JWT
                const tokenBody = userCookie.split(/\./)[1]
                // Un base64 it (using the Java 8 Base64 class)
                const parsedToken = JSON.parse(atob(tokenBody))
                // Mutate the state's values
                commit('authenticateUser', {
                    userId: parsedToken.sub,
                    username: parsedToken.username,
                    email: parsedToken.email,
                    emailconfirmed: parsedToken.emailconfirmed
                })
                // Set the session expiration time from NOW to 15 mins
                dispatch('setSessionExpirationTimer')
            }
        },
        tryRefreshToken ({ dispatch }) {
            fetch(`http://127.0.0.1:8080/u/${this.state.userId}/refresh`, {
                method: 'get',
                credentials: 'include'
            }).then(function (response) {
                return response.json()
            }).then(function (data) {
                // We got a response from the API
                console.log(data)
            }).catch(err => {
                console.error(err)
                dispatch('logout')
            })
        }
    },
    getters: {
        isAuthenticated (state) {
            return state.userId !== null
        }
    }
})
