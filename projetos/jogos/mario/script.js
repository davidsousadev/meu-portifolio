const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const nuvens = document.querySelector('.nuvens');

const up = document.querySelector('.up');

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() =>{
       mario.classList.remove('jump'); 
    }, 500);
}
const loop = setInterval(() =>{
    const pipePosition = pipe.offsetLeft;
    const nuvensPosition = nuvens.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 110  && pipePosition > 0 && marioPosition < 5){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
    
        mario.src = './imagens/over.png';
        mario.style.width = '150px'
        mario.style.marginleft = '50px'
    
        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;
       

        clearInterval(loop);

myMusic.pause();
   over.play(); 

   setTimeout(function(){
   window.location.reload();
}, 10000);

    }
    
    }, 10);

var myMusic = document.getElementById("music");
var over = document.getElementById("over");

function play(){

myMusic.play();

}

document.addEventListener("unload", play);
//document.addEventListener('up', jump);