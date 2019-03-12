/*global $ */
/*global document*/

$(document).ready(function () {
    "use strict";
    $(".overlay").hover(function () {
        $(this).stop().animate({opacity: 0}, "fast");
    },
         function () {
            $(this).stop().animate({opacity: 0.5}, "fast");
        });
});
