$(function () {
    $('.slick-slider1').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 5000,
        speed: 1000,
        pauseOnHover: false,
    });
    $('.slick-slider2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
    });
})