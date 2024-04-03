
const loginContent = document.getElementById('loginForm')
const signupContent = document.getElementById('signupForm')
const rightHeader = document.getElementById('authHeading')
const leftHeader = document.getElementById('activeSignup')
let isSignupClicked = false
signupContent.classList = 'right-flex-hide'

function ToggleAuth() {
    if (!isSignupClicked) {
        rightHeader.innerHTML = "Login "
        leftHeader.innerHTML = "Login"
        signupContent.classList = 'right-flex'
        loginContent.classList = 'right-flex-hide'
        isSignupClicked = true
    }
    else {
      
        rightHeader.innerHTML = "Login"
        leftHeader.innerHTML = "Signup"
        signupContent.classList = 'right-flex-hide'
        loginContent.classList = 'right-flex'
        isSignupClicked = false
    }
}

const signUp = document.getElementById("activeSignup")
signUp.addEventListener('click', ToggleAuth)

const email = document.getElementById("mail")
const pswd = document.getElementById("pswd")

const btn = document.getElementById('loginBtn')

let emailInp;
let pswdInp;

email.addEventListener('blur', (e) => {
    emailInp = e.target.value
})

pswd.addEventListener('blur', (e) => {
    pswdInp = e.target.value
})

btn.addEventListener('click', async() => {
    console.log(emailInp, pswdInp)
 
    if (emailInp && pswdInp) {
        let data = {
            userName: emailInp,
            password: pswdInp
        }
        let res = await fetch("http://localhost:3000/api/login",{
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
        })
        console.log(res)

        if(res.statusText=="OK"){
            window.location.pathname = '/src/quiz/quiz.html' 
        }else{
            document.getElementById("errorText").innerHTML = "Invalid Credentials"
        }  
    }
    else {
        alert("Invalid Email or Password")
    }
})