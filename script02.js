/*global $ */
/*global document*/
/*global window*/

$(document).ready(function () {
    "use strict";
    $("#navside a").stop().animate({'marginLeft': '-85px'}, 1000);

    $("#navside li").hover(function () {
        $("a", $(this)).stop().animate({"marginLeft": "-2px"}, 200);
    },
        function () {
            $("a", $(this)).stop().animate({"marginLeft": "-85px", 200:

                $(document).ready(function () {
                    $(".me a").fadeIn(1500);
                })
                });
            $(document).ready(function () {
                $(".aboutme").fadeIn(1500);
            });

            $(document).ready(function () {
                $("#profpic").fadeIn(1800);
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 500) {
                    $(".expe").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 500) {
                    $("ul#myexp").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 550) {
                    $("#logo1").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 600) {
                    $("#logo2").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 650) {
                    $("#logo3").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 700) {
                    $("#logo4").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1200) {
                    $(".educ").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1200) {
                    $("ul#listofedu").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1200) {
                    $("#logo5").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1300) {
                    $("#logo6").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1400) {
                    $("#logo7").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1550) {
                    $(".caps").animate({"opacity": "1"}, 1500);
                }
            });

            $(window).scroll(function () {
                var x = $(this).scrollTop();
                if (x > 1550) {
                    $("ul#listofpro").animate({"opacity": "1"}, 1500);
                }
            });

            $(document).ready(function ($) {
                $(".scroll").click(function (event) {
                    event.preventDefault();
                    $("html, body").animate({scrollTop: $(this.hash).offset().top}, 1000);
                });
            });
        });
});
