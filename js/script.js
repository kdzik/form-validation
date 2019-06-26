const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const form = document.getElementsByTagName('form')[0];
const labels = document.getElementsByTagName('label');
const showPasswordButton = document.getElementsByClassName('showPassword')[0];
const showConfPasswordButton = document.getElementsByClassName('showPassword')[1];

username.addEventListener('input', function (event) {
    usernameValidation(username, labels[0]);
});

password.addEventListener('input', function (event) {
    passwordValidation(password, labels[1]);
});

confirm_password.addEventListener('input', function (event) {
    confirmPasswordValidation(confirm_password, labels[2]);
});

showPasswordButton.addEventListener('click', function (event) {
    showPassword(password, event);
});

showConfPasswordButton.addEventListener('click', function (event) {
    showPassword(confirm_password, event);
});

form.addEventListener('submit', function (event) {
    let check1 = usernameValidation(username, labels[0]);
    let check2 = passwordValidation(password, labels[1]);
    let check3 = confirmPasswordValidation(confirm_password, labels[2]);
    let check4 = equalPassword(password, confirm_password, labels[2]);
    let check5 = usernameValidation(username, labels[0]);
    if (check1 === true || check2 === true || check3 === true || check4 === true || check5 === true) {
        event.preventDefault();
    }
});

function infoClear(label) {
    label.innerHTML = "";
    label.className = "";
}

function infoText(warning, label) {
    label.innerHTML = `
        <i class="exclamation fa fa-exclamation-circle"></i> ${warning}
        `;
    label.className = "error";
}


function usernameValidation(input, label) {
    if (input.value.length === 0) {
        infoText("Fill this field", label);
    }
    else if (input.value.length < 4) {
        infoText("Username should be at least 4 characters long", label);
    }
    else {
        infoClear(label);
    }
}

function confirmPasswordValidation(input, label) {
    if (input.value.length === 0) {
        infoText("Fill this field", label);
    }
    else {
        infoClear(label);
    }
}

function passwordValidation(input, label) {
    let val = input.value;
    if (val.length === 0) {
        infoText("Fill this field", label);
    }
    else if (val.length < 8) {
        infoText("Password should be at least 8 characters long", label);
    }
    else if (!val.match(/[a-z]/)) {
        infoText("Password must contain at least 1 small character [a-z]", label);
    }
    else if (!val.match(/[A-Z]/)) {
        infoText("Password must contain at least 1 big character [A-Z]", label);
    }
    else if (!val.match(/[0-9]/)) {
        infoText("Password must contain at least 1 number", label);
    }
    else {
        infoClear(label);
    }
}

function equalPassword(password, confirm_password, label) {
    if (password.value === '') {
        infoText("Fill this field", label);
        return true;
    }
    else if (password.value === confirm_password.value) {
        infoClear(label);
        return false;
    }
    else {
        infoText("Passwords must be the same", label);
        return true;
    }
}

function showPassword(input, event) {
    if (input.type === "text") {
        input.type = "password";
        input.nextElementSibling.childNodes[0].className = "fa fa-eye";
        input.nextElementSibling.style.background = "#D3D3D3";
    }
    else if (input.type === "password") {
        input.type = "text";
        input.nextElementSibling.childNodes[0].className = "fa fa-eye-slash";
        input.nextElementSibling.style.background = "#C1C1C1";
    }
}