const menuBurger = document.querySelector('.menu-burger'),
      loader = document.querySelector('.loader'),
      mobileMenu = document.querySelector('.mobile-menu');


      window.onload = function () {
        setTimeout(() => {
            loader.style.display = 'none';
            window.scrollTo(0, 0);
        }, 1000);
    }


menuBurger.addEventListener('click', () => {
    menuBurger.classList.toggle('change');
    mobileMenu.classList.toggle('showMobileMenu');
});

window.addEventListener('scroll', () => {
    let scrolled = window.scrollY;
    if(scrolled < 10) {
        menuBurger.classList.remove('change');
        mobileMenu.classList.remove('showMobileMenu');
    }
    });


    $('.characters-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        focusOnSelect: true,
        touchMove: true,
        arrows: false,
        centerMode: true,
        centerPadding:'345px',
        
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding:'200px',
              }
            },
            {
              breakpoint: 1400,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding:'250px',
              }
            },
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding:'100px',
              }
            },
            {
              breakpoint: 769,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerPadding:'0px',
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '100px',
              }
            },
            {
              breakpoint: 450,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '50px',
              }
            },
        ]
      });

      
    $('.lands-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 2,
      dots: true,
      focusOnSelect: true,
      touchMove: true,
      arrows: false,
      centerMode: true,
      centerPadding:'345px',
      
      responsive: [
          {
            breakpoint: 1800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerPadding:'200px',
            }
          },
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding:'250px',
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding:'100px',
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerPadding:'0px',
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '100px',
            }
          },
          {
            breakpoint: 450,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '50px',
            }
          },
      ]
    });