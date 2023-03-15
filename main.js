//1.
let p = document.createElement('p');
p.innerHTML = 'Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.';
p.id = 'text';
p.style.color = '#777';
p.style.fontSize = '2rem';
document.body.prepend(p);

//2.
let li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++){
    li[i].style.color = 'blue';
}

//3.1


let list1 = document.createElement('li');
list1.innerText = 'Item 8';
let list2 = document.createElement('li');
list2.innerText = 'Item 9';
let list3 = document.createElement('li');
list3.innerText = 'Item 10';

let ul = document.querySelector('#list');
console.log(ul);
let li2 = ul.querySelectorAll('li');


ul.appendChild(list1);
ul.appendChild(list2);
ul.appendChild(list3);

//3.2
li2[0].style.color = 'red';
//3.3
li2[2].style.backgroundColor = 'green';
//3.4
ul.removeChild(li2[3]);
//3.5
li2[2].insertAdjacentElement("afterend", list3);


