const labelUsername = document.createElement('label');
labelUsername.innerText = 'Username';
const input1 = document.querySelector('#username');
input1.insertAdjacentElement('beforebegin', labelUsername);



const labelPassword = document.createElement('label');
labelPassword.innerText = 'Password';
const input2 = document.querySelector('#password');
input2.insertAdjacentElement('beforebegin', labelPassword);


const labelConfirmPass = document.createElement('label');
labelConfirmPass.innerText = 'Confirm password';
const input3 = document.querySelector('#confirmPassword');
input3.insertAdjacentElement('beforebegin', labelConfirmPass);




document.addEventListener('keydown', function() {
    btn.removeAttribute('disabled');
                btn.style.cursor = 'pointer';
})

const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
    let Username = input1.value;
    let password = input2.value;
    let rePassword = input3.value;
    if(Username == '' || password == '' || rePassword == '') {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    } else if (password != rePassword) {
        alert('confirm password khong dung!')
    } else {
        alert(' đăng ký thành công')
    }
})
