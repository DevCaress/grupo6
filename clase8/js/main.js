

const URL = 'https://pixabay.com/api/';
const APIKEY = '128376123876';



let gato = '';

{
    var num1 = 1;
    let num2 = 2;
}

/* console.log(num1);
console.log(num2); */


function suma(num1,num2){
    return num1 + num2;   
}


let suma1 = suma(2,123);

let resta = function(num1,num2){
    return num1 - num2
}

let multi = (num1,num2) => num1 * num2;

let msg = name => 'welcome ' + name;


const btn = document.getElementById('btn');

const getData = () => {  
    return document.getElementById('name').value;
}
const getData2 = () => {  
    return document.getElementById('pass').value;
}

const createUser = (name = 'ashjdgah',pass,mx = false) => {
    let user = {};
    user.pass = pass;
    user.name = name;
    user.mexico = mx;
    return user;
}

const renderName = () => {
    
    let usuario = createUser(getData(), getData2());
    console.log(usuario);

    let cont = document.getElementsByTagName('section')[0];
    let element = document.createElement('h2');
    element.innerHTML = `${usuario.name} - ${usuario.pass}`;
    cont.appendChild(element);
}

btn.addEventListener('click', renderName);



const frutas = [
    'platano',
    'sandia',
    'manzana',
    'pera',
    'naranja'
];
const user = {
    name: 'caress',
    mail: 'c@gmail.com',
    age: 24,
    gender: 'M',
    single: true
};


/* for (const iterator of frutas) {
    console.log(iterator);
}

let perro = 'askdghaskd aksdjhasd lkajshd';

for (const iterator of perro) {
    console.log(iterator);
} */

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];    
} */

for (const key in user) {

    console.log(key, user[key]);
}