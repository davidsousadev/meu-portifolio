let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + heigth){
            navLinks.forEach(links => {
                links.classList.remove('ativo');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativo');
           });
        };
    });
    let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuicon.classList.remove('bx-x');
    navbar.classList.remove('ativo');

};

let menuicon = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menuicon.onclick = () =>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
}

ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
 });

 ScrollReveal().reveal('.home-content, .titulo', { origin: 'top'});

 ScrollReveal().reveal('.perfil, .serv, .portifolio-box', { origin: 'bottom'});


 ScrollReveal().reveal('.sobre-img', { origin: 'left'});

 ScrollReveal().reveal('.conteudo-sobre', { origin: 'rigth'});


 const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Full Stack Jr.', 'Técnico em Desenvolvimento de Sistemas','Técnico em Informática','Técnico em Contabilidade', 'Auxiliar de Escritório'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 500,
    loop: true
 });