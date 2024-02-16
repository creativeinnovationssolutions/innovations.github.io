// ---------------------------swipper -------------------------------------------------------------

/*=============== SWIPER JS ===============*/

let swiperCards = new Swiper(".services__two-slider", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
       delay: 5000,
       disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".conbix-button-next",
      prevEl: ".conbix-button-prev",
    },
  
    breakpoints:{
      600: {
        slidesPerView: 2,
      },
      968: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4, 
      },
    },
  });