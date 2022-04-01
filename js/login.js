document.getElementById('login-submit').addEventListener('click',function(){

    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    if( userEmail == 'abc@gmail.com' &&  userPassword == '1234abcd'){
       window.location.href = 'banking.html';
    }
    
});

// handle deposit button event
