

function getPoke(id) {

  const URL = 'https://pokeapi.co/api/v2/pokemon/' + id;

  fetch(URL)
    .then( response => response.json() )
    .then( data => createCard(data) );

}


function createCard(data){
	console.log(data);

	var container = document.getElementsByClassName('container')[1];
	var element = document.createElement('div');
	element.classList.add('card');
	element.innerHTML = `

	<div class="img">
    <img src="${data.sprites.front_shiny}" alt="">
  </div>

  <div class="info">
      <div class="title">
        <span class="id">${data.id} - </span><span class="name">${data.name}</span>
      </div>
      
      <div class="desc"></div>
  </div>
	`;

	container.appendChild(element);
}


function renderPokes(){

	for (let index = 1; index <= 20; index++) {
		
		getPoke(index);

	}

}