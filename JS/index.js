let menu = document.querySelector('.header .navbar');
let botonM = document.querySelector('#boton-menu');

botonM.onclick = () =>{
    botonM.classList.toggle('fa-times');
    menu.classList.toggle('active');
};


//Slider Swiper
var swiper = new Swiper(".main-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


