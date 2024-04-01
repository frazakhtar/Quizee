const email = document.getElementById("email")
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

btn.addEventListener('click', () => {
  if (emailInp && pswdInp) {
    window.location.pathname = '/src/quiz/quiz.html'
  }
  else {
    alert("Invalid Email or Password")
  }
})
