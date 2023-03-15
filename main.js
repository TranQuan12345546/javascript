let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]


let divParent = document.querySelector('.boxes');
let div = [];
for (let i = 0; i < 5; i++) {
    div[i] = document.createElement('div');
    div[i].className = 'box';
    console.log(div)
    console.log(colors[i]);
    div[i].style.backgroundColor = colors[i];
    divParent.insertAdjacentElement('afterbegin', div[i]);
}

const span = document.querySelector('.points');
span.innerHTML = " " + div.length;


div[0].addEventListener('click', function(event) { 
    divParent.removeChild(div[0]);
    div.pop();
    span.innerHTML = " " + div.length;
})

div[1].addEventListener('click', function(event) { 
    divParent.removeChild(div[1]);
    div.pop();
    span.innerHTML = " " + div.length;
})

div[2].addEventListener('click', function(event) { 
    divParent.removeChild(div[2]);
    div.pop();
    span.innerHTML = " " + div.length;
})

div[3].addEventListener('click', function(event) { 
    divParent.removeChild(div[3]);
    div.pop();
    span.innerHTML = " " + div.length;
})

div[4].addEventListener('click', function(event) { 
    divParent.removeChild(div[4]);
    div.pop();
    span.innerHTML = " " + div.length;
})

let moreBox = document.querySelector('#btn');
moreBox.addEventListener('click', function(event) {
    for (let i = 0; i < 5; i++) {
        div[i] = document.createElement('div');
        div[i].className = 'box';
        console.log(div)
        console.log(colors[i]);
        div[i].style.backgroundColor = colors[i];
        divParent.insertAdjacentElement('afterbegin', div[i]);
    }
    span.innerHTML = " " + div.length;
})


