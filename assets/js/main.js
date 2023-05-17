(function ($) {
    $(document).ready(function () {
        handleCarousel();
        scrollBar();
        autoPlayYouTubeModal();
        navBar();
       
    });
    function handleCarousel() {
        $('.main-carousel').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 3000,
            nav: false,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                990: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        $('.main-carousel-stop').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            nav: false,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                990: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
        $('.meeting-style').owlCarousel({
            loop: true,
            margin: 10,
            autoplay: false,
            nav: false,
            dots: false,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
        $('.award-carousel').owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 3000,
            nav: false,
            dotsEach: 1,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                990: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            }
        });

        $('.owl-carousel').owlCarousel({
            loop: true,
            center: true,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplaySpeed: 3000,
            nav: false,
            dots: false,
            navText: [
                '<i class="fa-solid fa-chevron-left"></i>',
                '<i class="fa-solid fa-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    items: 1.5
                },
                600: {
                    items: 1.5
                },
                1000: {
                    items: 3.5
                },
                1200: {
                    items: 4.5
                },
                1300: {
                    items: 4
                },
                1800: {
                    items: 6
                }

            }
        })
    }
    function scrollBar() {
        $(window).scroll(function () {
                if($(window).scrollTop()> 54){
                    $('.logo-main-header').addClass('h-nav-mid-sticky')
                }else if($(window).scrollTop()< 2){
                    $('.logo-main-header').removeClass('h-nav-mid-sticky')
                    
                }
               
        })

        $(".datepicker").datepicker();

    }
    function autoPlayYouTubeModal() {
        var triggerOpen = $("body").find('[data-tagVideo]');
        triggerOpen.click(function () {
            var theModal = $(this).data("bs-target"),
                videoSRC = $(this).attr("data-tagVideo"),
                videoSRCauto = videoSRC + "?autoplay=1";
            $(theModal + ' iframe').attr('src', videoSRCauto);
            $(theModal + ' button.btn-close').click(function () {
                $(theModal + ' iframe').attr('src', videoSRC);
            });
        });
    }
    function navBar() {
        document.addEventListener(
            "DOMContentLoaded", () => {
                new Mmenu("#menu", {
                    "offCanvas": {
                        "position": "left"
                    },
                    "theme": "white",
                    "navbars": [
                        {
                            "position": "top",
                            "content": [
                                "searchfield"
                            ]
                        }
                    ]
                });
            }
        );
    }
    $('.play-img').click(function () {
        var videoPlayer = document.getElementById('video');
        console.log(videoPlayer.paused)
        if (videoPlayer.paused === true) {
            $('#play').removeClass('play-button')
            $('.play-img').addClass(' d-none')
            videoPlayer.play();
        }

    });
    $('#video').click(function () {
        var videoPlayer = document.getElementById('video');
        console.log(videoPlayer.paused)
        console.log(videoPlayer.paused)
        if (videoPlayer.paused === false) {
            $('#play').addClass('play-button')
            $('.play-img').removeClass(' d-none')
            // videoPlayer.pause();
        }
    })
})(jQuery);
function handleChangeLang() {
    var language = document.getElementById('language').value;
    var imgFlag = document.getElementById('flag-img');
    if (language == 'VN') {
        imgFlag.src = 'assets/img/viet-nam.svg'
    } else {
        imgFlag.src = 'assets/img/England-flag.svg'
    }
    console.log(imgFlag)
    console.log(language)
}

function mmenu() {
    document.addEventListener(
        "DOMContentLoaded", () => {
            new Mmenu("#menu", {
                "offCanvas": {
                    "position": "left"
                },
                "theme": "white"
            });
        }
    );
}
mmenu()
