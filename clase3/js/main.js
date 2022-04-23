"use strict"

/* var elem = [
    1, 5, 2, 3, 4, 7, 1, 2, 3, 5, 9, 7, 5, 3, 2, 0, 7, 4, 1, 3, 2, 5
];

console.log(elem);


for(var contador = 0; contador < elem.length; contador++){
    for(var contador2 = contador + 1; contador2 < elem.length; contador2++){
        if(elem[contador] == elem[contador2]){
            elem[contador2] = null;
        }
        console.log('Contador: ' + contador + ' Contador2: ' + contador2);
    }
}
console.log(elem); */

/* var index = 0;

while (index < 100) {
    console.log('hee hee');
    index = index + 10;
} */

/* var index = 300;

do {
    
    console.log(index);
    index++;
} while(index < 100); */

var div1 = document.getElementsByTagName('div')[0];
var encendido = false;
var colors = ["deeppink", "green", "blue", "blueviolet", "orange", "red", '#ffffff00' ];
var index = 0;


function color(){

	/* scope */
	console.log('Index : ' + index);
	console.log('0 0 20px 10px ' + colors[index]);

	div1.style.backgroundColor = colors[index];
	div1.style.boxShadow = '0 0 20px 10px ' + colors[index];
	

	if (index == colors.length - 1) {
		index = 0;
	}else{
		index++;
	}

	/* texto */

	var texto = prompt('lo que sea');
	div1.innerText = texto;
	
}

/* function color(){
    
    if (encendido == true) {

        div1.style.backgroundColor = '';
    	div1.style.boxShadow = '';
    	div1.style.textShadow = '';
		encendido = false;
    }else{
        div1.style.backgroundColor = '#ff149340';
    	div1.style.boxShadow = '0 0 20px 10px #ff149340';
    	div1.style.textShadow = '0 0 20px white';
		encendido = true;
    	console.log('hee hee');
    }

} */

/* scoped */
/* hoisting */
/* use sctrict */



function mensaje(){
	console.log('bienvenido :' + nombreUsuario);
}

function usuario(){	
	nombreUsuario = prompt('askdjhad');	
	mensaje();
}

usuario();


var nombreUsuario = null;



