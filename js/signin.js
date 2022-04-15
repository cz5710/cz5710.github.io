const form = document.getElementById('signin');
const username = document.getElementById('username');
const psw = document.getElementById('psw');

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

    if (pswValue === '') {
        setError(psw, 'Password is required');
    } else if (pswValue.length < 8) {
        setError(psw, 'Password must be at least 8 characters.')
    } else {
        setSuccess(psw);
    }

};