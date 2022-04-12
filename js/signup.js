// function register() {
//     var name = document.getElementById("t1").value;
//     var name = document.getElementById("t2").value;
//     var name = document.getElementById("t3").value;
//     var name = document.getElementById("t4").value;

//     //email id expression code
//     var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
//     var letters = /^[A-Za-z]+$/;
//     var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//     if (name == "") {
//         alert("Please enter your name");
//     }
//     else if (!letters.test(name)) {
//         alert("Name field required only alphabet characters");
//     }
//     else if (email == "") {
//         alert("Please enter your user email id");
//     }
//     else if (!filter.test(email)) {
//         alert("Invalid email");
//     }
//     else if (pwd == "") {
//         alert("Please enter Password");
//     }
//     else if (cpwd == "") {
//         alert("Enter Confirm Password");
//     }
//     else if (!pwd_expression.test(pwd)) {
//         alert("Upper case, lower case, special character and numeric letter are required in Password filed");
//     }
//     else if (pwd != cpwd) {
//         alert("Password not Matched");
//     }
//     else if (document.getElementById("t4").value.length < 6) {
//         alert("Password minimum length is 6");
//     }
//     else if (document.getElementById("t4").value.length > 12) {
//         alert("Password max length is 12");
//     }
//     else {
//         alert("Error");
//     }
// }

const form = document.getElementsByName("form");
const username = document.getElementsByName("name");
const email = document.getElementsByName("email");
const psw = document.getElementsByName("psw");
const pswR = document.getElementsByName("psw-repeat");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    // trim blank spaces if any
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const pswRValue = pswR.value.trim();

    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }

    if (pswValue === '') {
        setError(psw, 'Password is required');
    } else if (pswValue.length < 8) {
        setError(psw, 'Password must be at least 8 character.')
    } else {
        setSuccess(psw);
    }

    if (pswRValue === '') {
        setError(pswR, 'Please confirm your password');
    } else if (pswRValue !== pswValue) {
        setError(pswR, "Passwords doesn't match");
    } else {
        setSuccess(pswR);
    }
};