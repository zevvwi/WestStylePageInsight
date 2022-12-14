$(document).ready(function(){
    $('.products__slider').slick({
        prevArrow: "<div class='prevArrow'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
        nextArrow: '<div class="nextArrow"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1800,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 1560,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 815,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
    $('.products__slide_button.price').each(function(i) {
        $(this).on('click', function() {
            $('.products__slide_button.price').eq(i).css('display', 'none');
            $('.products__slide_price_wrapper').each(function(e) {
                e = i;
                $('.products__slide_price_wrapper').eq(e).css('display', 'flex');
            });
        });
    });
    $('.project__slider').slick({
        prevArrow: "<div class='prevArrowProject'><svg width='18' height='16' viewBox='0 0 18 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' clip-rule='evenodd' d='M18 8C18 7.69695 17.8815 7.40631 17.6706 7.19202C17.4596 6.97774 17.1735 6.85735 16.8752 6.85735H3.84237L8.67258 1.95309C8.8838 1.73853 9.00246 1.44753 9.00246 1.14409C9.00246 0.840662 8.8838 0.549657 8.67258 0.335098C8.46136 0.120538 8.17488 0 7.87617 0C7.57745 0 7.29098 0.120538 7.07975 0.335098L0.330508 7.191C0.225752 7.29715 0.142641 7.42324 0.0859327 7.56206C0.0292245 7.70088 3.43184e-05 7.8497 3.43184e-05 8C3.43184e-05 8.1503 0.0292245 8.29912 0.0859327 8.43794C0.142641 8.57676 0.225752 8.70286 0.330508 8.809L7.07975 15.6649C7.29098 15.8795 7.57745 16 7.87617 16C8.17488 16 8.46136 15.8795 8.67258 15.6649C8.8838 15.4503 9.00246 15.1593 9.00246 14.8559C9.00246 14.5525 8.8838 14.2615 8.67258 14.0469L3.84237 9.14265H16.8752C17.1735 9.14265 17.4596 9.02227 17.6706 8.80798C17.8815 8.59369 18 8.30305 18 8Z' fill='#5BC3CF' fill-opacity='0.8'/></svg></div>",
        nextArrow: '<div class="nextArrowProject"><svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M-3.43323e-05 8C-3.43323e-05 8.30305 0.118479 8.59369 0.329434 8.80798C0.540389 9.02226 0.826505 9.14265 1.12484 9.14265L14.1576 9.14265L9.32742 14.0469C9.1162 14.2615 8.99754 14.5525 8.99754 14.8559C8.99754 15.1593 9.1162 15.4503 9.32742 15.6649C9.53864 15.8795 9.82512 16 10.1238 16C10.4225 16 10.709 15.8795 10.9202 15.6649L17.6695 8.809C17.7742 8.70285 17.8574 8.57676 17.9141 8.43794C17.9708 8.29912 18 8.1503 18 8C18 7.8497 17.9708 7.70088 17.9141 7.56206C17.8574 7.42324 17.7742 7.29714 17.6695 7.191L10.9202 0.335097C10.709 0.120537 10.4225 -1.26265e-07 10.1238 -1.26265e-07C9.82512 -1.26265e-07 9.53864 0.120537 9.32742 0.335097C9.1162 0.549656 8.99754 0.840661 8.99754 1.14409C8.99754 1.44753 9.1162 1.73853 9.32742 1.95309L14.1576 6.85735L1.12484 6.85735C0.826505 6.85735 0.540389 6.97773 0.329434 7.19202C0.118479 7.40631 -3.43323e-05 7.69695 -3.43323e-05 8Z" fill="#5BC3CF" fill-opacity="0.8"/></svg></div>',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
    $('.choice__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1050,
              settings: {
                slidesToShow: 3,
              }
            },
            {
                breakpoint: 850,
                settings: {
                  slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                }
            },
        ]
    });
    $('.header__menu').click(function() {
      $('.header__menu_modal').addClass('active');
    });
    $('.header__menu_times').click(function() {
      $('.header__menu_modal').removeClass('active');
    });

    $('.header__city').click(function() {
      $('.modal').addClass('active');
    });
    $('.modal_times').click(function() {
      $('.modal').removeClass('active');
    });
    let userCity = document.querySelector('.header__city_link');
    let modalCity = document.querySelectorAll('.modal__city');
    modalCity.forEach((item, i) => {
      modalCity[i].addEventListener("click", function() {
        userCity.innerHTML = modalCity[i].innerHTML;
        $('.modal').removeClass('active');
      });
    });
});