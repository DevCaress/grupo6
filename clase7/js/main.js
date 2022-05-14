function dragStart(event){
    /* console.log(event); */
    event.dataTransfer.setData('text', event.target.id);
    var img = event.target.parentElement;
    console.log(img);
    console.log('dragStart');
}

function dragEnd(){
    console.log('dragEnd');
}

function dragEnter(event){
    console.log('dragEnter');
}

function allowDrop(event){
    event.preventDefault();
    /* console.log('dragOver'); */
}

function dragLeave(event){
    console.log('dragLeave');
}


function drop(event){
    /* console.log(event); */
    var data = event.dataTransfer.getData('text');
    
    if(event.target.dataset.perro == data){
        event.target.appendChild(document.getElementById(data));
    }

    console.log(data);

    console.log('drop');
}