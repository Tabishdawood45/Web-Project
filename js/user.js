import { User } from "./class/user.js"

const login_link_a = document.querySelector('a#login-link')

const joinus = document.querySelector('#join-us')

const user = new User()

if (user.isLoggedIn) {
    login_link_a.innerHTML = "Logout"
    login_link_a.href = "logout.html"

    
} else {
    login_link_a.innerHTML = "Login"
    login_link_a.href = "login.html"

    joinus.innerHTML = "Join Us Now !"
}

