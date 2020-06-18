$(function(){
    $('.header-slider_items').slick({
        slidesToShow: 1,
        appendArrows: $('.header-slider_items'),
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><img src="../img/prev.png" alt="prev" class="arrow_img"></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><img src="../img/next.png" alt="next" class="arrow_img"></button>',
    });

});