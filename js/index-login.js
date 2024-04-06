import { User } from "./class/user.js";

const user = User()
const email_input = document.querySelector('username')
const password_input = document.querySelector('password')

document.querySelector('login-button').addEventListener('click', (event)=> {
    event.preventDefault()
    const email = email_input.value;
    const password = password_input.value;

    user.login(email, password).then(json => {
        alert("Login ok")
    }) .catch(error => {
        alert(error)
    })
})
