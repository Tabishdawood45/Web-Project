import {User} from "./class/user.js";

const user = new User()
const email_input = document.querySelector('#username')
const password_input = document.querySelector('#password')

document.querySelector('#login-button').addEventListener('click', (event)=> {
    event.preventDefault()
    const email = email_input.value;
    const password = password_input.value;

    user.login(email, password).then(user => {
        alert("Login successfull!")
        console.log(user)
    }).catch(error => {
        alert(error)
    })
})
