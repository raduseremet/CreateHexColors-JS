const colors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G'];
const bodyBg = document.querySelector('body');
const diez = document.getElementById('diez');
const button = document.getElementById('changeColorBtn');

button.addEventListener('click', ()=> {

let hexCol = '#';


for  (let i = 0; i < 6; i++ ){
    
    let random = Math.floor(Math.random() * colors.length);
    
    hexCol += colors[random]
}

bodyBg.style.backgroundColor = hexCol;

diez.innerText = hexCol;

});

