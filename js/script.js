
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
       
    menuIcon.classList.toggle('bx-minus-circle');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        /* ACTIVE BUTTONS */
        if (top >= offset && top < offset + height){
            navLinks.forEach(links => { 
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
             });
        };
    });   

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-minus-circle');
    navbar.classList.remove('active');

};

    
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1500,
    delay: 200,
    easing: 'ease-in-out',
    mobile: true,
    reset: true,

});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
ScrollReveal().reveal('.home-content h1, .about-content', {origin: 'right' });

const typed = new Typed('.typewriting-text', {
    strings: ['Technical Support Engineer','Frontend Developer',
     'Team Player','Game Developer (Unity3D)'],
    typeSpeed: 60,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
