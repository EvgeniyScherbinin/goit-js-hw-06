const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordInput = loginForm.elements.password;

    if (emailInput.value === '' || passwordInput.value === '') {
        alert('all fields must be filled'); 
    } else {
        const object = {
          email: emailInput.value,
          password: passwordInput.value
        }; 
        console.log(object);
        loginForm.reset();
    };
    
});