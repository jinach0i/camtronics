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

    let preBtn=$('.prev'),
    nextBtn=$('.next');
    $('.news-slider').on('init reInit afterChange', function (event,slick,cur) {
        let i=(cur?cur:0)+1;
        $('.pagination').text(i+'  /  '+slick.slideCount)
    });
    $('.icon').on('click', function () {
        if ($(this).attr('class') == 'fa-solid' && 'fa-pause'){
            $('.news-slider').slick('slickPause');
            $(this).removeClass('fa-pause');
            $(this).addClass('fa-play');
         } else {
             $(this).removeClass('fa-play');
           $('.news-slider').slick('slickPlay'); 
           $(this).addClass('fa-pause');
         }  
    });
    $('.news-slider').slick({
        accessibility: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        prevArrow:preBtn,
        nextArrow:nextBtn,
        dots: false,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        draggable: true,
    });


    
})