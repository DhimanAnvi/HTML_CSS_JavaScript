document.addEventListener("DOMContentLoaded", function() {
    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click", function() {
      window.location.href = "C:\Users\Karam\Desktop\Html And Js\JavaScript\FinalProject.html"; // Change the URL to your desired destination
    });
  });
  
  var swiper = new Swiper(".slider-content",{
    slidesPreView: 3,
    spaceBetween: 30,
    slidesPerGrou: 3,
    loop: true,
    contentSlider: 'true',
    fade: 'true',
    gragCursor: 'true',
    dynamicBullets: true,
    pagination: {
        el: ".Swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl: ".swiper-button-next",
        preEl: ".swiper-button-pre",
    },
  });