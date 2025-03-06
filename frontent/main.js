const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');



loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  const users = JSON.parse(localStorage.getItem('users')) || [];
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
   
    loginForm.reset();
    window.location.href = 'dashboard.html'; // Redirect to dashboard page
  } else {
    message.innerHTML = "Invalid username or password"
    message.classList.add('show');
    setTimeout(function() {
      message.classList.remove('show');
     
    }, 3000);
    loginForm.username.focus()
    loginForm.reset(); // Reset the form
    loginForm.username.style.borderColor = 'red'; // Set border color to red
    loginForm.password.style.borderColor = 'red'; // Set border color to red
  }
});

// Add event listeners to remove the red border when the user enters new input
loginForm.username.addEventListener('input', () => {
  loginForm.username.style.borderColor = '';
});
loginForm.password.addEventListener('input', () => {
  loginForm.password.style.borderColor = '';
});


signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = signupForm['signup-username'].value;
  const password = signupForm['signup-password'].value;
  const confirmPassword = signupForm['confirm-password'].value;

  if (password !== confirmPassword) {
    message.innerHTML = "Password doesn't not matched"
    message.classList.add('show');
    setTimeout(function() {
      message.classList.remove('show');
    
    }, 3000);
    return;
  }

  const users = JSON.parse(localStorage.getItem('users')) || [];
 

  if (users.some(u => u.username === username)) {
    message.innerHTML="Username already taken"
    message.classList.add('show');
    setTimeout(function() {
      message.classList.remove('show');
    }, 3000);
    return;
  }

  users.push({ username, password });
  localStorage.setItem('users', JSON.stringify(users));
  alert(`Welcome, ${username}!`);
  signupForm.reset();
});

function toggleLogin(){
  document.querySelector("#login-form").style.display="block"
document.querySelector("#signup-form").style.display="none"
loginForm.username.focus()
}
function toggleSignUp() {
  document.querySelector("#login-form").style.display = "none"
  document.querySelector("#signup-form").style.display = "block"
  signupForm['signup-username'].focus()
}
window.addEventListener("load",()=>{
  loginForm.username.focus();
  setTimeout(()=>{
    loginForm.style.opacity="1"
  },500)
  
})


let showHide = document.querySelector(".show-hide")

showHide.addEventListener("click",()=>{
  if(showHide.innerHTML == "show")
  {
    loginForm.password.setAttribute("type","text")
    showHide.innerHTML="hide"
  }
  else{
    loginForm.password.setAttribute("type","password")
    showHide.innerHTML="show"
  }
})

