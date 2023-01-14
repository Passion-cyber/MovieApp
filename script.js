const openbutton = document.getElementById('open-btn');
const closebutton =document.getElementById('close-btn');
const overlay = document.querySelector('.overlay');
const body = document.getElementById('body');
const navmenu = document.querySelector('.navigation')

function openModal(){
  overlay.classList.toggle('hidden');
  navmenu.classList.add('open');
  document.body.classList.toggle('scroll')
}

function closeModal(){
  overlay.classList.toggle('hidden');
  navmenu.classList.remove('open');
  document.body.classList.toggle('scroll')
}

document.addEventListener('keypress', function(e){
    if(e.key == 'Enter' || e.key == "Escape"){
        closeModal();
    }
})

openbutton.addEventListener('click', openModal);
closebutton.addEventListener('click', closeModal);
      
// slick slider
$(document).ready(function(){
  $('.site-slider')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 9000,
       infinite: true,
       prevArrow: ".slider-btn .prev-btn",
       nextArrow: ".slider-btn .next-btn",
       slidesToShow: 6,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }

      ]
  });
});

$(document).ready(function(){
  $('.site-slider2')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 5000,
       infinite: true,
       prevArrow: ".slider-btntwo .prev-btn",
       nextArrow: ".slider-btntwo .next-btn",
       slidesToShow: 5,
       slidesToScroll: 3,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }

      ]
  });
});

$(document).ready(function(){
  $('.site-slider3')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 5000,
       infinite: true,
       prevArrow: ".slider-btnthree .prev-btn",
       nextArrow: ".slider-btnthree .next-btn",
       slidesToShow: 6,
       slidesToScroll: 4,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }

      ]
  });
});

$(document).ready(function(){
  $('.site-slider4')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 7000,
       infinite: true,    
       prevArrow: ".slider-btnfour .prev-btn",
       nextArrow: ".slider-btnfour .next-btn",
       slidesToShow: 6,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }

      ]
  });
});

$(document).ready(function(){
  $('.site-slider5')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 4000,
       infinite: true,
       prevArrow: ".slider-btnfive .prev-btn",
       nextArrow: ".slider-btnfive .next-btn",
       slidesToShow: 5,
       slidesToScroll: 2,
       responsive: [{

        breakpoint: 769,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true
        }  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });
});

$(document).ready(function(){
  $('.site-slider6')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 9000,
       infinite: true,
       speed: 400,
       prevArrow: ".slider-btnsix .prev-btn",
       nextArrow: ".slider-btnsix .next-btn",
       slidesToShow: 5,
       slidesToScroll: 1,
       responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 413,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }

      ]
  });
});

$(document).ready(function(){
  $('.site-slider7')
  .not('.slick-initialized')
  .slick({
       autoplay: true,
       autoplayspeed: 4000,
       infinite: true,
       speed: 400,
       slidesToShow: 5,
       slidesToScroll: 2,
       prevArrow: ".slider-btnseven .prev-btn",
       nextArrow: ".slider-btnseven .next-btn",
       responsive: [{

        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true
        }  
      }, {
  
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false
        }
  
      }, {
  
        breakpoint: 300,
        settings: "unslick" // destroys slick
  
      }]
  });
});

