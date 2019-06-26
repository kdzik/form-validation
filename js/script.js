const username = document.getElementById('username');
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const form = document.getElementsByTagName('form')[0];
const labels =  document.getElementsByTagName('label');

username.addEventListener('input', function(event){
    emptyCheck(username, labels[0]);
    usernameValidation(username, labels[0]);
});

password.addEventListener('input', function(event){
  //  emptyCheck(password, labels[1]);
  passwordValidation(password, labels[1]);
});

confirm_password.addEventListener('input', function(event){
    emptyCheck(confirm_password, labels[2]);
});

form.addEventListener('submit', function(event){
    let check1 = emptyCheck(username, labels[0]);
    let check2 = emptyCheck(password, labels[1]);
    let check3 = emptyCheck(confirm_password, labels[2]);
    let check4 = equalPassword(password, confirm_password, labels[2]);
    let check5 = usernameValidation(username, labels[0]);
    if(check1===true || check2===true || check3===true || check4===true || check5 ===true || check6 === true){
        event.preventDefault();
    }
});

function infoClear(label){
    label.innerHTML = "";
    label.className = "";
}

function infoText(warning, label){
    label.innerHTML = `
        <i class="exclamation fa fa-exclamation-circle"></i> ${warning}
        `;
        label.className = "error";
}

function emptyCheck(input, label){
    if(input.value.length === 0){
        infoText("Fill this field", label);
        return true;
    }
    else
    {
        infoClear(label);
        return false;
    }
}

function usernameValidation(input, label){
    if(input.value.length < 4){
       infoText("Username should be at least 4 characters long", label);
    }
    else{
        infoClear(label);
    }
}

function passwordValidation(input, label){
    let val = input.value;
    if(val.length === 0){
        infoText("Fill this field", label);
    }
    else if(val.length < 8){
        infoText("Username should be at least 8 characters long", label);
    }
    else if(!val.match(/[a-z]/) ){
        infoText("Username must contain at least 1 small character [a-z]", label);
    }
    else if(!val.match(/[A-Z]/)){
        infoText("Username must contain at least 1 big character [A-Z]", label);
    }
    else if(!val.match(/[0-9]/)){
        infoText("Username must contain at least 1 number", label);
    }
    else{
        infoClear(label);
    }
}

function equalPassword(password, confirm_password, label){
    if(password.value === confirm_password.value && password.value !== ''){
        infoClear(label);
        return false;
    }
    else if(password.value === '')
    {
        emptyCheck(confirm_password, labels[2]);
        return true;
    }
    else{
        infoText("Passwords must be the same", label);
        return true;
    }
}