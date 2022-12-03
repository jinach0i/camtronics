/* *******************************************************
 * filename : main.js
 * description : 메인에만 사용되는 JS
 * date : 2017-05-30
******************************************************** */


jQuery(function($){
	/* *********************** 메인 비주얼 ************************ */
	/* $('#mainContainer').fullpage({
		verticalCentered: true,
		menu: '#menu',
		navigation: true,
		responsiveWidth: 1220,
		navigationPosition: 'left',
		onLeave : function(index, nextIndex, direction){
			if ( direction === 'down' ) {
				if (nextIndex == 3) {
					$("#mainInformationCon").addClass("active-item");
					$(".count-num").each(function  () {
						setTimeout(function  () {
							callCount("counter1-1", 11100);
							callCount2("counter1-2", 1997);
							callCount("counter1-3", 3373);
							callCount2("counter1-4", 397);
						},400);
					});
				}else if (nextIndex == 2) {
					$("#mainBannerLinkCon").addClass("active-item");
					$('.left-banner-slide').slick("slickPlay");
				}else if (nextIndex == 4) {
					$("#mainNewsCon").addClass("active-item");
					$(".main-news-list-con > ul").slick("slickPlay");
				}else if (nextIndex == 5) {
					$("#mainRecruitCon").addClass("active-item");
				}
			}
			// 왼쪽leftBar 색상변경
			if( nextIndex == 3 || nextIndex == 5 ){
				$("#fp-nav").addClass("black");
			}else {
				$("#fp-nav").removeClass("black");
			}
		}
	}); */

	/* *********************** 메인 비주얼 ************************ */
	// fadeIn
	$(".ms-preloader").animate({"opacity":"0"},1000,"easeInOutCubic",function  () {
		$(".ms-preloader").css("visibility", "hidden");
	});

	// 임의의 영역을 만들어 스크롤바 크기 측정
	function getScrollBarWidth(){
		if($(document).height() > $(window).height()){
			$('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
			fakeScrollBar = $('#fakescrollbar');
			fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
			var w1 = fakeScrollBar.find('div').innerWidth();
			fakeScrollBar.css('overflow-y', 'scroll');
			var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
			fakeScrollBar.remove();
			return (w1-w2);
		}
		return 0;
	}

	// 메인 비주얼 높이값 설정
	if ( $("#mainVisual.full-height").length > 0 ) {
		mainVisualHeight();
		function mainVisualHeight () {
			scrollWidth = getScrollBarWidth();
			var win_width = $(window).outerWidth() + scrollWidth;
			var visual_height = $(window).height();	// header가 fixed or absolute일경우 - $("#header").height() 삭제
			if ( win_width < 1221 ) {
				$(".main-visual-con").height(visual_height);
			}else {
				$(".main-visual-con").css("height","100%");
			}
		}
		$(window).on('resize', mainVisualHeight);
	}
	
	// 메인 비주얼 
	$(".main-visual-con").each(function  () {
		var $visualSlide = $(this);
		var $visualSlideItem = $(this).find(".main-visual-item");
		var visualNum = $visualSlideItem.length;
		var $visualControls = $(".main-visual-controls");
	
		$visualControls.find('.paging-controls .total').text(visualNum);

		$visualSlide.on('init', function(event, slick) {
			$visualSlideItem.eq(0).addClass("active-item");
			$(".main-visual-con .slick-dots").find("li").eq(0).addClass("active-item");
		});
		$visualSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide) {	
			// 비주얼영역
			$visualSlideItem.removeClass("active-item");
			$visualSlideItem.eq(nextSlide).addClass("active-item");
			// Custom paging
			$(".main-visual-con li").removeClass("active-item");
			$(this).find(".slick-dots").find("li").eq(nextSlide).addClass("active-item"); 
			// 현재index 표시
			$visualControls.find('.paging-controls .cur').text(nextSlide + 1);
		})

		// 메인 비주얼 슬라이드
		$visualSlide.slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			dots:true,
			autoplay: true,
			speed:1000,
			infinite:true,
			autoplaySpeed: 3000,
			easing: 'easeInOutQuint',
			pauseOnHover:false,
			zIndex:1,
			prevArrow: '.main-visual-controls .prev-visual-btn',
			nextArrow: '.main-visual-controls .next-visual-btn',
			customPaging : function(slider, i) {
				var title = $(slider.$slides[i]).data('title');
				var en_title = $(slider.$slides[i]).data('en-title');
				return '<a><p class="loading-bar-paging-tit"><strong>'+title+'</strong><span>'+en_title+'</span></p><span class="loading-bar-line"></span></a>';
			},
		});
			
		$visualControls.find('.pause-visual-btn').click(function  () {
			$visualSlide.slick("slickPause");
			$(this).hide().siblings().show();
		});
		$visualControls.find('.play-visual-btn').click(function  () {
			$visualSlide.slick("slickPlay");
			$(this).hide().siblings().show();
		});
	});
	// 스크롤 아이콘 모션
	/* var $moveIcon = $('.main-scroll-icon');
	var moveIcon = setInterval(function() {
		$moveIcon.animate({opacity:'.5',"margin-bottom":'-=5px'}).animate({opacity:'1',"margin-bottom":'+=5px'})
	}, 1000); */
	
	// 메인 비주얼 텍스트 설정
	var s,
	  spanizeLetters = {
		settings: {
		  letters: $('.js-spanize'),
		},
		init: function() {
		  s = this.settings;
		  this.bindEvents();
		},
		bindEvents: function(){
		  s.letters.html(function (i, el) {
			//spanizeLetters.joinChars();
			var spanizer = $.trim(el).split("");
			return '<span>' + spanizer.join('</span><span>') + '</span>';
		  });
		},
	  };
	  spanizeLetters.init();

	$(".glow-text").each(function  () {
		$(this).find("span").each(function  (idx) {
			$(this).css({
				"-webkit-animation-delay": ((0.05*idx)+0.7)+"s",
				"animation-delay": ((0.05*idx)+0.7)+"s",
			});
		});
	});
	
	/* *********************** 메인 왼쪽 배너 슬라이드 ************************ */
	$('.left-banner-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		dots:false,
		autoplay: false,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		responsive: [
					{
					  breakpoint: 801,
					  settings: {
						autoplay: true
					  }
					}
				  ]
	});

	/* *********************** 메인 뉴스 슬라이드 ************************ */
	$(".main-news-list-con > ul").each(function  () {
		var $newsSlide = $(this);
		var newsNum = $newsSlide.find("li").length;
		var $pagingControls = $(".main-news-controls");
		$pagingControls.find('.paging-controls .total').text(newsNum);
		$newsSlide.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			dots:false,
			autoplay: false,
			speed:800,
			infinite:true,
			autoplaySpeed: 3000,
			easing: 'easeInOutQuint',
			pauseOnHover:false,
			variableWidth:true,
			prevArrow: '.main-news-controls .prev-news-btn',
			nextArrow: '.main-news-controls .next-news-btn',
			responsive: [
						{
						  breakpoint: 801,
						  settings: {
							autoplay: true
						  }
						}
					  ]
		});
		$newsSlide.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			$pagingControls.find('.paging-controls .cur').text(nextSlide + 1);
		})
		$pagingControls.find('.pause-news-btn').click(function  () {
			$newsSlide.slick("slickPause");
			$(this).hide().siblings().show();
		});
		$pagingControls.find('.play-news-btn').click(function  () {
			$newsSlide.slick("slickPlay");
			$(this).hide().siblings().show();
		});
	});

});
