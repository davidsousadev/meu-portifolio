const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {

    mario.classList.add('jump');

    setTimeout(() =>{
       mario.classList.remove('jump'); 
    }, 500);
}
const loop = setInterval(() =>{
const pipePosition = pipe.offsetLeft;
const marioPositon = +window.getComputedStyle(mario).bottom.replace('px','');
console.log(pipePosition+marioPositon);
if (pipePosition <= 120 && pipePosition > 0 && marioPositon < 50){

    pipe.style.animation = 'none';
    pipe.style.left = '${pipePosition}px';

}
})
document.addEventListener('keydown', jump);
