const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const psw = document.getElementById('psw');
const pswRepeat = document.getElementById('pswRepeat');

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
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const pswValue = psw.value.trim();
    const pswRepeatValue = pswRepeat.value.trim();

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
        setError(psw, 'Password must be at least 8 characters.')
    } else {
        setSuccess(psw);
    }

    if (pswRepeatValue === '') {
        setError(pswRepeat, 'Please confirm your psw');
    } else if (pswRepeatValue !== pswValue) {
        setError(pswRepeat, "Password doesn't match");
    } else {
        setSuccess(pswRepeat);
    }

};

