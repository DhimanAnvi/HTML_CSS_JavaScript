document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const collapsibleNavbar = document.querySelector(navbarToggler.getAttribute('data-target'));

    navbarToggler.addEventListener('click', function() {
        collapsibleNavbar.classList.toggle('show');
    });
}); 

//Search button
const searchBox = document.querySelector('.search-box')
const searchBtn = document.querySelector('.search-btn')
const search = document.querySelector('.search')
searchBtn.addEventListener('click', function(){
    console.log(search.classList.contains('active'))
    if(search.classList.contains('active')){
        searchBox.value = ''
    }
    else{
        search.classList.add('active');
        searchBox.focus();
    }
})

const darkMode = document.getElementById('dark-mode')
const lightMode = document.getElementById('light-mode')

darkMode.addEventListener('click',() => {
    document.body.classList.toggle('dark_mode')
    darkMode.classList.toggle('hide')
    lightMode.classList.remove('hide')
})
lightMode.addEventListener('click',() => {
    document.body.classList.remove('dark_mode')
    lightMode.classList.toggle('hide')
    darkMode.classList.remove('hide')
})

  
  /*var swiper = new Swiper(".slider-content",{
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
  }); */
  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
      card.addEventListener('click', function() {
        cards.forEach(c => c.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });
// Function to dynamically adjust column layout based on screen size
function adjustColumnLayout() {
    const screenWidth = window.innerWidth;
    const cardRow = document.getElementById('cardRow');
    
    // Update the number of columns based on screen width
    if (screenWidth < 768) {
      cardRow.classList.remove('row-cols-md-3');
      cardRow.classList.add('row-cols-1');
    } else {
      cardRow.classList.remove('row-cols-1');
      cardRow.classList.add('row-cols-md-3');
    }
  }
  
  /* Call the function initially and on window resize
  adjustColumnLayout();
  window.addEventListener('resize', adjustColumnLayout); */
    