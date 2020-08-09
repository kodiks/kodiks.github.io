// $(document).ready(function() {
//     console.log(localStorage.getItem('isbankKapat'));
//     if (localStorage.getItem('isbankKapat')) {
//         $('#isBankKampanya').css('visibility', 'hidden');
//     }
// })

$(document).ready(function() {
    console.log(localStorage.getItem('DijitalMenuKapat'));
    if (localStorage.getItem('DijitalMenuKapat')) {
        $('#DijitalMenu').css('visibility', 'hidden');
    }
})

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {
        $('#return-to-top').fadeIn(200);
    } else {
        $('#return-to-top').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
});
! function(e) {
    "use strict";
    e.cookie("user") ? (e("#goToApp").css("display", "inline"), e("#loginModal").css("display", "none")) : (e("#goToApp").css("display", "none"), e("#loginModal").css("display", "inline")), e("#goToApp").click(function() {
        showAlert("Yönlendirme", "Uygulamaya yönlendiriliyorsunuz lüften bekleyiniz", "info", 5e3), setTimeout(() => {
            let a = JSON.parse(e.cookie("user"));
            var i = "";
            i = "False" === a.isUsingNewVersion ? `https://adisyo.com/app/#!/login?token=${a.access_token}&pin=${a.pin}` : `http://pos.adisyo.com/#/login/?token=${a.access_token}&pin=${a.pin}&isHasMultipleRestaurants=${a.isHasMultipleRestaurants}`, window.open(i, "_blank")
        }, 2e3)
    }), e(".header_area").length && e(window).scroll(function() {
        e(window).scrollTop() ? e(".header_area").addClass("navbar_fixed") : e(".header_area").removeClass("navbar_fixed")
    }), new WOW({
        offset: 100,
        mobile: !0
    }).init();
    var a, i, t, o, s, n, l, r, p = e(".scroll_animation"),
        m = e(window);
    if (e(window).width() > 576 && (m.on("scroll resize", function() {
            var a = m.height(),
                i = m.scrollTop(),
                t = i + a;
            e.each(p, function() {
                var a = e(this),
                    o = a.outerHeight(),
                    s = a.offset().top;
                s + o >= i && s <= t ? a.addClass("in-view") : a.removeClass("in-view")
            })
        }), m.trigger("scroll")), (a = e(".service_carousel")).length && a.owlCarousel({
            loop: !0,
            margin: 15,
            items: 4,
            autoplay: !0,
            smartSpeed: 2e3,
            responsiveClass: !0,
            nav: !0,
            dots: !1,
            stagePadding: 100,
            navText: [, '<i class="ti-arrow-left"></i>'],
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 0
                },
                578: {
                    items: 2,
                    stagePadding: 0
                },
                992: {
                    items: 3,
                    stagePadding: 0
                },
                1200: {
                    items: 3
                }
            }
        }), (i = e(".about_img_slider")).length && i.owlCarousel({
            loop: !0,
            margin: 0,
            items: 1,
            nav: !1,
            autoplay: !1,
            smartSpeed: 2e3,
            responsiveClass: !0
        }), (t = e(".feedback_slider")).length && t.owlCarousel({
            loop: !0,
            margin: 20,
            items: 3,
            nav: !1,
            center: !0,
            autoplay: !1,
            smartSpeed: 2e3,
            stagePadding: 0,
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1
                },
                776: {
                    items: 2
                },
                1199: {
                    items: 3
                }
            }
        }), function() {
            var a = e(".testimonial_slider");
            a.length && a.owlCarousel({
                loop: true,
                margin: 20,
                items: 1,
                autoplay: false,
                smartSpeed: 1200,
                autoplaySpeed: false,
                responsiveClass: true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                navContainer: '.agency_testimonial_info'
            })
        }(), function() {
            var a = e(".app_testimonial_slider");
            a.length && a.owlCarousel({
                loop: true,
                margin: 15,
                items: 6,
                autoplay: true,
                smartSpeed: 300,
                autoplaySpeed: false,
                responsiveClass: true,
                nav: true,
                dot: true,
                stagePadding: 0,
                navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
                navContainer: '.agency_testimonial_info',
                responsive: {
                    0: {
                        items: 3
                    },
                    650: {
                        items: 3
                    },
                    776: {
                        items: 4
                    },
                    1199: {
                        items: 6
                    }
                }
            })
        }(), (o = e(".app_screenshot_slider")).length && o.owlCarousel({
            loop: !0,
            margin: 10,
            items: 5,
            autoplay: !1,
            smartSpeed: 2e3,
            responsiveClass: !0,
            nav: !0,
            dots: !1,
            navText: ['<i class="ti-arrow-left"></i>', '<i class="ti-arrow-right"></i>'],
            navContainer: ".app_screenshot_slider",
            responsiveClass: !0,
            responsive: {
                0: {
                    items: 1
                },
                650: {
                    items: 2
                },
                776: {
                    items: 4
                },
                1199: {
                    items: 5
                }
            }
        }), (s = e(".pr_slider")).length && s.owlCarousel({
            loop: !0,
            margin: 10,
            items: 1,
            autoplay: !0,
            smartSpeed: 1e3,
            responsiveClass: !0,
            nav: !0,
            dots: !1,
            navText: ['<i class="ti-angle-left"></i>', '<i class="ti-angle-right"></i>'],
            navContainer: ".pr_slider"
        }), function() {
            var a = e(".price_tab");
            if (e(window).width() > 450 && e(a).length > 0) {
                if (a.append('<li class="hover_bg"></li>'), e(".price_tab li a").hasClass("active_hover")) {
                    var i = e(".price_tab li a.active_hover").position().left,
                        t = e(".price_tab li a.active_hover").css("width");
                    e(".hover_bg").css({
                        left: i,
                        width: t
                    })
                }
                e(".price_tab li a").on("click", function() {
                    e(".price_tab li a").removeClass("active_hover"), e(this).addClass("active_hover");
                    var a = e(".price_tab li a.active_hover").position().left,
                        i = e(".price_tab li a.active_hover").css("width");
                    e(".hover_bg").css({
                        left: a,
                        width: i
                    })
                })
            }
        }(), e(".selectpickers").length > 0 && e(".selectpickers").niceSelect(), (n = e(".pr_image")).length && n.owlCarousel({
            loop: !0,
            items: 1,
            autoplay: !0,
            dots: !1,
            thumbs: !0,
            thumbImage: !0
        }), e(".ar_top").on("click", function() {
            var a = e(this).next().attr("id"),
                i = document.getElementById(a),
                t = i.value;
            if (e(".proceed_to_checkout .update-cart").removeAttr("disabled"), isNaN(t)) return !1;
            i.value++
        }), e(".ar_down").on("click", function() {
            var a = e(this).prev().attr("id"),
                i = document.getElementById(a),
                t = i.value;
            if (e(".proceed_to_checkout .update-cart").removeAttr("disabled"), isNaN(t) || !(t > 0)) return !1;
            i.value--
        }), (l = e("#work-portfolio")).length && l.imagesLoaded(function() {
            l.isotope({
                itemSelector: ".portfolio_item",
                layoutMode: "masonry",
                filter: "*",
                animationOptions: {
                    duration: 1e3
                },
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(.4)rotate(60deg)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)rotate(0deg)"
                },
                stagger: 0,
                transitionDuration: "0.9s",
                masonry: {}
            }), e("#portfolio_filter div").on("click", function() {
                e("#portfolio_filter div").removeClass("active"), e(this).addClass("active");
                var a = e(this).attr("data-filter");
                return l.isotope({
                    filter: a,
                    animationOptions: {
                        animationDuration: 750,
                        easing: "linear",
                        queue: !1
                    }
                }), !1
            })
        }), (r = e("#blog_masonry")).length && r.imagesLoaded(function() {
            r.isotope({
                layoutMode: "masonry"
            })
        }), e(".img_popup,.image-link").length && e(".img_popup,.image-link").each(function() {
            e(".img_popup,.image-link").magnificPopup({
                type: "image",
                tLoading: "Loading image #%curr%...",
                removalDelay: 300,
                mainClass: "mfp-with-zoom mfp-img-mobile",
                gallery: {
                    enabled: !0,
                    navigateByImgClick: !0,
                    preload: [0, 1]
                }
            })
        }), e(".popup-youtube").length && e(".popup-youtube").magnificPopup({
            disableOn: 700,
            type: "iframe",
            removalDelay: 160,
            preloader: !1,
            fixedContentPos: !1,
            mainClass: "mfp-with-zoom mfp-img-mobile"
        }), e("#mapBox").length) {
        var c = e("#mapBox").data("lat"),
            d = e("#mapBox").data("lon"),
            u = e("#mapBox").data("zoom"),
            g = e("#mapBox").data("marker"),
            v = e("#mapBox").data("info"),
            h = e("#mapBox").data("mlat"),
            f = e("#mapBox").data("mlon");
        new GMaps({
            el: "#mapBox",
            lat: c,
            lng: d,
            scrollwheel: !1,
            scaleControl: !0,
            streetViewControl: !1,
            panControl: !0,
            disableDoubleClickZoom: !0,
            mapTypeControl: !1,
            zoom: u
        }).addMarker({
            lat: h,
            lng: f,
            icon: g,
            infoWindow: {
                content: v
            }
        })
    }
}(jQuery);

