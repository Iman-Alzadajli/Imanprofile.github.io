var typed = new Typed(".multiple-text" , {
    strings: ["Software Developer" ,"Voice Actor" , "Edittor"] ,
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 700,
    loop:true

});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');


};