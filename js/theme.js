/*
 Theme Name: Aprova
 Theme URI: #html/aprova
 Author: Aprova
 Author URI: #
 Description: Aprova - MultiPurpose Creative HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */
/*=======================================================================
 [Table of contents]
 ========================================================================
 2. Video PopUp
 3. All Testimonial and Carousel Slider
 4. All Skills
 5. All Init Select2
 6. All Suffle and Filter Masnary
 7. Fun Fact Count
 8. All Google Map
 9. All Count Down
 10. Accordian
 11. Scrolling
 12. Full Width Inside Column
 13. Date Picker and Domain Checkobx
 14. Button Qty
 15. All Popup Modal
 16. Back To Top
 17. Preloader
 18. Contact Form Submission
 19. Fixed Header
 20. Mega Menu
 21. 
 */


 
 
 
 

(function ($) {
    'use strict';

	/*---------------------
	witr_slick_active js 
	--------------------- */
		$('.witr_slick_active').slick({
			infinite: true,
			autoplay: true,
			autoplaySpeed: 30000,
			speed: 700,					
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});


/*---------------------
	Nivo Slider active js 
	--------------------- */
	$('#mainSlider').nivoSlider({
		directionNav: true,
		animSpeed: 1000,
		slices: 18,
		pauseTime:6000000,
		pauseOnHover: false,
		controlNav: false,
		prevText: '<i class="icofont-curved-left"></i>',
		nextText: '<i class="icofont-curved-right"></i>'					
	});


				$('.event6_32').slick({
					infinite: true,
					autoplay: true,
					autoplaySpeed: 3000,
					speed: 1000,					
					slidesToShow: 3,
					slidesToScroll: 1,
					arrows: true,
					dots: false,
					responsive: [
						{
							breakpoint: 1200,
							settings: {
								slidesToShow: 3,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 992,
							settings: {
								slidesToShow: 2,
								slidesToScroll: 1,
							}
					},
						{
							breakpoint: 767,
							settings: {
								slidesToShow: 1,
								slidesToScroll: 1,
							}
					}
					// You can unslick at a given breakpoint now by adding:
					// settings: "unslick"
					// instead of a settings object
					]
				});


				
			
			/*====== Brand Slide Slick =======*/
			$('.brand_imagess_active').slick({	

				infinite: true,
				autoplay: true,
				autoplaySpeed: 2000,
				speed: 700,					
				slidesToShow: 5,
				slidesToScroll: 1,
				centerMode: true,
				centerPadding: '',					
				arrows: false,
				dots: false,
				responsive: [
					{
						breakpoint: 1200,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 992,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
				},
					{
						breakpoint: 768,
						settings: {
							slidesToShow: 1,
							slidesToScroll: 1,
						}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
				]
			});

		

	
				
				
				
				
				
				
				
				
				
				
				
				

   

// 6.HOME 2 HERO CAROUSEL
    $('.em-slick-slider-new').slick({
        dots: true,
        speed: 300,
        arrows: true,
        autoplay: true,
        fade: true,
        autoplaySpeed: 6000,
        responsive: [{
            breakpoint: 769,
            settings: {
                arrows: false,
            }
        }]
    });







	
	
	
    /*--------------------------------------------------------
     / 2. Video PopUp
     /----------------------------------------------------------*/
    if ($('.video_popup').length > 0) {
        $('.video_popup').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-zoom-in',
            tLoading: '',
            removalDelay: 500,
            callbacks: {
                imageLoadComplete: function () {
                    var self = this;
                    setTimeout(function () {
                        self.wrap.addClass('mfp-iframe-loaded');
                    }, 16);
                },
                close: function () {
                    this.wrap.removeClass('mfp-iframe-loaded');
                },
                beforeChange: function () {
                    this.items[0].src = this.items[0].src + '?=' + Math.random();
                }
            },
            closeBtnInside: false,
            closeOnContentClick: true,
            midClick: true
        });
    }

    /*--------------------------------------------------------
     / 3. All Testimonial and Carousel Slider
     /---------------------------------------------------------*/
    if ($('.ab_slide').length > 0) {
        $('.ab_slide').owlCarousel({
            items: 1,
            animateIn: 'fadeInRight',
            animateOut: 'fadeOut',
            margin: 0,
            autoplay: false,
            nav: false,
            navText: false,
            dots: true
        });
    }

    if ($('.service_slider').length > 0) {
        $('.service_slider').slick({
            autoplay: false,
            autoplaySpeed: 2000,
            speed: 300,
            slidesToShow: 3,
            dots: true,
            arrows: false,
            centerMode: true,
            centerPadding: '350px',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                        centerPadding: '110px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    $('.servicefilter li a').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        var cl = $this.attr('data-fl');

        if (cl == 'all') {
            $('.service_slider').slick('slickUnfilter');
        } else {
            $('.service_slider').slick('slickUnfilter').slick('slickFilter', '.' + cl);
        }
        $('.servicefilter li a.active').removeClass('active');
        $this.addClass('active');
    });

    if ($('.folio_slide').length > 0) {
        $('.folio_slide').owlCarousel({
            items: 5,
            animateOut: 'slideInLeft',
            animateIn: 'slideOutRight',
            margin: 30,
            autoplay: false,
            nav: false,
            navText: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                900: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1600: {
                    items: 5
                }
            }
        });
    }

    if ($('.cons_CLSlide').length > 0) {
        $('.cons_CLSlide').owlCarousel({
            items: 6,
            margin: 0,
            autoplay: true,
            nav: false,
            navText: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                768: {
                    items: 3
                },
                992: {
                    items: 5
                },
                1024: {
                    items: 6
                }
            }
        });
    }

    if ($('.cons_testiSlider').length > 0) {
        $('.cons_testiSlider').owlCarousel({
            items: 1,
            loop: true,
            margin: 0,
            autoplay: false,
            nav: true,
            animateIn: 'fadeIn',
            smartSpeed: 1000,
            slideSpeed: 1000,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false
        });
    }

    if ($('.admission_slider').length > 0) {
        $('.admission_slider').owlCarousel({
            items: 4,
            loop: true,
            smartSpeed: 300,
            slideSpeed: 500,
            autoplay: true,
            nav: false,
            dots: false,
            stagePadding: 375,
            margin: 30,
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 40
                },
                600: {
                    items: 2,
                    stagePadding: 120
                },
                991: {
                    items: 3,
                    stagePadding: 120
                },
                1199: {
                    items: 3,
                    stagePadding: 210
                },
                1600: {
                    items: 4
                }
            }
        });
    }

    if ($('.busi_testiSlider').length > 0) {
        $('.busi_testiSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            asNavFor: '.busi_singleNav',
            autoplay: true
        });

        $('.busi_singleNav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.busi_testiSlider',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }

    if ($('.job_clientSlide').length > 0) {
        $('.job_clientSlide').owlCarousel({
            items: 2,
            loop: true,
            margin: 30,
            autoplay: false,
            nav: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                991: {
                    items: 2
                }
            }
        });
    }

    if ($('.hotelPro_slider').length > 0) {
        $('.hotelPro_slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            slidesToShow: 3,
            dots: false,
            lazyLoad: 'ondemand',
            arrows: false,
            centerMode: true,
            focusOnSelect: true,
            centerPadding: '170px',
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        centerMode: true,
                        centerPadding: '30px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        centerMode: true,
                        centerPadding: '150px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        centerMode: true,
                        centerPadding: '100px',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        centerMode: true,
                        centerPadding: '0px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.hotel_testiSlider').length > 0) {
        $('.hotel_testiSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.hotel_singleNav',
            autoplay: false
        });

        $('.hotel_singleNav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.hotel_testiSlider',
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }

    if ($('.politic_eventSlide').length > 0) {
        $('.politic_eventSlide').owlCarousel({
            items: 3,
            animateIn: 'fadeInRight',
            margin: 30,
            autoplay: false,
            nav: false,
            navText: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.politicBlogSlide').length > 0) {
        $('.politicBlogSlide').owlCarousel({
            items: 2,
            animateIn: 'fadeInRight',
            margin: 30,
            autoplay: true,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    if ($('.appSSlide').length > 0) {
        $('.appSSlide').owlCarousel({
            items: 1,
            autoplay: true,
            nav: false,
            dots: true
        });
    }

    $(document).ready(function () {
        var carousel = $("#slider_screen").waterwheelCarousel({
            flankingItems: 2,
            sizeMultiplier: .9,
            opacityMultiplier: 1,
            separation: 173,
            separationMultiplier: 1,
            speed: 500,
            edgeFadeEnabled: true

        });
        $('#prev').bind('click', function () {
            carousel.prev();
            return false;
        });
        $('#next').bind('click', function () {
            carousel.next();
            return false;
        });

    });

    if ($('.app_clientSlide').length > 0) {
        $('.app_clientSlide').owlCarousel({
            items: 2,
            loop: true,
            margin: 30,
            autoplay: false,
            nav: false,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                }
            }
        });
    }

    if ($('.app_clienLogoSlide').length > 0) {
        $('.app_clienLogoSlide').owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            nav: false,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                760: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    if ($('.food_style').length > 0) {
        $('.food_style').owlCarousel({
            items: 4,
            animateIn: 'fadeInRight',
            margin: 30,
            autoplay: true,
            nav: false,
            navText: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }

    if ($('.promoteSlider').length > 0) {
        $('.promoteSlider').owlCarousel({
            items: 3,
            animateIn: 'fadeInRight',
            animateOut: 'fadeInLeft',
            margin: 30,
            autoplay: false,
            nav: false,
            navText: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.rest_bSlider').length > 0) {
        $('.rest_bSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.rest_bSNav',
            autoplay: true
        });

        $('.rest_bSNav').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.rest_bSlider',
            dots: false,
            arrows: true,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
    }

    if ($('.lowBSlider').length > 0) {
        $('.lowBSlider').owlCarousel({
            items: 3,
            animateIn: 'fadeInRight',
            animateOut: 'fadeInLeft',
            smartSpeed: 1000,
            slideSpeed: 1000,
            margin: 30,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.invite_slider').length > 0) {
        $('.invite_slider').owlCarousel({
            items: 4,
            margin: 30,
            smartSpeed: 1000,
            slideSpeed: 1000,
            autoplay: false,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                767: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1400: {
                    items: 4
                }
            }
        });
    }

    if ($('.listing_TraSlider').length > 0) {
        $('.listing_TraSlider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            asNavFor: '.listing_TraNav',
            autoplay: false
        });

        $('.listing_TraNav').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: '.listing_TraSlider',
            dots: false,
            fade: true,
            arrows: false,
            centerMode: true,
            centerPadding: '0',
            focusOnSelect: true
        });
    }

    var $carousel = $('#client-nav');
    $carousel.carousel();
    var handled = false;
    var itemclicked = "";
    $carousel.bind('slide.bs.carousel', function (e) {
        var current = $(e.target).find('.carousel-item.active');
        var indx = $(current).index();
        if ((indx + 2) > $('.clinetTestNav .carousel-indicators li').length)
            indx = -1

        if (!handled)
        {
            $('.clinetTestNav .carousel-indicators li').removeClass('active')
            $('.clinetTestNav .carousel-indicators li:nth-child(' + (indx + 2) + ')').addClass('active');

        } else
        {
            handled = !handled;
        }

    });
    $(".clinetTestNav .carousel-indicators li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        handled = true;
    });

    if ($('.pesonalTestiSlide').length > 0) {
        $('.pesonalTestiSlide').owlCarousel({
            items: 2,
            loop: false,
            margin: 30,
            autoplay: true,
            nav: false,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                992: {
                    items: 2
                }
            }
        });
    }

    if ($('.personal_clienSlide').length > 0) {
        $('.personal_clienSlide').owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            nav: false,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if ($('.slideTestimonail').length > 0) {
        $('.slideTestimonail').owlCarousel({
            items: 1,
            margin: 0,
            autoplay: false,
            smartSpeed: 1000,
            slideSpeed: 1000,
            nav: true,
            navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
            dots: false
        });
    }

    if ($('.slideBlogPort').length > 0) {
        $('.slideBlogPort').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: true,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.slideTestimonail_3').length > 0) {
        $('.slideTestimonail_3').owlCarousel({
            items: 1,
            margin: 0,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            nav: false,
            dots: false
        });
    }

    if ($('.folioThumSlide').length > 0) {
        $('.folioThumSlide').owlCarousel({
            items: 1,
            margin: 0,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false
        });
    }

    if ($('.relatedPSlide').length > 0) {
        $('.relatedPSlide').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.testimonlaSlide').length > 0) {
        $('.testimonlaSlide').owlCarousel({
            items: 3,
            margin: 30,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: true,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }

    if ($('.offerSlide').length > 0) {
        $('.offerSlide').owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: true,
            navText: false
        });
    }

    if ($('.G_slide').length > 0) {
        $('.G_slide').owlCarousel({
            items: 4,
            margin: 12,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });
    }

    if ($('.cor_logoSlide').length > 0) {
        $('.cor_logoSlide').owlCarousel({
            items: 5,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            slideSpeed: 1000,
            dots: false,
            navText: false,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1024: {
                    items: 5
                }
            }
        });
    }

    /*--------------------------------------------------------
     / 4. All Skills
     /---------------------------------------------------------*/
    if ($(".singleSkill").length > 0)
    {
        $('.singleSkill').appear();
        $('.singleSkill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".singleSkill").each(function () {
            var datacount = $(this).attr("data-limit");
            $(".skillbar", this).animate({'width': datacount + '%'}, 3000);
            if (coun)
            {
                $(this).find('.parcent').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 3000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }

    if ($('.agen_singleSkill').length > 0) {
        $(".agenSk").each(function () {
            var pint = $(this).attr('data-skills');
            var decs = pint * 100;
            var grs = $(this).attr('data-gradientstart');
            var gre = $(this).attr('data-gradientend');

            $(this).circleProgress({
                value: pint,
                emptyFill: "rgba(221, 221, 221, 1)",
                startAngle: -Math.PI / 4 * 0,
                fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 0},
                lineCap: 'round',
                thickness: 10,
                animation: {duration: 1800},
                size: 166
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
            });
        });
    }

    $('.popupS').click(function (e) {
        e.preventDefault();
        var $this = $(this);
        $this.parent().children('.common_solution').fadeToggle();
        if (($this).hasClass('active')) {
            ($this).removeClass('active');
        } else {
            ($this).addClass('active');
        }
    });

    if ($('.busi_singleSkill').length > 0) {
        $(".busiSk").each(function () {
            var pint = $(this).attr('data-skills');
            var decs = pint * 100;
            var grs = $(this).attr('data-gradientstart');
            var gre = $(this).attr('data-gradientend');

            $(this).circleProgress({
                value: pint,
                emptyFill: "rgba(221, 221, 221, 1)",
                startAngle: -Math.PI / 4 * 0,
                fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 0},
                lineCap: 'round',
                thickness: 7,
                animation: {duration: 1800},
                size: 100
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
            });
        });
    }

    if ($('.creative_singleSkill').length > 0) {
        $(".creativeSk").each(function () {
            var pint = $(this).attr('data-skills');
            var decs = pint * 100;
            var grs = $(this).attr('data-gradientstart');
            var gre = $(this).attr('data-gradientend');

            $(this).circleProgress({
                value: pint,
                emptyFill: "rgba(255, 255, 255, 1)",
                startAngle: -Math.PI / 4 * 0,
                fill: {gradient: [[grs, 1], [gre, .2]], gradientAngle: Math.PI / 4 * 0},
                lineCap: 'round',
                thickness: 8,
                animation: {duration: 1800},
                size: 100
            }).on('circle-animation-progress', function (event, progress) {
                $(this).find('strong').html(parseInt(decs * progress) + '<span>%</span>');
            });
        });
    }

    /*-----------------------------------------------------------
     / 5. All Init Select2
     /------------------------------------------------------------*/
    if ($('.appointment_form select').length > 0) {
        $('.appointment_form select').select2();
    }
    if ($('.apartment_form select').length > 0) {
        $('.apartment_form select').select2();
    }
    if ($('.job_categorieList select').length > 0) {
        $('.job_categorieList select').select2();
    }
    if ($('.host_language select').length > 0) {
        $('.host_language select').select2();
    }
    if ($('.booking_member select').length > 0) {
        $('.booking_member select').select2();
    }
    if ($('.list_cate select').length > 0) {
        $('.list_cate select').select2();
    }

    /*--------------------------------------------------------
     / 6. All Suffle and Filter Masnary
     /---------------------------------------------------------*/
    $(window).on('load', function () {
        if ($("#shaffule").length > 0)
        {
            var $grid1 = $('#shaffule');
            $grid1.shuffle({
                itemSelector: '.shafle_item',
                sizer: '.my-sizer-element'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaffule_filter li').on('click', function () {
                // set active class
                $('.shaffule_filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName1 = $(this).attr('data-group');
                // reshuffle grid
                $grid1.shuffle('shuffle', groupName1);
            });
        }
        if ($("#shafulls").length > 0)
        {
            var $grid = $('#shafulls');
            $grid.shuffle({
                itemSelector: '.shaf_itme',
                sizer: '.my-sizer-personal'
            });
            /* reshuffle when user clicks a filter item */
            $('.shafful_filter li').on('click', function () {
                // set active class
                $('.shafful_filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
        if ($("#portMass").length > 0)
        {
            var $grids = $('#portMass');
            $grids.shuffle({
                itemSelector: '.massCol',
                sizer: '.my-sizer-element-2'
            });
        }
        if ($("#shafulls_2").length > 0)
        {
            var $grid4 = $('#shafulls_2');
            $grid4.shuffle({
                itemSelector: '.shaf_itme_2',
                sizer: '.my-sizer-element-3'
            });
            /* reshuffle when user clicks a filter item */
            $('.shafful_filter_2 li').on('click', function () {
                // set active class
                $('.shafful_filter_2 li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName2 = $(this).attr('data-group');
                // reshuffle grid
                $grid4.shuffle('shuffle', groupName2);
            });
        }
        if ($("#folio_in_suff").length > 0)
        {
            var $grid5 = $('#folio_in_suff');
            $grid5.shuffle({
                itemSelector: '.s_itme',
                sizer: '.my-sizer-suff'
            });
            /* reshuffle when user clicks a filter item */
            $('.inner_filter_menu li').on('click', function () {
                // set active class
                $('.inner_filter_menu li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName3 = $(this).attr('data-group');
                // reshuffle grid
                $grid5.shuffle('shuffle', groupName3);
            });
        }
    });

    /*--------------------------------------------------------
     / 7. Fun Fact Count
     /----------------------------------------------------------*/
    var skl = true;
    $('.funfact').appear();
    $('.funfact').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        /*if (Number(num) > 999) {
                         while (/(\d+)(\d{3})/.test(num)) {
                         num = num.replace(/(\d+)(\d{3})/, '$1' + '' + '$2');
                         }
                         }*/
                        $('span', $this).html(num);
                    }
                });
            });
            skl = false;
        }
    });

    /*--------------------------------------------------------
     / 8. All Google Map
     /---------------------------------------------------------*/
    if ($("#cons_map").length > 0)
    {
        var map;
        map = new GMaps({
            el: "#cons_map",
            lat: 40.728157,
            lng: -74.077644,
            scrollwheel: false,
            draggable: false,
            zoom: 12,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = "";
        map.addMarker({
            lat: 40.728157,
            lng: -74.077644,
            icon: "",
            animation: google.maps.Animation.DROP,
            verticalAlign: "bottom",
            horizontalAlign: "center",
            backgroundColor: "#d3cfcf"
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#ecedf1"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f7f8fc"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "transparent"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#e4e5e9"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#737980"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    if ($('#medi_map').length > 0) {
        var map1;
        map1 = new GMaps({
            el: '#medi_map',
            lat: 51.590580,
            lng: -0.143231,
            scrollwheel: false,
            zoom: 16,
            fullScreenControl: false,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        map1.addMarker({
            lat: 51.588700,
            lng: -0.138450,
            icon: "images/medical/marker.png",
            animation: google.maps.Animation.DROP,
            title: 'London',
            infoWindow: {
                content: '<p>10, Firs Avenue, Muswell Hill,<br> London, N10 3LY<br> Tel: 022 - 562-958</p>'
            },
            backgroundColor: '#1a1a1a'
        });
        map1.addMarker({
            lat: 51.588700,
            lng: -0.148450,
            icon: "images/medical/marker.png",
            animation: google.maps.Animation.DROP,
            title: 'Ammann',
            infoWindow: {
                content: '<p>Tetherdown Primary School Grand Ave<br> Muswell Hill,<br> London N10 3BP UK</p>'
            },
            backgroundColor: '#1a1a1a'
        });
        map1.addMarker({
            lat: 51.590580,
            lng: -0.143230,
            icon: "images/medical/marker.png",
            animation: google.maps.Animation.DROP,
            title: 'Hill',
            infoWindow: {
                content: '<p>The, 126-138 Muswell Hill<br> Broadway Muswell Hill,<br> London N10 3RU</p>'
            },
            backgroundColor: '#1a1a1a'
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#282828"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#2b2b2b"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#333333"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "#333333"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#353535"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#5b5b5b"}
                ]
            }
        ];
        map1.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });
        map1.setStyle("map_style");
    }

    if ($("#map_banner_1").length > 0)
    {
        var map;
        map = new GMaps({
            el: "#map_banner_1",
            lat: 40.785091,
            lng: -73.968285,
            scrollwheel: false,
            draggable: false,
            zoom: 12,
            fullScreenControl: false,
            zoomControl: false,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            clickable: false
        });
        var image = "";
        map.addMarker({
            lat: 40.785091,
            lng: -73.968285
        });
        var styles = [
            {
                "featureType": "road",
                "stylers": [
                    {"color": "#ffffff"}
                ]
            }, {
                "featureType": "water",
                "stylers": [
                    {"color": "#ecedf1"}
                ]
            }, {
                "featureType": "landscape",
                "stylers": [
                    {"color": "#f7f8fc"}
                ]
            }, {
                "elementType": "labels.text.fill",
                "stylers": [
                    {"color": "transparent"}
                ]
            }, {
                "featureType": "poi",
                "stylers": [
                    {"color": "#e4e5e9"}
                ]
            }, {
                "elementType": "labels.text",
                "stylers": [
                    {"saturation": 1},
                    {"weight": 0.1},
                    {"color": "#737980"}
                ]
            }

        ];
        map.addStyle({
            styledMapName: "Styled Map",
            styles: styles,
            mapTypeId: "map_style"
        });

        map.setStyle("map_style");
    }

    /*--------------------------------------------------------
     / 9. All Count Down
     /---------------------------------------------------------*/
    var countdown = $('#countdown');
    if (countdown.length > 0) {
        $('#countdown').countdown({
            until: new Date(2021, 12 - 1, 31),
            format: 'DHMS'
        });
    }

    var countdown = $('#countdownTk');
    if (countdown.length > 0) {
        $('#countdownTk').countdown({
            until: new Date(2021, 12 - 1, 31),
            format: 'DHMS'
        });
    }

    /*--------------------------------------------------------
     / 10. Accordian
     /---------------------------------------------------------*/
    $('#bitcoin_accordian .card-header').on('click', function () {
        var $this = $(this);
        $('#bitcoin_accordian .bitcoin_SFaq').removeClass('activePanel');
        if ($('button', $this).hasClass('collapsed')) {
            $this.parent('.faqInner').parent('.bitcoin_SFaq').addClass('activePanel');
        } else {
            $this.parent('.faqInner').parent('.bitcoin_SFaq').removeClass('activePanel');
        }
    });

    /*--------------------------------------------------------
     / 11. Scrolling
     /---------------------------------------------------------*/
    $(window).on("load", function () {
        $(".scroolingPost").mCustomScrollbar({
            setHeight: 505
        });
    });

    $(window).on("load", function () {
        $(".menu_content").mCustomScrollbar({
            setHeight: 350
        });
    });

    $(".job_timing a").click(function (e) {
        e.preventDefault();
        $('.job_timing a').removeClass('active');
        $(this).addClass('active');
    });

    /*--------------------------------------------------------
     / 12. Full Width Inside Column
     /---------------------------------------------------------*/
    function tw_stretch() {
        var i = $(window).width();
        $(".row .tw-stretch-element-inside-column").each(function () {
            var $this = $(this),
                    row = $this.closest(".row"),
                    cols = $this.closest('[class^="col-"]'),
                    rect = this.getBoundingClientRect(),
                    l = row[0].getBoundingClientRect(),
                    s = cols[0].getBoundingClientRect(),
                    r = rect.left,
                    d = i - rect.right,
                    c = l.left + (parseFloat(row.css("padding-left")) || 0),
                    u = i - l.right + (parseFloat(row.css("padding-right")) || 0),
                    p = s.left,
                    f = i - s.right,
                    styles = {
                        "margin-left": 0,
                        "margin-right": 0
                    };
            if (Math.round(c) === Math.round(p)) {
                var h = parseFloat($this.css("margin-left") || 0);
                styles["margin-left"] = h - r
            }
            if (Math.round(u) === Math.round(f)) {
                var w = parseFloat($this.css("margin-right") || 0);
                styles["margin-right"] = w - d
            }
            $this.css(styles);
        });
    }
    tw_stretch();

    /*--------------------------------------------------------
     / 13. Date Picker and Domain Checkobx
     /---------------------------------------------------------*/
    $('.datepicker').datepicker({
        startDate: '-3d'
    });

    $('.single_domain input[type=radio]').on('change', function () {
        var v = $('.single_domain input[type=radio]:checked').val();
        $('.domain_name').html('.' + v);
    });

    /*---------------------------------------------------------
     / 14. Button Qty
     /---------------------------------------------------------*/
    if ($(".qtyBtn").length > 0)
    {
        $(".btnMinus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);

            if (vals > 1)
            {
                vals -= 1;
                $(this).prev(".carqty").val(vals);
            } else
            {
                $(this).prev(".carqty").val(vals);
            }
            return false;
        });
        $(".btnPlus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);
            vals += 1;
            $(this).next(".carqty").val(vals);
            return false;
        });
    }

    /*--------------------------------------------------------
     / 15. All Popup Modal
     /---------------------------------------------------------*/
    $(".log_in_popup").animatedModal({
        modalTarget: 'popup_from_1',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut'
    });

    $(".sign_in_popup").animatedModal({
        modalTarget: 'popup_from_2',
        animatedIn: 'zoomIn',
        animatedOut: 'zoomOut'
    });

    $(".popup_common_search").animatedModal({
        modalTarget: 'search_popup',
        animatedIn: 'fadeIn',
        animatedOut: 'fadeOut'
    });

    if ($('.galPop').length > 0) {
        $('.galPop').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }

    $(".bar_controler").on('click', function () {
        var vw = $('.side_header').width();
        var vy = parseInt($('.sideBarMeunLeft').width() + 50);
        if ($(this).hasClass('active')) {
            $('.sideBarMeunLeft').animate({'left': '-' + vy + 'px'}, 900);
            $(this).removeClass('active');
        } else {
            $('.sideBarMeunLeft').animate({'left': vw + 'px'}, 900);
            $(this).addClass('active');
        }
        $('body').toggleClass('menu_open');
    });
    if ($('.sideBarMenu').length > 0) {
        $('.sideBarMenu ul li.menu-item-has-children > a').on('click', function () {
            var $this = $(this);
            $(this).parent().children('.sub-menu-left').slideToggle('slow');
            $(this).parent().toggleClass('active');

            return false;
        });
    }

    /*--------------------------------------------------------
     / 16. Back To Top
     /---------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
     / 17. Preloader
     /---------------------------------------------------------*/
    $(window).load(function () {
        if ($('.preloader').length > 0) {
            $('.preloader').delay(900).fadeOut('slow');
        }
    });

    /*--------------------------------------------------------
     / 18. Contact Form Submission
     /--------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('button[type="submit"]', this).attr('disabled', 'disabled');
        $('.ast_loader', this).fadeIn();

        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === '')
            {
                $(this).addClass('reqError');
                required += 1;
            } else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('button[type="submit"]', $this).removeAttr('disabled');
                    $('.ast_loader', $this).fadeOut();

                    $this.remove('.ast_con_message');
                    $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
                    setTimeout(function () {
                        $('.ast_con_message', $this).fadeOut().html('');
                    }, 5000);
                }
            });
        } else {
            $('button[type="submit"]', $this).removeAttr('disabled');
            $('.ast_loader', $this).fadeOut();
            $('.ast_con_message', $this).fadeOut().html('');
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

    /*--------------------------------------------------------
     / 19. Fixed Header
     /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $("#fix_header").addClass('fixedHeader animated flipInX');
        } else
        {
            $("#fix_header").removeClass('fixedHeader animated flipInX');
        }
    });

    /*--------------------------------------------------------
     / 20. MegaMenu
     /---------------------------------------------------------*/
    $(document).on('ready', function () {
        var w = $('header > .container > .row, header > .container-fluid > .row').width() - 30;
        $('.megamenu').css({'width': w, 'left': '0 !important'});
    });

    /*--------------------------------------------------------
     / 21. Mobile Menu
     /---------------------------------------------------------*/
    $(window).on("load resize", function (e) {
        if ($(window).width() < 991) {
            $('.mobileMenuBar a').on('click', function (e) {
                e.preventDefault();
                $('.mobile_menu > ul').slideToggle();
            });
            $('.mobile_menu ul li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu_toggler"><i class="fa fa-caret-down"></i></span>');
            });

            $('.mobile_menu ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('fa-caret-up').addClass('fa-caret-down');
                } else {
                    $('i', $this).addClass('fa-caret-up').removeClass('fa-caret-down');
                }

                $(this).prev('ul.sub-menu, .megamenu').slideToggle();
                $(this).toggleClass('active-span');
            });
        }
        ;
    });

    $('.mobileSearchBar').on('click', function () {
        $(this).toggleClass('active');
        $(this).siblings('.list_cate').slideToggle();
    });
    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();
   	
    // Venubox

    $('.venobox').venobox({
        numeratio: true,
        infinigall: true

    });

})(jQuery);
