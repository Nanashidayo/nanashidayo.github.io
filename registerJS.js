// username
const username = document.getElementById('username');
const un_errorElement = document.getElementById('username_error');
// email
const email = document.getElementById('email');
const email_errorElement = document.getElementById('email_error');
// phone num
const phone_num = document.getElementById('phone_number');
const phone_errorElement = document.getElementById('phone_number_error');
// password
const password = document.getElementById('password');
const p_errorElement = document.getElementById('password_error');
// confirm
const confirm_password = document.getElementById('confirm_password');
const cp_errorElement = document.getElementById('confirm_password_error');

const form = document.getElementsByClassName('form')[0];

form.addEventListener('submit', (e) => {
    let username_error_messages = [];
    let email_error_messages = [];
    let phone_num_error_messages = [];
    let password_error_messages = [];
    let confirm_password_error_messages = [];

    // user
    if (username.value === "" || username.value === null) {
        username_error_messages.push("Username must not be left blank.");
    }

    if (username_error_messages.length > 0) {
        e.preventDefault();
        un_errorElement.innerText = username_error_messages.join('\n ');
    } else {
        un_errorElement.innerText = ''; // Clear error message if no error
    }

    // email
    if (email.value === "" || email.value === null) {
        email_error_messages.push("Email must not be left blank.");
    }

    if (email_error_messages.length > 0) {
        e.preventDefault();
        email_errorElement.innerText = email_error_messages.join('\n ');
    } else {
        email_errorElement.innerText = ''; // Clear error message if no error
    }

    // phone num
    if (phone_num.value === "" || phone_num.value === null) {
        phone_num_error_messages.push("Phone number must not be left blank.");
    } else if (phone_num.value.length < 10) {
        phone_num_error_messages.push("Phone number must have at least 10 digits.");
    }

    if (phone_num_error_messages.length > 0) {
        e.preventDefault();
        phone_errorElement.innerText = phone_num_error_messages.join('\n ');
    } else {
        phone_errorElement.innerText = ''; // Clear error message if no error
    }

    // password
    if (password.value === "" || password.value === null) {
        password_error_messages.push("Password must not be left blank.");
    } else if (password.value.length <= 8) {
        password_error_messages.push("Password should be longer than 8.");
    }

    if (password_error_messages.length > 0) {
        e.preventDefault();
        p_errorElement.innerText = password_error_messages.join('\n ');
    } else {
        p_errorElement.innerText = ''; // Clear error message if no error
    }

    // confirm pass
    if (confirm_password.value === "" || confirm_password.value === null) {
        confirm_password_error_messages.push("Confirm password must not be left blank.");
    } else if (confirm_password.value !== password.value) {
        confirm_password_error_messages.push("Passwords don't match.");
    }

    if (confirm_password_error_messages.length > 0) {
        e.preventDefault();
        cp_errorElement.innerText = confirm_password_error_messages.join('\n ');
    } else {
        cp_errorElement.innerText = ''; // Clear error message if no error
    }
    
    if (username_error_messages.length === 0 && 
        email_error_messages.length === 0 && 
        phone_num_error_messages.length === 0 && 
        password_error_messages.length === 0 && 
        confirm_password_error_messages.length === 0) {
        e.preventDefault(); // Prevent default to allow for message display
        document.getElementById('success_message').innerText = 'Form submitted successfully!';}
        form.reset();
});
