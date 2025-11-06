// Variáveis
export const sections = document.querySelectorAll('section');
export const navLinks = document.querySelectorAll('header nav a');
export const body = document.querySelector('body');
export const sobre = document.querySelector('.sobre');
export const experiencias = document.querySelector('.experiencias');
export const portfolio = document.querySelector('.portfolio');
export const habilidades = document.querySelector('.habilidades');
export const footer = document.querySelector('.footer');
export const mouse = document.querySelector('.mouse');

// Funções
export const flight = () => {
    body.classList.add('bg');
    sobre.classList.add('bg');
    experiencias.classList.add('bg');
    portfolio.classList.remove('bg');
    habilidades.classList.add('bg');
    footer.classList.remove('bg');
    mouse.classList.add('fmouse');
}

export const fdark = () => {
    body.classList.remove('bg');
    sobre.classList.remove('bg');
    experiencias.classList.remove('bg');
    portfolio.classList.add('bg');
    habilidades.classList.remove('bg');
    footer.classList.remove('bg');
    mouse.classList.remove('fmouse');
}

export const handleScroll = () => {
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
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('ativo');
}

export const toggleMenu = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('ativo');
}

// ScrollReveal & Typed (Se precisar importar essas bibliotecas também)
export const setupScrollReveal = () => {
    ScrollReveal({ 
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 100
    });

    ScrollReveal().reveal('.home-content, .titulo', { origin: 'top' });
    ScrollReveal().reveal('.perfil, .serv, .portfolio-box', { origin: 'bottom' });
    ScrollReveal().reveal('.sobre-img', { origin: 'left' });
    ScrollReveal().reveal('.conteudo-sobre', { origin: 'rigth' });
}

export const setupTyped = () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Desenvolvedor Full Stack Jr.', 'Técnico em Desenvolvimento de Sistemas','Técnico em Informática','Técnico em Contabilidade', 'Auxiliar de Escritório'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 500,
        loop: true
    });
}
