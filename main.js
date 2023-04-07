const div = document.querySelectorAll('.form-input');

const labelUsername = document.createElement('label');
labelUsername.innerText = 'Username';
div[0].insertAdjacentElement('beforebegin', labelUsername);

const labelPassword = document.createElement('label');
labelPassword.innerText = 'Password';
div[1].insertAdjacentElement('beforebegin', labelPassword);


const input1 = document.querySelector('#username');
const input2 = document.querySelector('#password');


document.addEventListener('keydown', function() {
    btn.removeAttribute('disabled');
    btn.style.cursor = 'pointer';
})

const btn = document.querySelector('#btn');
btn.addEventListener('click', function(event) {
    let username = input1.value;
    let password = input2.value;
    if(username == '' || password == '') {
        btn.disabled = true;
        btn.style.cursor = 'not-allowed';
    } else {
        login(username, password);
        event.preventDefault();
        // if (json == "username hoặc password chưa chính xác") {
        //     alert("username hoặc password chưa chính xác");
        // } 
        // if (json.type == Object) {
        //     alert(`Xin chào ${username}` + json.email + json.avatar);
        // }
    }
    
})

async function login(username, password) {
    try {
        fetch(`http://localhost:8080/login?username=${username}&password=${password}`)
        .then((response) => response.json())
        .then((json) => {
            if(json.length == 0) {
                alert("username hoặc password chưa chính xác");
            } else {
                let div = document.querySelector('.container');
                div.style.display = 'none';
                let p = document.querySelector('#login-success');
                p.innerText =`Xin chào ${username}` + ". Email: " + json[0].email + ". Avatar: " + json[0].avatar;
            }
        });
        
    } catch (error) {
        console.log(error);
    }
}

// $(document).ready(function() {
//     $.ajax({
//         url: `http://localhost:8080/login?username=${username}&password=${password}`
//     }).then(function(jqxhr) {
//        console.log(jqxhr);
//     });
// });

let btnHide2 = document.querySelector('.hide2');

btnHide2.addEventListener('click', function(event) {
    if(input2.type == 'password') {
        input2.type = 'text';
    } else {
        input2.type = 'password';
    }
    event.preventDefault();
})

