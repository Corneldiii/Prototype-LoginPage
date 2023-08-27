document.addEventListener('DOMContentLoaded', function() {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const buttonSubmit = document.getElementById('button-submit');
    const usernameMessage = document.querySelector('.username-message');
    const passwordMessage = document.querySelector('.password-message');

    buttonSubmit.addEventListener('click', function() {
        username.value = '';
        password.value = '';
        usernameMessage.textContent = ''; // Clear the message
    });

    username.addEventListener('input', function() {
        const email = username.value;

        if (email.includes('@')) {
            usernameMessage.textContent = '';
        } else {
            usernameMessage.textContent = 'Email harus mengandung "@" !!';
        }
    });

    password.addEventListener('input', function(){
        const passwordValue = password.value;
        const passLength = passwordValue.length;

        if (passLength>=6){
            passwordMessage.textContent = '';
        }else{
            passwordMessage.textContent = 'Password minimal 6 karakter!!';
        }
    });
});
