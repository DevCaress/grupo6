/* objetos */
var allUsers = [];

function getDataInput(input){
    return input.value;
}

function createUserArray(){
    var newUser = [];
    var inputs = document.getElementsByTagName('input');
    
    for (let index = 0; index < inputs.length; index++) {
        newUser.push(getDataInput(inputs[index]));        
    }
    return newUser;
}

function createUserObj(){
    var newUser = {};
    var inputs = document.getElementsByTagName('input');
    
    newUser.userName = getDataInput(inputs[0]);
    newUser.email = getDataInput(inputs[1]);
    newUser.color = getDataInput(inputs[2]);
    newUser.pass = getDataInput(inputs[3]);
    
    return newUser;
}


function saveAllUsers(){    
    allUsers.push(createUserObj());
    console.log(allUsers);
}

function renderAllUsers() {
    var container = document.querySelector('.users');

    for (let index = 0; index < allUsers.length; index++) {

        var element = document.createElement('div');
        element.innerHTML = `
        <h2>UserName: ${allUsers[index].userName}</h2>
        <h3>Email: ${allUsers[index].email}</h2>
        <h3>Color: ${allUsers[index].color}</h2>
        <h3>Password: ${allUsers[index].pass}</h2>
        `;

        container.appendChild(element);
        
    }

}

/* var usuario1 = [
    'caress',
    'caress@gmail.com',
    '#ffffff',
    '123',
];

var usuario = {
    
    email: 'caress@gmail.com',
    color: '#ffffff',
    user: 'caress',
    pass: '123',
}; */
