

function click1(event){

    if(event.altKey){
        console.log(`alt: ${event.altKey}`);
    } 
    if(event.ctrlKey){
        console.log(`ctrl: ${event.ctrlKey}`);
    } 
    if(event.shiftKey){
        console.log(`shift: ${event.shiftKey}`);
    }

    if(event.shiftKey && event.altKey){
        console.log(`truco desbloqueado`);
    }

    /* console.log('click'); */

    
    /* console.log(`ejeX: ${event.x} - ejeY: ${event.y}`); */

    console.log(event);
    console.log(event.target);
    event.target.classList.toggle('boton');
    /* event.target.style.backgroundColor = 'blueviolet'; */
}


function teclas(event){
    console.log(event);
}