const div = document.querySelectorAll('.form-input');

const labelUsername = document.createElement('label');
labelUsername.innerText = 'Username';
div[0].insertAdjacentElement('beforebegin', labelUsername);

const labelPassword = document.createElement('label');
labelPassword.innerText = 'Password';
div[1].insertAdjacentElement('beforebegin', labelPassword);

const labelConfirmPass = document.createElement('label');
labelConfirmPass.innerText = 'Confirm password';
div[2].insertAdjacentElement('beforebegin', labelConfirmPass);

const input1 = document.querySelector('#username');
console.log(input1);
const input2 = document.querySelector('#password');
const input3 = document.querySelector('#confirmPassword');


document.addEventListener('keydown', function() {
    btn.removeAttribute('disabled');
    btn.style.cursor = 'pointer';
})

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(event) {
    let Username = input1.value;
    let password = input2.value;
    let rePassword = input3.value;
    if(Username == '' || password == '' || rePassword == '') {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    } else if (password != rePassword) {
        alert('confirm password khong dung!');
        event.preventDefault();
    } else {
        alert(' đăng ký thành công')
    }
})

let btnHide2 = document.querySelector('.hide2');
let btnHide3 = document.querySelector('.hide3');

btnHide2.addEventListener('click', function(event) {
    if(input2.type == 'password') {
        input2.type = 'text';
    } else {
        input2.type = 'password';
    }
    event.preventDefault();
})

btnHide3.addEventListener('click', function(event) {
    if(input3.type == 'password') {
        input3.type = 'text';
    } else {
        input3.type = 'password';
    }
    event.preventDefault();
})
