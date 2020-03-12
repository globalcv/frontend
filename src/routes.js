import Home from './components/Home'
import Contact from './components/Contact'
import User from './components/User/User'
import Register from './components/User/Register'
import Login from './components/User/Login'

export const routes = [
    { path: '*', redirect: "/" },
    { name: 'home', path: '/', component: Home},
    { name: 'contact', path: '/contact', component: Contact },
    { name: 'register', path: '/register', component: Register },
    { name: 'login', path: '/login', component: Login },
    { name: 'user', path: '/user', component: User }
]