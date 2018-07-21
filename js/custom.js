/* ==========================================================================
Coming Soon Time
========================================================================== */

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//  PLEASE TYPE YEAR, MONTH, DAY, TIME and TIME ZONE HERE  //
//  TYPE TO JUST THIS AREA      /////////////////////////////
var year = '2019'; //<== Year          /////////////
var month = '02'; //<== Month         /////////////
var day = '28'; //<== Day           /////////////
var time = '23:59:59'; //<== Time          /////////////
var time_zone = 'GMT+0200'; //<== Time Zone     /////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = '' + month + ' ' + day + ' ' + year + ' ' + time + ' ' + time_zone + '';
initializeClock('clockdiv', deadline);




/* ==========================================================================
ParticleJS
========================================================================== */

particlesJS('intro', {
        "particles": {
            "number": {
                "value": 20,
                "density": {
                    "enable": true,
                    "value_area": 710.2328774690454
                }
            },
            "color": {
                "value": "#34149d"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 8
                },
                "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.6,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 16,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 1
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    }

);


/* ==========================================================================
NiceScroll
========================================================================== */

$(document).ready(function () {

    if ($("body").hasClass("preloader")) {
        
        $('#ascrail2000').css("display", "none");
        
        $(window).load(function () {
            $("html").niceScroll({
            cursorcolor: "#e71881",
            cursorborder: "none",
            cursorborderradius: "10px",
            cursorwidth: "6px",
            cursoropacitymin: "0.5",
            cursoropacitymax: "1",
            scrollspeed: 40,
            mousescrollstep: 30,
            zindex: "999"
        });
            $('#preloader').delay(2000).fadeOut('slow');
        });


    } else {
        $("html").niceScroll({
            cursorcolor: "#e71881",
            cursorborder: "none",
            cursorborderradius: "10px",
            cursorwidth: "6px",
            cursoropacitymin: "0.5",
            cursoropacitymax: "1",
            scrollspeed: 40,
            mousescrollstep: 30,
            zindex: "999"
        });
    }
});

/* ==========================================================================
Scroll Down and Up Speed
========================================================================== */

function goToByScroll(id) {

    if (id != "home") {
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    } else {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    }
}


function scrollitup() {
    $('html, body').animate({
        scrollTop: 0
    }, 1800);
}

function scrollitdown() {
    var site_height = $(window).height();
    $('html, body').animate({
        scrollTop: site_height
    }, 800);
}
/* ==========================================================================
 Scrollspy
========================================================================== */
$(document).ready(function () {
    $("body").scrollspy({
        target: ".cd-stretchy-nav",
        offset: 1
    })
});
/* ==========================================================================
Elastic Navbar
========================================================================== */

jQuery(document).ready(function () {
    if ($('.cd-stretchy-nav').length > 0) {
        var stretchyNavs = $('.cd-stretchy-nav');

        stretchyNavs.each(function () {
            var stretchyNav = $(this),
                stretchyNavTrigger = stretchyNav.find('.cd-nav-trigger');

            stretchyNavTrigger.on('click', function (event) {
                event.preventDefault();
                stretchyNav.toggleClass('nav-is-visible');
            });
        });

        $(document).on('click', function (event) {
            (!$(event.target).is('.cd-nav-trigger') && !$(event.target).is('.cd-nav-trigger span')) && stretchyNavs.removeClass('nav-is-visible');
        });
    }
    var $root = $('html, body');
    $(".cd-stretchy-nav > ul > li > a").click(function (e) {
        e.preventDefault();
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
    });
});

$(".cd-nav-trigger, .nav-move").click(function () {
    $(".nav-bacground-cover").toggleClass("nav-bacground-cover-active");
});
$(".nav-bacground-cover, .nav-move").click(function () {
    $(".nav-bacground-cover").removeClass("nav-bacground-cover-active");
});


/* ==========================================================================
Subscribe
========================================================================== */
$(function () {
    $("#subscribe-form").validate({
        submitHandler: function (form) {
            $.post("assests/subscribe.php", {
                fname: $("#fname").val(),
                lname: $("#lname").val(),
                email: $("#email").val()
            }, function (data) {
                $('#subscribe-messages').html(data);
                // if you want just clear form
                // $('#fname, #lname, #email').val('');

                // remove subscribe form
                $("#subscribe-form").remove();

            });
        },
        // all fields are required
        rules: {
            fname: {
                required: true
            },
            lname: {
                required: true
            },
            email: {
                required: true,
                email: true
            }
        }
    });
});


/* ==========================================================================
Contact Form
========================================================================== */

$(function () {

    var form = $('#contact-form');
    var formMessages = $('#contact-form-messages');
    $(form).submit(function (e) {
        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            })
            .done(function (response) {
                $(formMessages).removeClass('error');
                $(formMessages).addClass('success');

                $(formMessages).text(response);


                // if you want remove form
                //$('#name, #email, #message').remove();

                // Clear the form.
                $('#name, #email, #message').val('');

            })
            .fail(function (data) {
                $(formMessages).removeClass('success');
                $(formMessages).addClass('error');

                // Set the message text.
                if (data.responseText !== '') {
                    $(formMessages).text(data.responseText);
                } else {
                    $(formMessages).text('Oops! An error occured and your message could not be sent.');
                }
            });

    });

});

/* ==========================================================================
Filterizr
========================================================================== */

$(function () {
    $('.filtr-container').filterizr();

    $('.simplefilter li').click(function () {
        $('.simplefilter li').removeClass('active');
        $(this).addClass('active');
    });
    $('.multifilter li').click(function () {
        $(this).toggleClass('active');
    });
    $('.shuffle-btn').click(function () {
        $('.sort-btn').removeClass('active');
    });
    $('.sort-btn').click(function () {
        $('.sort-btn').removeClass('active');
        $(this).addClass('active');
    });
});


/* ==========================================================================
Google Map
========================================================================== */
$('#map-area').gMap({

    address: 'New York, NY',
    lat: 48.149710,
    lng: 11.567817,
    maptype: 'ROADMAP',

    zoom: 14,
    markers: [
        {
            address: 'New York, NY',
            html: '<div style="width: 300px;"><h4 style="margin-bottom: 8px;"><span>New York</span></h4><p class="mapclass"><strong>New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean</strong>.</p></div>',
            icon: {
                image: "images/map-marker.png",
                iconsize: [64, 64],
                iconanchor: [13, 39]
            }
				}
			],
    doubleclickzoom: false,
    controls: {
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: false,
        streetViewControl: false,
        overviewMapControl: false
    }
});