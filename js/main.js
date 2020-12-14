'use strict';
/* ---------------------------
? Burger
--------------------------- */
$(function () {
    $(".header__burger").click(function () {
        $(".header__burger, .header__nav").toggleClass("active");
        $("body").toggleClass("lock");
    });
});
/* ---------------------------
? Burger END
--------------------------- */

/* ---------------------------
? Slick
--------------------------- */
$('.sl').slick({
    slidesToShow: 4, // отображение количества слайдеров
    slidesToScroll: 4,
    //autoplay: true,
    //autoplaySpeed: 2000, //время прокрутки 1000=1 сек
    //speed: 1000, // скорость слайда
    centerMode: false,
    centerPadding: '0px',
    dots: false,
    arrows: true,
    responsive: [{
        breakpoint: 768,
        settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '0px',
            slidesToShow: 1,
            //slidesToScroll: 1,
        }
    }]

    //fade: false, //смена слайдра способом затемнения
    //draggable: false, //отмена принудительного переключения слайда
    //infinite: false, // в конце нельзя принудительно прокрутить слайд
    //vertical: true, // вертикальный слайдер
});
/* ---------------------------
? Slick END
--------------------------- */

/* ---------------------------
? Top-Nav
--------------------------- */
var h_hght = 100; // высота шапки
var h_mrg = 0;	  // отступ когда шапка уже не видна

$(function () {

    var elem = $('.header_nav_top');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', h_mrg);
    }

    $(window).scroll(function () {
        top = $(this).scrollTop();

        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });

});
/* ---------------------------
? Top-Nav END
--------------------------- */
