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
    div[i].style.backgroundColor = colors[i];
    divParent.insertAdjacentElement('afterbegin', div[i]);
}

const span = document.querySelector('.points');
span.innerHTML = " " + div.length;


divParent.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
    div.pop();
    span.innerHTML = " " + div.length;
}
)
console.log(div.length);

let moreBox = document.querySelector('#btn');
moreBox.addEventListener('click', function() {
    for (let i = 0; i < 5; i++) {
        let div1 = document.createElement('div');
        div1.className = 'box';
        div1.style.backgroundColor = colors[i];
        div.push(div1);
        divParent.insertAdjacentElement('afterbegin', div1);
        console.log(div.length);
    }
    span.innerHTML = " " + div.length;
})


