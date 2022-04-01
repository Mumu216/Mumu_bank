function setPlayerStyle(player){
    
    player.style.border = '1px solid red';
    player.style.borderRadius = '15px';
    player.style.margin = '10px';
    player.style.padding = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
   setPlayerStyle(player);
//    player.addEventListener('click',function(){
//        player.style.backgroundColor = 'pink';
//    })
}

function addPlayer(){
    const playerscontainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam voluptates ducimus quibusdam explicabo, labore esse debitis vitae autem. Voluptatibus laboriosam voluptates consequatur minima totam eos laudantium culpa quisquam aliquam animi?</p>
    
    `;
    setPlayerStyle(player);
    playerscontainer.appendChild(player);
}
document.getElementById('players').addEventListener('click',function(event){
   if(event.target.tagName.toLowerCase() == 'div'){
       event.target.style.backgroundColor = 'pink';
   }
   else{
       event.target.parentNode.style.backgroundColor = 'pink';
   }
}); 